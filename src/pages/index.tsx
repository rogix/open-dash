import Head from 'next/head'
import { Header } from '@/components/Header'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </main>
  )
}

export default Home
