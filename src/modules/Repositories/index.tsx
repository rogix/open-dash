import { Container, Main, SecondSection, ThirdSection } from './style'
import { useQuery, gql } from '@apollo/client'
import { Loader } from '@/components/Loader'
import { Error } from '@/components/Error'
import { Header } from '@/components/Header'
import { SideNav } from '@/components/Sidenav'
import { RepositoriesList } from './Components/List'

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

export function Repositories() {
  const { loading, error, data } = useQuery(GET_USER)

  if (loading) return <Loader backgroundColor="#131722" />

  if (error) return <Error />

  const { viewer } = data

  return (
    <Container>
      <SideNav />
      <Main>
        <Header />
        <SecondSection></SecondSection>
        <ThirdSection>
          <RepositoriesList />
        </ThirdSection>
      </Main>
    </Container>
  )
}
