import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get("auth-token")?.value
  const userRole = request.cookies.get("user-role")?.value

  // Public routes that don't require authentication
  const publicRoutes = ["/", "/auth/sign-in", "/auth/sign-up"]
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next()
  }

  // If no token, redirect to sign in
  if (!token) {
    const url = new URL("/auth/sign-in", request.url)
    url.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(url)
  }

  // Role-based access control
  if (pathname.startsWith("/admin") && userRole !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
} 