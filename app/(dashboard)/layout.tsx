"use client"

import { useState } from "react"
import { cn } from "lib/utils"
import { Button } from "components/ui/button"
import { Home, Users, MessageSquare, BarChart2, Settings, LogOut, Menu, LineChart } from "lucide-react"
import { NavItem } from "components/ui/nav-item"
import { usePathname } from "next/navigation"
import { useCookies } from "react-cookie"
import { ModeToggle } from "../../components/mode-toggle"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const pathname = usePathname()
  const [cookies, setCookie, removeCookie] = useCookies(["user-role", "auth-token"])
  const isAdmin = cookies["user-role"] === "admin"

  const handleSignOut = () => {
    removeCookie("auth-token", { path: "/" })
    removeCookie("user-role", { path: "/" })
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-64 border-r bg-card transition-transform duration-300 lg:static lg:translate-x-0",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex h-16 items-center justify-between border-b px-6">
            <h1 className="text-xl font-semibold">Blue Soil</h1>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          <nav className="space-y-1 p-4">
            <NavItem href="/dashboard" icon={<Home className="h-4 w-4" />}>
              Dashboard
            </NavItem>
            <NavItem href="/farmer" icon={<Users className="h-4 w-4" />}>
              Farmers
            </NavItem>
            <NavItem href="/forum" icon={<MessageSquare className="h-4 w-4" />}>
              Forum
            </NavItem>
            <NavItem href="/iot" icon={<BarChart2 className="h-4 w-4" />}>
              IoT
            </NavItem>
            <NavItem href="/reports" icon={<BarChart2 className="h-4 w-4" />}>
              Reports
            </NavItem>
            <NavItem href="/water-quality" icon={<BarChart2 className="h-4 w-4" />}>
              Water Quality
            </NavItem>
            {isAdmin && (
              <NavItem href="/admin/analytics" icon={<LineChart className="h-4 w-4" />}>
                Analytics
              </NavItem>
            )}
            <NavItem href="/settings" icon={<Settings className="h-4 w-4" />}>
              Settings
            </NavItem>
          </nav>
          <div className="mt-auto border-t p-4">
            <Button variant="ghost" className="w-full justify-start" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-background px-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <h2 className="text-lg font-semibold">
                {pathname.split("/")[1].charAt(0).toUpperCase() + pathname.split("/")[1].slice(1)}
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <UserNav />
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

function UserNav() {
  const [cookies] = useCookies(["user-role"])
  const isAdmin = cookies["user-role"] === "admin"

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-primary/10" />
        <div className="hidden md:block">
          <div className="text-sm font-medium">
            {isAdmin ? "Admin User" : "Regular User"}
          </div>
          <div className="text-xs text-muted-foreground">
            {isAdmin ? "Administrator" : "Farmer"}
          </div>
        </div>
      </div>
    </div>
  )
}