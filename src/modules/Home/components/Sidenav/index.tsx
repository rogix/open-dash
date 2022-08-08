import Link from 'next/link'
import { NavItem, NavSection } from './style'
import { MdDashboard, MdAnalytics } from 'react-icons/md'
import { FaCodeBranch } from 'react-icons/fa'
import { GoVersions } from 'react-icons/go'

export function SideNav() {
  return (
    <NavSection>
      <header>
        <span />
        Open Dash
      </header>
      <div>
        <NavItem>
          <MdDashboard />
          <Link href="/">Overview</Link>
        </NavItem>
        <NavItem>
          <MdAnalytics />
          <Link href="/">Repositories</Link>
        </NavItem>
        <NavItem>
          <FaCodeBranch />
          <Link href="/">Discussions</Link>
        </NavItem>
        <NavItem>
          <GoVersions />
          <Link href="/">Versions</Link>
        </NavItem>
      </div>
    </NavSection>
  )
}
