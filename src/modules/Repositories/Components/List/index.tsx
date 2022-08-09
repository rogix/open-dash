import { useQuery, gql } from '@apollo/client'
import { Box, Item } from './style'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { Loader } from '@/components/Loader'
import { fromNow } from '@/utils/time'

const GET_REPOSITORIES = gql`
  query Repositories {
    viewer {
      repositories(last: 10) {
        nodes {
          id
          name
          url
          createdAt
        }
      }
    }
  }
`

type Repository = {
  id: string
  name: string
  url: string
  createdAt: Date
}

export function RepositoriesList() {
  const { loading, error, data } = useQuery(GET_REPOSITORIES)

  if (loading) {
    return <Loader height="400px" backgroundColor="#1B2130" />
  }

  if (error) {
    return <p>Error :(</p>
  }

  const { viewer } = data

  return (
    <Box>
      <h2>Repositories</h2>
      <Item>
        {viewer.repositories.nodes.map(
          ({ id, url, name, createdAt }: Repository) => (
            <li key={id}>
              <div>
                <RiGitRepositoryLine />
                <a href={url}>{name}</a>
              </div>
              Created: {fromNow(createdAt)}
            </li>
          ),
        )}
      </Item>
    </Box>
  )
}
