import { Link } from 'react-router'

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-sm font-medium tracking-tight text-ink">
          tu-app
        </Link>
      </div>
    </header>
  )
}
