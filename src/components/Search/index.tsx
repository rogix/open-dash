import { SearchBox } from './style'
import { BiSearch } from 'react-icons/bi'

type Props = {
  search: string
  setSearch: (search: string) => void
}

export function Search({ setSearch }: any) {
  return (
    <SearchBox>
      <input type="text" placeholder="Search" onChange={() => setSearch} />
      {/* <span>
        <BiSearch />
      </span> */}
    </SearchBox>
  )
}
