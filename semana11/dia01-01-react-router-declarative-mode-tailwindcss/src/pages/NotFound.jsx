import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="text-center">
      <p className="text-sm text-gray-500">404</p>
      <h1 className="mt-1 text-xl font-medium text-ink">Página no encontrada</h1>
      <Link to="/" className="mt-6 inline-block text-sm text-ink underline underline-offset-2">
        Volver al inicio
      </Link>
    </div>
  )
}
