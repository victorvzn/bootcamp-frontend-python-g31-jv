import { Link, NavLink } from 'react-router'

const navItems = [
  { to: '/app', label: 'Inicio' },
]

export default function PrivateHeader() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/app" className="text-sm font-medium tracking-tight text-ink">
          tu-app
        </Link>

        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive ? 'text-ink' : 'text-gray-500 hover:text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-200" />
          <button className="text-sm text-gray-500 hover:text-ink">
            Salir
          </button>
        </div>
      </div>
    </header>
  )
}
