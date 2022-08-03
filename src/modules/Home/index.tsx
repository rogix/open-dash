import { Header } from '@/components/Header'
import { SideNav } from './components/Sidenav'
import { MainSection } from './style'

export function HomePage() {
  return (
    <MainSection>
      <SideNav />
      <main>
        <Header />
      </main>
    </MainSection>
  )
}
