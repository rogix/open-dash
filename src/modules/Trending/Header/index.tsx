import { Search } from '@/components/Search'
import { HeaderBox } from './style'

export function Header() {
  return (
    <HeaderBox>
      <div>Trending Repositories</div>
      <div className="search-sign-out">
        <Search />
      </div>
    </HeaderBox>
  )
}
