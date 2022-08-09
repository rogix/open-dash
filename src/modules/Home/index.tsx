import { useSession, signIn } from 'next-auth/react'
import { Container } from './style'
import happy from '../../../public/happy-bunch.png'
import graphs from '../../../public/graphs.png'
import Image from 'next/image'

export function HomePage() {
  return (
    <Container>
      <section>
        <h2>Open Dash</h2>
        <Image src={graphs} width={400} height={387} alt="pessoa" />
        <button onClick={() => signIn()}>Sign in</button>
      </section>
    </Container>
  )
}
