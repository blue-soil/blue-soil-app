"use client"

import { ThemeProvider } from "../components/theme-provider"
import { CookiesProvider } from "react-cookie"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CookiesProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </CookiesProvider>
  )
}