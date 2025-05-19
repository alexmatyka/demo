import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
  const token = localStorage.getItem('token') || true
  return !!token
}

export default function ProtectedRoute() {
  const isAuth = useAuth()

  return isAuth ? <Outlet /> : <Navigate to="/" />
}
