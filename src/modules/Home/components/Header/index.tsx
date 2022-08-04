import { Search } from '@/components/Search'
import { HeaderBox } from './style'

export function Header() {
  return (
    <HeaderBox>
      <h2>Main</h2>
      <Search />
    </HeaderBox>
  )
}
