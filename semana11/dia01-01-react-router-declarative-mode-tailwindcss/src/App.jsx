import { BrowserRouter, Routes, Route, Navigate } from 'react-router'

import PublicLayout from './layouts/PublicLayout.jsx'
import ProtectedLayout from './layouts/ProtectedLayout.jsx'

import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pantallas públicas: usan el Layout + Header por defecto */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Login />} />
        </Route>

        {/* Pantallas privadas: usan el ProtectedLayout + PrivateHeader */}
        <Route element={<ProtectedLayout />}>
          <Route path="/app" element={<Home />} />
        </Route>

        {/* Redirección y 404 */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
