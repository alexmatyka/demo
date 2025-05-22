import { useAuthStore } from '@/store/useAuthStore/useAuthStore.tsx'

// TODO: Create token based on email data and then invoke this
export const useAuth = () => {
  const { user, token, isLoading, setUser, clearUser, setLoading } = useAuthStore()

  const login = async (email: string, _password: string) => {
    await new Promise((res) => setTimeout(res, 1000))
    const fakeToken = 'mock-token-123'
    setUser({ email }, fakeToken)
  }

  const logout = () => {
    clearUser()
  }

  const checkAuth = async () => {
    setLoading(true)

    if (!token) {
      setLoading(false)
      return
    }

    try {
      await new Promise((res) => setTimeout(res, 500))
      const email = 'user@example.com'
      setUser({ email }, token)
    } catch {
      clearUser()
    } finally {
      setLoading(false)
    }
  }

  return {
    user,
    token,
    isLoading,
    login,
    logout,
    checkAuth,
  }
}
