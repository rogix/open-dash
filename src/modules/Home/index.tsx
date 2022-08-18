import { About, Container, Search } from './style'
import { useRouter } from 'next/router'
import { useState } from 'react'

export function HomePage() {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('REPOSITORY')

  const router = useRouter()

  return (
    <Container>
      <section>
        <About>
          <h2>Welcome to Open Dash</h2>
          <p>
            Open Dash is a free open-source dashboard for GitHub repositories.
            It is designed to be a quick and easy way to get a quick overview of
            your repositories.
          </p>
        </About>

        <Search>
          <select
            onChange={e => {
              setType(e.target.value)
            }}
          >
            <option value="REPOSITORY">Repositories</option>
            <option value="USER">Users</option>
          </select>
          <input
            type="text"
            placeholder={
              type === 'REPOSITORY' ? 'Search repositories' : 'Search users'
            }
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button
            onClick={() => {
              router.push({
                pathname: '/search',
                query: {
                  q: query,
                },
              })
            }}
          >
            Search
          </button>
        </Search>
      </section>
    </Container>
  )
}
