import Head from 'next/head'
import { Dashboard } from '@/modules/Dashboard'

import type { GetServerSideProps, NextPage } from 'next'
import { githubUser } from 'src/services/GithubUser'
import { useQuery } from '@apollo/client'
import { client } from 'src/apollo/client'
import { User } from '@/modules/Dashboard/types/githubUser'

const Home: NextPage<User> = () => {
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

// export async function getStaticProps() {
//   const { query } = githubUser('rogix')

//   const { data } = await client.query({
//     query,
//   })

//   return {
//     props: { data },
//   }
// }
