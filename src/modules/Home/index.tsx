import { Header } from './components/Header'
import { BasicData } from './components/BasicData'
import { SideNav } from './components/Sidenav'
import { Container, Main } from './style'

export function HomePage() {
  return (
    <Container>
      <SideNav />
      <Main>
        <Header />
        <BasicData />
      </Main>
    </Container>
  )
}
