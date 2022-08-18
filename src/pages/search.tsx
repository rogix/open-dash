import { SearchResults } from '@/modules/SearchResults'
import { useRouter } from 'next/router'

export default function SearchPage() {
  const { query } = useRouter()

  return (
    <div>
      <SearchResults query={query} />
    </div>
  )
}
