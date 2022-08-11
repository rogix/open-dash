import { DataSection, DataSectionItem } from './style'
import { GoLocation } from 'react-icons/go'
import { FaGithub, FaHome } from 'react-icons/fa'
import { IoMdBusiness } from 'react-icons/io'
import { User } from '../../types/githubUser'

export function BasicData({ data }: User) {
  const { user } = data

  return (
    <DataSection>
      <DataSectionItem>
        <div>
          <FaHome />
          <span>Website</span>
        </div>
        <h2>{user.websiteUrl || '-'}</h2>
      </DataSectionItem>
      <DataSectionItem>
        <div>
          <FaGithub />
          <span>Github</span>
        </div>
        <h2>{user.login}</h2>
      </DataSectionItem>
      <DataSectionItem>
        <div>
          <GoLocation />
          <span>Location</span>
        </div>
        <h2>{user.location || '-'}</h2>
      </DataSectionItem>
      <DataSectionItem>
        <div>
          <IoMdBusiness />
          <span>Current company</span>
        </div>
        <h2>{user.company}</h2>
      </DataSectionItem>
    </DataSection>
  )
}
