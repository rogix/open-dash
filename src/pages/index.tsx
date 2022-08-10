import Head from 'next/head'
import { Dashboard } from '@/modules/Dashboard'
import { useSession, signIn } from 'next-auth/react'

import type { NextPage } from 'next'
import { HomePage } from '@/modules/Home'
import { getTrendingRepositories } from 'src/services/api'
import { Trending } from '@/modules/Trending'
import { gql } from '@apollo/client'

const Home: NextPage = ({ data }: any) => {
  // const { data: session } = useSession()

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
      <Trending data={data} />
    </>
  )
}

export default Home

export async function getServerSideProps() {
  const data = await getTrendingRepositories()

  return {
    props: {
      data,
    },
  }
}
