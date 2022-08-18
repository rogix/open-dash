import Head from 'next/head'

import type { NextPage } from 'next'

import { User } from '@/modules/Dashboard/types/githubUser'
import { HomePage } from '@/modules/Home'

const Home: NextPage<User> = () => {
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
