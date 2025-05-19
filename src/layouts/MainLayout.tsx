import { Outlet, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function MainLayout() {
  const [isLoggedIn, _setIsLoggedIn] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md px-4 py-2 flex justify-between items-center">
        <nav className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/trade"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
            }
          >
            Trade
          </NavLink>
        </nav>

        <div>
          {isLoggedIn ? (
            <span className="text-sm text-gray-700">Welcome, User</span>
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-1 rounded"
              onClick={() => {
                // Здесь можно открыть модалку логина
                alert('Open login modal')
              }}
            >
              Log In
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        <Outlet />
      </main>
    </div>
  )
}
