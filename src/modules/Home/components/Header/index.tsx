import { Search } from '@/components/Search'
import { HeaderBox } from './style'
import Image from 'next/future/image'

type Props = {
  name: string
  bio: string
  avatar: string
}

const imgStyle = { borderRadius: '50%', marginRight: '1rem' }

export function Header({ avatar, name, bio }: Props) {
  return (
    <HeaderBox>
      <div>
        <Image
          src={avatar}
          alt={name}
          width={40}
          height={40}
          className="avatar"
          style={imgStyle}
        />
        <div>
          <h2>{name}</h2>
          <p>{bio}</p>
        </div>
      </div>
      <Search />
    </HeaderBox>
  )
}
