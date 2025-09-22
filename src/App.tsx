import AppRouter from '@/router/router'
import { useEffect } from 'react'
import { useAuth } from '@/shared/hooks/useAuthStore.ts'

// my new changes
export default function App() {
  const { checkAuth } = useAuth()

  useEffect(() => {
    checkAuth()
    // we only need check it once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <AppRouter />
}
