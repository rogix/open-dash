import { Search } from '@/components/Search'
import { HeaderBox } from './style'
import Image from 'next/future/image'
import { useSession, signOut } from 'next-auth/react'
import { gql, useQuery } from '@apollo/client'
import { Loader } from '../Loader'

type Props = {
  name: string
  bio: string
  avatar: string
}

const imgStyle = { borderRadius: '50%', marginRight: '1rem' }

const GET_USER = gql`
  query {
    viewer {
      name
      avatarUrl
      bio
      company
      email
    }
  }
`

export function Header() {
  const { loading, error, data } = useQuery(GET_USER)

  if (loading) return <Loader backgroundColor="#131722" />

  if (error) return <h2>Error :(</h2>

  const { viewer } = data

  return (
    <HeaderBox>
      <div>
        <Image
          src={viewer.avatarUrl}
          alt={viewer.name}
          width={40}
          height={40}
          className="avatar"
          style={imgStyle}
        />
        <div>
          <h2>{viewer.name}</h2>
          <p>{viewer.bio}</p>
        </div>
      </div>
      <div className="search-sign-out">
        <Search />
      </div>
    </HeaderBox>
  )
}
