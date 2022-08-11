import { Header } from './components/Header'
import { BasicData } from './components/BasicData'
import { SideNav } from './components/Sidenav'
import { Container, Main, Search, SecondSection, ThirdSection } from './style'
// import { Technologies } from './components/Technologies'
// import { Details } from './components/Details'
import { useQuery, gql } from '@apollo/client'
import { PinnedRepositories } from './components/PinnedRepositories'
import { Loader } from '@/components/Loader'
import { Error } from '@/components/Error'
// import { githubUser } from '../../services/GithubUser'
import { User } from './types/githubUser'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { HeaderBox } from '@/components/Header/style'

const GET_USER = gql`
  query User($login: String!) {
    user(login: $login) {
      id
      bio
      avatarUrl
      company
      location
      websiteUrl
      createdAt
      name
      login
      pinnedItems(last: 6) {
        edges {
          node {
            ... on Repository {
              id
              name
              description
              url
              createdAt
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
      repositories(
        affiliations: OWNER
        last: 100
        ownerAffiliations: OWNER
        privacy: PUBLIC
      ) {
        edges {
          node {
            id
            description
            name
            languages(last: 100) {
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
`

const Details = dynamic<User>(
  () => import('./components/Details').then(mod => mod.Details),
  {
    ssr: false,
  },
)

const Technologies = dynamic<User>(
  () => import('./components/Technologies').then(mod => mod.Technologies),
  {
    ssr: false,
  },
)

export function Dashboard() {
  const [querySearh, setQuerySearch] = useState('') as any

  const { data, loading, error, refetch } = useQuery(GET_USER, {
    variables: {
      login: 'rogix',
    },
  })

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <Error />
  }

  function handleSearch(e: any) {
    setQuerySearch(e.target.value)
  }

  return (
    <Container>
      <SideNav />
      <Main>
        <HeaderBox>
          <Header
            avatar={data.user.avatarUrl || ''}
            name={data.user.name || ''}
            bio={data.user.bio || ''}
          />
          <Search>
            <input type="text" placeholder="Search" onChange={handleSearch} />
            <button onClick={() => refetch({ login: querySearh })}>Go</button>
          </Search>
        </HeaderBox>
        <BasicData data={data} />
        <SecondSection>
          <PinnedRepositories data={data} />
          <Details data={data} />
        </SecondSection>
        <ThirdSection>
          <Technologies data={data} />
        </ThirdSection>
      </Main>
    </Container>
  )
}
