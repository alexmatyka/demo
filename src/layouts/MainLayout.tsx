import { Outlet } from 'react-router-dom'
import { Header } from '@/ui/organisms'

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1e1e22] text-gray-200">
      <Header />
      <main className="py-6 px-4 flex-grow w-full max-w-screen-2xl mx-auto">
        <Outlet />
      </main>
    </div>
  )
}
