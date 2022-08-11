// create a context for search
import { createContext, useContext, useState } from 'react'

type Props = {
  search: string
  setSearch: (search: string) => void
  children: React.ReactNode
}

export const SearchContext = createContext<{
  search: (query: string) => void
}>({
  search: () => {},
})

export const SearchProvider = ({ children }: Props) => {
  const [search, setSearch] = useState('')

  const searchContext = {
    search: (query: string) => {
      setSearch(query)
    },
  }

  return (
    <SearchContext.Provider value={searchContext}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => {
  const context = useContext(SearchContext)
  return context
}

// const searchComponent = ({ children }: Props) => {
//   const { search } = useSearch()
//   return (
//     <input
//       type="text"
//       placeholder="Search"
//       onChange={(e) => search(e.target.value)}
//     />
//   )
// }
