import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="sticky top-0 bg-white border-b flex justify-between p-4">
      <nav className="flex gap-4">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
          Home
        </NavLink>
        <NavLink to="/trade" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
          Trade
        </NavLink>
      </nav>
      <div>{/* тут будет кнопка логина или инфа о пользователе */}</div>
    </header>
  )
}
