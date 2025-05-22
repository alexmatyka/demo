import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '@/store/useAuthStore/useAuthStore.tsx'

export const ProtectedRoute = () => {
  const { isAuth, isLoading } = useAuthStore()

  if (isLoading) {
    return <div className="text-white text-center mt-10">Checking authentication...</div>
  }

  return isAuth ? <Outlet /> : <Navigate to="/" />
}
