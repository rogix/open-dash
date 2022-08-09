import Head from 'next/head'
import { Dashboard } from '@/modules/Dashboard'
import { useSession, signIn } from 'next-auth/react'

import type { NextPage } from 'next'
import { HomePage } from '@/modules/Home'

const Home: NextPage = () => {
  const { data: session } = useSession()

  // if (!session) {
  //   return (
  //     <div>
  //       <HomePage />
  //     </div>
  //   )
  // }

  return (
    <>
      <Head>
        <title>Open Dash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </>
  )
}

export default Home
