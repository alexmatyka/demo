import AppRouter from '@/router/router'
import { useEffect } from 'react'
import { useAuth } from '@/shared/hooks/useAuthStore.ts'

// d new changes 4
export default function App() {
  const { checkAuth } = useAuth()
  // 4
  // 5
  useEffect(() => {
    checkAuth()
    // we only need check it once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <AppRouter />
}
