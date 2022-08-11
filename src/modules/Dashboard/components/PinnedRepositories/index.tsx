import { useQuery, gql } from '@apollo/client'
import { Box, Item } from './style'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { Loader } from '@/components/Loader'
import { fromNow } from '@/utils/time'
import { User } from '../../types/githubUser'

export function PinnedRepositories({ data }: User) {
  const { user } = data

  return (
    <Box>
      <h2>Pinned Repositories</h2>
      <Item>
        {user.pinnedItems.edges.map(({ node }: any) => (
          <li key={node.id}>
            <div>
              <RiGitRepositoryLine />
              <a href={node.url}>{node.name}</a>
            </div>
            Created: {fromNow(node.createdAt)}
          </li>
        ))}
      </Item>
    </Box>
  )
}
