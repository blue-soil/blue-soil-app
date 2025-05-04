import { useState } from "react"

export function useAuth() {
  // In a real app, replace this with context or global state
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Example: check localStorage or cookie
    return Boolean(localStorage.getItem("auth_token"))
  })

  const login = (token: string) => {
    localStorage.setItem("auth_token", token)
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem("auth_token")
    setIsAuthenticated(false)
  }

  return {
    isAuthenticated,
    login,
    logout,
  }
}
