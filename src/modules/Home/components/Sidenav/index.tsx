import Link from 'next/link'
import { NavItem, NavSection } from './style'
import { MdDashboard, MdAnalytics } from 'react-icons/md'
import { FaCodeBranch } from 'react-icons/fa'
import { GoVersions } from 'react-icons/go'

export function SideNav() {
  return (
    <NavSection>
      <header>Open Dash</header>
      <div>
        <NavItem>
          <MdDashboard />
          <Link href="/">Dashboard</Link>
        </NavItem>
        <NavItem>
          <MdAnalytics />
          <Link href="/">Analytics</Link>
        </NavItem>
        <NavItem>
          <FaCodeBranch />
          <Link href="/">Dependecies</Link>
        </NavItem>
        <NavItem>
          <GoVersions />
          <Link href="/">Versions</Link>
        </NavItem>
      </div>
    </NavSection>
  )
}
