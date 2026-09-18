import { Outlet } from 'react-router'
import PrivateHeader from '../components/PrivateHeader.jsx'

// Cascarón de layout para rutas protegidas.
// Aquí es donde luego conectarías tu verificación de sesión/auth
// (por ejemplo, redirigir a "/" con <Navigate /> si no hay usuario).
export default function ProtectedLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFDFC]">
      <PrivateHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        <Outlet />
      </main>
    </div>
  )
}
