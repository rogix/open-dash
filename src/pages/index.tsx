import Head from 'next/head'
import { Dashboard } from '@/modules/Dashboard'

import type { NextPage } from 'next'

const Home: NextPage = () => {
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
