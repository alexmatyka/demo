import { useState, MouseEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { LoginModal } from '@/ui/organisms/LoginModal/LoginModal'
import { Popover, PopoverButton, PopoverPanel, Button } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'
import { useAuth } from '@/shared/hooks/useAuthStore.ts'
import { useAuthStore } from '@/store/useAuthStore/useAuthStore.tsx'

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { login, logout } = useAuth()
  const { isAuth } = useAuthStore()

  const onOpenLoginModal = () => setIsModalOpen(true)

  const onCloseLoginModal = () => setIsModalOpen(false)

  const onLogOut = () => logout()

  const onLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    await login('', '')
    setIsModalOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-[#2b2c30] shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
      <div className="py-8 px-4 flex justify-between items-center w-full max-w-screen-2xl mx-auto">
        <div className="flex gap-12 items-center">
          <h2 className="text-xl font-bold text-emerald-400">PensionCoin</h2>
          <nav className="flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-emerald-400 font-semibold' : 'text-gray-400 hover:text-gray-200'
              }
            >
              Home
            </NavLink>
            {isAuth && (
              <NavLink
                to="/trade"
                className={({ isActive }) =>
                  isActive ? 'text-emerald-400 font-semibold' : 'text-gray-400 hover:text-gray-200'
                }
              >
                Trade
              </NavLink>
            )}
          </nav>
        </div>

        <div>
          {isAuth ? (
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-2 h-10 px-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm">
                  U
                </div>
                <ChevronDown size={16} className="text-white" />
              </PopoverButton>
              <PopoverPanel
                anchor="bottom end"
                className="absolute z-50 mt-2 w-56 rounded-md bg-[#1f1f22] shadow-xl ring-1 ring-black/10 focus:outline-none"
              >
                <div className="px-4 py-3 border-b border-gray-700">
                  <p className="text-sm text-gray-100">Logged in as</p>
                  <p className="text-sm font-medium text-emerald-400">user@example.com</p>
                </div>
                <div className="p-2">
                  <button
                    className="w-full text-left px-4 py-2 rounded text-sm hover:bg-emerald-600 hover:text-white text-gray-300 transition"
                    onClick={onLogOut}
                  >
                    Log out
                  </button>
                </div>
              </PopoverPanel>
            </Popover>
          ) : (
            <Button
              onClick={onOpenLoginModal}
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded"
            >
              Log In
            </Button>
          )}
        </div>
      </div>
      <LoginModal isOpen={isModalOpen} onClose={onCloseLoginModal} onSubmit={onLogin} />
    </header>
  )
}
