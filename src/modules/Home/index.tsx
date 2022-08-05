import { Header } from './components/Header'
import { BasicData } from './components/BasicData'
import { SideNav } from './components/Sidenav'
import { Container, Main, SecondSection } from './style'
import { Introduction } from './components/Introduction'
import { Details } from './components/Details'

export function HomePage() {
  return (
    <Container>
      <SideNav />
      <Main>
        <Header />
        <BasicData />
        <SecondSection>
          <Introduction />
          <Details />
        </SecondSection>
      </Main>
    </Container>
  )
}
