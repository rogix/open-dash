import { SearchBox } from './style'
import { BiSearch } from 'react-icons/bi'

export function Search() {
  return (
    <SearchBox>
      <input type="text" placeholder="Search" />
      {/* <span>
        <BiSearch />
      </span> */}
    </SearchBox>
  )
}
