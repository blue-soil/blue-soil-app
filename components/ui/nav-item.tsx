"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "lib/utils"
import { ReactNode } from "react"

interface NavItemProps {
  href: string
  icon: ReactNode
  children: ReactNode
}

export function NavItem({ href, icon, children }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
        isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
      )}
    >
      {icon}
      {children}
    </Link>
  )
} 