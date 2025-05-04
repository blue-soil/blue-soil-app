"use client"
import React, { useState, Suspense } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "components/ui/card"
import { Button } from "components/ui/button"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, BarChart, Bar, Legend } from "recharts"

// Mock data
const regions = ["North Field", "South Field", "East Orchard"]
const monthlyData = [
  { month: "Jan", North: 1200, South: 900, East: 700 },
  { month: "Feb", North: 1100, South: 950, East: 800 },
  { month: "Mar", North: 1300, South: 1000, East: 850 },
  { month: "Apr", North: 1400, South: 1100, East: 900 },
  { month: "May", North: 1500, South: 1200, East: 950 },
  { month: "Jun", North: 1600, South: 1300, East: 1000 },
  { month: "Jul", North: 1700, South: 1400, East: 1100 },
  { month: "Aug", North: 1800, South: 1500, East: 1200 },
  { month: "Sep", North: 1750, South: 1450, East: 1150 },
  { month: "Oct", North: 1600, South: 1300, East: 1000 },
  { month: "Nov", North: 1400, South: 1100, East: 900 },
  { month: "Dec", North: 1300, South: 1000, East: 850 },
]
const yearlyData = [
  { year: 2022, North: 15000, South: 12000, East: 9000 },
  { year: 2023, North: 16500, South: 13500, East: 10500 },
]

const regionKeys = ["North", "South", "East"] as const;
type RegionKey = typeof regionKeys[number];

export default function ReportsPage() {
  const [region, setRegion] = useState("All")
  const filteredMonthly = region === "All"
    ? monthlyData
    : monthlyData.map((m) => ({ month: m.month, Usage: m[region.split(" ")[0] as RegionKey] }))
  const filteredYearly = region === "All"
    ? yearlyData
    : yearlyData.map((y) => ({ year: y.year, Usage: y[region.split(" ")[0] as RegionKey] }))

  return (
    <Suspense fallback={<div className="flex justify-center items-center h-40"><span className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></span></div>}>
      <div className="space-y-6 max-w-4xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold mb-2">Reports</h1>
            <p className="text-muted-foreground mb-4">View and analyze your farm's water usage. Filter by region and export your data.</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <select
              className="border rounded px-2 py-1 text-sm"
              value={region}
              onChange={e => setRegion(e.target.value)}
            >
              <option value="All">All Regions</option>
              {regions.map(r => <option key={r}>{r}</option>)}
            </select>
            <Button size="sm" variant="secondary">Export CSV</Button>
            <Button size="sm" variant="outline">Download PDF</Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Water Usage</CardTitle>
              <CardDescription>Compare usage by month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  {region === "All" ? (
                    <BarChart data={monthlyData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="North" fill="#2563eb" />
                      <Bar dataKey="South" fill="#16a34a" />
                      <Bar dataKey="East" fill="#f59e42" />
                    </BarChart>
                  ) : (
                    <LineChart data={filteredMonthly} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="Usage" stroke="#2563eb" strokeWidth={3} dot={{ r: 5 }} />
                    </LineChart>
                  )}
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Yearly Water Usage</CardTitle>
              <CardDescription>Year-over-year summary</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  {region === "All" ? (
                    <BarChart data={yearlyData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="North" fill="#2563eb" />
                      <Bar dataKey="South" fill="#16a34a" />
                      <Bar dataKey="East" fill="#f59e42" />
                    </BarChart>
                  ) : (
                    <LineChart data={filteredYearly} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="Usage" stroke="#2563eb" strokeWidth={3} dot={{ r: 5 }} />
                    </LineChart>
                  )}
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Total Water Used (This Year)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{yearlyData[yearlyData.length-1].North + yearlyData[yearlyData.length-1].South + yearlyData[yearlyData.length-1].East} L</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Most Efficient Region</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-semibold">East Orchard</div>
              <div className="text-xs text-muted-foreground">Lowest usage per acre</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Peak Usage Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-semibold">August</div>
              <div className="text-xs text-muted-foreground">Highest water consumption</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Suspense>
  )
}