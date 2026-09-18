import { Outlet } from 'react-router'
import Header from '../components/Header.jsx'

export default function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFDFC]">
      <Header />
      <main className="flex flex-1 items-center justify-center px-6">
        <Outlet />
      </main>
    </div>
  )
}
