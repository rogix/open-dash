import { DataSection, DataSectionItem } from './style'
import { AiTwotoneStar } from 'react-icons/ai'
import { FaGithub, FaHome } from 'react-icons/fa'
import { GoVersions } from 'react-icons/go'

export function BasicData() {
  return (
    <DataSection>
      <DataSectionItem>
        <div>
          <FaHome />
          <span>Website</span>
        </div>
        <h2>react.com</h2>
      </DataSectionItem>
      <DataSectionItem>
        <div>
          <FaGithub />
          <span>Github</span>
        </div>
        <h2>react</h2>
      </DataSectionItem>
      <DataSectionItem>
        <div>
          <AiTwotoneStar />
          <span>Stars</span>
        </div>
        <h2>2345</h2>
      </DataSectionItem>
      <DataSectionItem>
        <div>
          <GoVersions />
          <span>Current version</span>
        </div>
        <h2>18.1</h2>
      </DataSectionItem>
    </DataSection>
  )
}
