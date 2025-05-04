"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "components/ui/button"
import { Input } from "components/ui/input"
import { Label } from "components/ui/label"
import { useCookies } from "react-cookie"
import Link from "next/link"
import { ModeToggle } from "components/mode-toggle"

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 border-b bg-background">
      <Link href="/" className="flex items-center gap-2">
        <img src="/placeholder-logo.svg" alt="Blue Soil Logo" className="h-8 w-8" />
        <span className="font-bold text-lg tracking-tight">Blue Soil</span>
      </Link>
      <ModeToggle />
    </nav>
  )
}

function Footer() {
  return (
    <footer className="w-full py-4 border-t text-center text-xs text-muted-foreground bg-background mt-auto">
      &copy; {new Date().getFullYear()} Blue Soil. All rights reserved.
    </footer>
  )
}

export default function SignUpPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()
  const [cookies, setCookie] = useCookies(["auth-token", "user-role"])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Mock authentication - replace with actual API call
    if (name && email && password) {
      // For demo purposes, we'll use email to determine role
      const isAdmin = email.includes("admin")
      
      setCookie("auth-token", "mock-token", { path: "/" })
      setCookie("user-role", isAdmin ? "admin" : "user", { path: "/" })

      router.push("/dashboard")
    } else {
      setError("Please fill in all fields")
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your details below to create your account
            </p>
          </div>
          <div className="grid gap-6">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}
                <Button type="submit">
                  Create Account
                </Button>
              </div>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>
            <div className="text-center text-sm">
              <span className="text-muted-foreground">
                Already have an account?{" "}
              </span>
              <Link
                href="/auth/sign-in"
                className="font-medium text-primary hover:underline"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}