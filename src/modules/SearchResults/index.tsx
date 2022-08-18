import { gql, useQuery } from '@apollo/client'
import Image from 'next/future/image'
import { RiStarLine } from 'react-icons/ri'
import { BiGitRepoForked } from 'react-icons/bi'
import { Card, Container, Header } from './style'

const Search = gql`
  query Search($q: String!, $type: String!) {
    search(query: $q, type: REPOSITORY, last: 10) {
      nodes {
        ... on Repository {
          id
          name
          owner {
            id
            login
            avatarUrl
          }
          nameWithOwner
          stargazerCount
          forkCount
          description
        }
      }
    }
  }
`

function SearchResults({ query }: any) {
  const { data, loading, error } = useQuery(Search, {
    variables: {
      q: query.q,
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const { search } = data

  return (
    <section>
      <Header>
        <h2>Search results for {query.q}</h2>
      </Header>
      <Container>
        <ul>
          {search.nodes.map((repo: any) => (
            <li key={repo.id}>
              <Card href={`/repository/${repo.nameWithOwner}`}>
                <div className="card-top">
                  <div>
                    <Image
                      src={repo.owner.avatarUrl}
                      alt={repo.owner.login}
                      width={40}
                      height={40}
                    />
                    {repo.nameWithOwner}
                  </div>
                  <p>{repo.description}</p>
                </div>
                <div className="card-bottom">
                  <div className="card-bottom--stars">
                    <RiStarLine />
                    <span>{repo.stargazerCount}</span>
                  </div>
                  <div className="card-bottom--stars">
                    <BiGitRepoForked />
                    <span>{repo.forkCount}</span>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export { SearchResults }
