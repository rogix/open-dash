import { DataSection, DataSectionItem } from './style'
import { GoLocation } from 'react-icons/go'
import { FaGithub, FaHome } from 'react-icons/fa'
import { IoMdBusiness } from 'react-icons/io'

import { useQuery, gql } from '@apollo/client'

const GET_USER = gql`
  query {
    viewer {
      name
      websiteUrl
      avatarUrl
      bio
      company
      email
      login
      location
    }
  }
`

export function BasicData() {
  const { loading, error, data } = useQuery(GET_USER)

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error :(</p>
  }

  const { viewer } = data

  return (
    <DataSection>
      <DataSectionItem>
        <div>
          <FaHome />
          <span>Website</span>
        </div>
        <h2>{viewer.websiteUrl}</h2>
      </DataSectionItem>
      <DataSectionItem>
        <div>
          <FaGithub />
          <span>Github</span>
        </div>
        <h2>{viewer.login}</h2>
      </DataSectionItem>
      <DataSectionItem>
        <div>
          <GoLocation />
          <span>Location</span>
        </div>
        <h2>{viewer.location}</h2>
      </DataSectionItem>
      <DataSectionItem>
        <div>
          <IoMdBusiness />
          <span>Current company</span>
        </div>
        <h2>{viewer.company}</h2>
      </DataSectionItem>
    </DataSection>
  )
}
