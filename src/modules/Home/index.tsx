import { Header } from './components/Header'
import { BasicData } from './components/BasicData'
import { SideNav } from './components/Sidenav'
import { Container, Main, SecondSection, ThirdSection } from './style'
import { Technologies } from './components/Technologies'
import { Details } from './components/Details'
import { useQuery, gql } from '@apollo/client'
import { PinnedRepositories } from './components/PinnedRepositories'

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

export function HomePage() {
  const { loading, error, data } = useQuery(GET_USER)

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error :(</p>
  }

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
