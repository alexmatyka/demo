import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type User = {
  email: string
}

type AuthState = {
  user: User | null
  token: string | null
  isLoading: boolean
  isAuth: boolean
  setUser: (user: User, token: string) => void
  clearUser: () => void
  setLoading: (loading: boolean) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoading: true,
      isAuth: false,
      setUser: (user, token) => set({ user, token, isAuth: true }),

      clearUser: () => set({ user: null, token: null, isAuth: false }),

      setLoading: (isLoading) => set({ isLoading }),
    }),
    {
      name: 'auth-storage', // ключ в localStorage
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuth: state.isAuth,
      }),
    }
  )
)
