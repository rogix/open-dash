import Link from 'next/link'

export function Header() {
  return (
    <header>
      <nav>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header>
  )
}
