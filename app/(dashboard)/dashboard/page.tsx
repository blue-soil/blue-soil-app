"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "components/ui/card"
import { Users, BarChart2, MessageSquare, Tractor, Activity, Droplet, Leaf } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"
import { Suspense } from "react"

// Mock data for dashboard
const stats = {
  farmers: {
    total: 150,
    active: 120,
    new: 15,
  },
  farms: {
    total: 250,
    active: 200,
    monitored: 180,
  },
  iot: {
    devices: 500,
    active: 450,
    alerts: 5,
  },
  forum: {
    posts: 1200,
    active: 85,
    new: 12,
  },
}

// Mock data for farmer dashboard
const soilMoisture = 32 // percent
const weeklyWater = 2100 // liters
const cropHealth = "Good"
const aiRecommendation = "Irrigate fields 2 and 3 for 20 minutes tonight. Soil moisture is below optimal in those areas."
const waterUsageData = [
  { day: "Mon", usage: 300 },
  { day: "Tue", usage: 320 },
  { day: "Wed", usage: 310 },
  { day: "Thu", usage: 305 },
  { day: "Fri", usage: 295 },
  { day: "Sat", usage: 340 },
  { day: "Sun", usage: 330 },
]

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-40"><span className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></span></div>}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Your farm at a glance</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Droplet className="h-5 w-5 text-blue-500" /> Soil Moisture
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{soilMoisture}%</div>
              <p className="text-xs text-muted-foreground">Current average across all fields</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Activity className="h-5 w-5 text-green-500" /> Weekly Water Consumption
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{weeklyWater} L</div>
              <p className="text-xs text-muted-foreground">Total used this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Leaf className="h-5 w-5 text-emerald-500" /> Crop Health
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{cropHealth}</div>
              <p className="text-xs text-muted-foreground">AI assessment</p>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>AI Irrigation Recommendation</CardTitle>
            <CardDescription>Personalized advice for your fields</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-base text-primary font-medium">{aiRecommendation}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>7-Day Water Usage</CardTitle>
            <CardDescription>Track your water consumption</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={waterUsageData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="usage" stroke="#2563eb" strokeWidth={3} dot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </Suspense>
  )
}