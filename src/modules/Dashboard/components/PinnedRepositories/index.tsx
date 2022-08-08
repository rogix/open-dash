import { useQuery, gql } from '@apollo/client'
import { Box, Item } from './style'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { Loader } from '@/components/Loader'

const GET_PINNED_REPOSITORIES = gql`
  query PinnedRepositories {
    viewer {
      pinnedItems(last: 6) {
        edges {
          node {
            ... on Repository {
              id
              name
              description
              url
              languages(last: 10) {
                edges {
                  node {
                    id
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export function PinnedRepositories() {
  const { loading, error, data } = useQuery(GET_PINNED_REPOSITORIES)

  if (loading) {
    return <Loader height="400px" backgroundColor="#1B2130" />
  }

  if (error) {
    return <p>Error :(</p>
  }

  const { viewer } = data

  return (
    <Box>
      <h2>Pinned Repositories</h2>
      <Item>
        {viewer.pinnedItems.edges.map(({ node }: any) => (
          <li key={node.id}>
            <div>
              <RiGitRepositoryLine />
              <a href={node.url}>{node.name}</a>
            </div>
            Created At: {node.createdAt}
          </li>
        ))}
      </Item>
    </Box>
  )
}
