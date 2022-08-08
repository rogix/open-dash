import Head from 'next/head'
import { HomePage } from 'src/modules/Home'
import { useSession, signIn, signOut } from 'next-auth/react'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { data: session } = useSession()

  if (!session) {
    return (
      <div>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Open Dash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  )
}

export default Home
