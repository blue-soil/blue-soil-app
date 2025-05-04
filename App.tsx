import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "./hooks/useAuth"
import { Provider } from "react-redux"
import { store } from "./store"

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider defaultTheme="light" storageKey="blue-soil-theme">
          <BrowserRouter>
            <Suspense
              fallback={
                <div className="flex h-screen w-full items-center justify-center">
                  <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
                </div>
              }
            >
              <AppRoutes />
            </Suspense>
          </BrowserRouter>
          <Toaster />
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  )
}

export default App
