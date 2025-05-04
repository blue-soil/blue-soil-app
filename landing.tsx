"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Landing() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-slate-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <span className="font-bold">BS</span>
            </div>
            <span className="text-xl font-bold">Blue Soil</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button variant="outline" onClick={() => router.push("/auth/sign-in")}>
              Sign In
            </Button>
            <Button onClick={() => router.push("/auth/sign-up")}>Get Started</Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 flex flex-col gap-4 md:hidden">
            <a href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Smart Agriculture for a <span className="text-primary">Sustainable Future</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
          Blue Soil combines IoT technology, data analytics, and automation to help farmers optimize irrigation, reduce
          water usage, and increase crop yields.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" onClick={() => router.push("/auth/sign-up")}>
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" onClick={() => router.push("/auth/sign-in")}>
            View Demo
          </Button>
        </div>

        {/* Hero Image */}
        <div className="mt-16 rounded-lg bg-white p-4 shadow-xl dark:bg-slate-800">
          <img src="/placeholder.svg?height=600&width=1200" alt="Blue Soil Dashboard" className="mx-auto rounded-md" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-blue-50 py-20 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Key Features</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-primary dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                  <path d="M12 8v-2" />
                  <path d="M12 18v-2" />
                  <path d="M16 12h2" />
                  <path d="M6 12h2" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Real-time Monitoring</h3>
              <p className="text-muted-foreground">
                Track soil moisture, temperature, humidity, and more in real-time with our advanced IoT sensors.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-primary dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Smart Irrigation</h3>
              <p className="text-muted-foreground">
                Automate your irrigation systems based on real-time data and weather forecasts to optimize water usage.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-primary dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Data Analytics</h3>
              <p className="text-muted-foreground">
                Gain insights from historical data to make informed decisions and improve crop yields.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-primary dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Security & Alerts</h3>
              <p className="text-muted-foreground">
                Receive instant notifications for critical events and ensure your farm is protected.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-primary dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Community Forum</h3>
              <p className="text-muted-foreground">
                Connect with other farmers, share knowledge, and get expert advice from our community.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-primary dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Cost Savings</h3>
              <p className="text-muted-foreground">
                Reduce water and energy costs while increasing productivity and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Transform Your Farm?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Join thousands of farmers who are already using Blue Soil to optimize their operations and increase yields.
          </p>
          <Button size="lg" variant="secondary" onClick={() => router.push("/auth/sign-up")}>
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <span className="font-bold">BS</span>
                </div>
                <span className="text-lg font-bold">Blue Soil</span>
              </div>
              <p className="mt-4 text-sm text-slate-400">Smart agriculture solutions for a sustainable future.</p>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} Blue Soil. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
