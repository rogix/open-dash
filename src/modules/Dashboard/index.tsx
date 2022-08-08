import { Header } from './components/Header'
import { BasicData } from './components/BasicData'
import { SideNav } from './components/Sidenav'
import { Container, Main, SecondSection, ThirdSection } from './style'
import { Technologies } from './components/Technologies'
import { Details } from './components/Details'
import { useQuery, gql } from '@apollo/client'
import { PinnedRepositories } from './components/PinnedRepositories'
import { Loader } from '@/components/Loader'
import { Error } from '@/components/Error'

const GET_USER = gql`
  query {
    viewer {
      name
      avatarUrl
      bio
      company
      email
    }
  }
`

export function Dashboard() {
  const { loading, error, data } = useQuery(GET_USER)

  if (loading) return <Loader backgroundColor="#131722" />

  if (error) return <Error />

  const { viewer } = data

  return (
    <Container>
      <SideNav />
      <Main>
        <Header avatar={viewer.avatarUrl} name={viewer.name} bio={viewer.bio} />
        <BasicData />
        <SecondSection>
          <PinnedRepositories />
          <Details />
        </SecondSection>
        <ThirdSection>
          <Technologies />
        </ThirdSection>
      </Main>
    </Container>
  )
}
