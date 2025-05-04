"use client"

import type React from "react"

import { lazy } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import AppLayout from "components/ui/app-layout"
import { useAuth } from "hooks/useAuth"

// Lazy-loaded pages
const Landing = lazy(() => import("landing"))
const Dashboard = lazy(() => import("app/(dashboard)/dashboard/page"))
const Farmer = lazy(() => import("app/(dashboard)/farmer/page"))
const Forum = lazy(() => import("app/(dashboard)/forum/page"))
const IoT = lazy(() => import("app/(dashboard)/iot/page"))
const Reports = lazy(() => import("app/(dashboard)/reports/page"))
const SignIn = lazy(() => import("app/auth/sign-in/page"))
const SignUp = lazy(() => import("app/auth/sign-up/page"))

// Protected route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/auth/sign-in" replace />
  }

  return <>{children}</>
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth/sign-in" element={<SignIn />} />
      <Route path="/auth/sign-up" element={<SignUp />} />

      {/* Protected routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="farmer" element={<Farmer />} />
        <Route path="forum" element={<Forum />} />
        <Route path="iot" element={<IoT />} />
        <Route path="reports" element={<Reports />} />
      </Route>

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRoutes
