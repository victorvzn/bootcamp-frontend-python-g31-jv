import { Outlet } from 'react-router'
import Header from '../components/Header.jsx'

export default function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFDFC]">
      <Header />

      <main class="max-w-xl mx-auto px-6 py-16">
        <Outlet />
      </main>

      <footer>
        <p class="text-center text-xs text-neutral-400">
          <a href="https://github.com/victorvzn/bootcamp-frontend-python-g31-jv" target="_blank" class="hover:underline">
            Bootcamp Frontend Python G31 JV - Victor Villazón
          </a>
        </p>
      </footer>
    </div>
  )
}
