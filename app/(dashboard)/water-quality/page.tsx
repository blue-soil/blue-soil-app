"use client"
import React, { useState, Suspense } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "components/ui/card"
import { Button } from "components/ui/button"
import { Alert, AlertDescription } from "components/ui/alert"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"

// Mock data
const waterData = {
  pH: 8.2,
  salinity: 1.5, // ppt
  turbidity: 7, // NTU
}
const thresholds = {
  pH: { min: 6.5, max: 8.0 },
  salinity: { min: 0.5, max: 2.0 },
  turbidity: { min: 0, max: 5 },
}
const history = [
  { day: "Mon", pH: 7.8, salinity: 1.2, turbidity: 4 },
  { day: "Tue", pH: 8.1, salinity: 1.3, turbidity: 5 },
  { day: "Wed", pH: 8.2, salinity: 1.5, turbidity: 7 },
  { day: "Thu", pH: 8.0, salinity: 1.4, turbidity: 6 },
  { day: "Fri", pH: 7.9, salinity: 1.6, turbidity: 5 },
  { day: "Sat", pH: 7.7, salinity: 1.5, turbidity: 4 },
  { day: "Sun", pH: 7.8, salinity: 1.4, turbidity: 3 },
]

function isOutOfRange(value: number, { min, max }: { min: number; max: number }): boolean {
  return value < min || value > max
}

export default function WaterQualityPage() {
  const [showThresholds, setShowThresholds] = useState(false)
  const alerts = []
  if (isOutOfRange(waterData.pH, thresholds.pH)) alerts.push("pH is outside the ideal range!")
  if (isOutOfRange(waterData.salinity, thresholds.salinity)) alerts.push("Salinity is outside the ideal range!")
  if (isOutOfRange(waterData.turbidity, thresholds.turbidity)) alerts.push("Turbidity is outside the ideal range!")

  return (
    <Suspense fallback={<div className="flex justify-center items-center h-40"><span className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></span></div>}>
      <div className="space-y-6 max-w-3xl mx-auto w-full">
        <div>
          <h1 className="text-2xl font-bold mb-2">Water Quality</h1>
          <p className="text-muted-foreground mb-4">Monitor and manage your water quality data. Export, review trends, and set your own thresholds.</p>
        </div>
        {alerts.length > 0 && (
          <Alert variant="destructive">
            <AlertDescription>
              {alerts.map((a, i) => (
                <div key={i}>{a}</div>
              ))}
            </AlertDescription>
          </Alert>
        )}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>pH</CardTitle>
              <CardDescription>Current: <b>{waterData.pH}</b></CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">Ideal: {thresholds.pH.min} - {thresholds.pH.max}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Salinity</CardTitle>
              <CardDescription>Current: <b>{waterData.salinity} ppt</b></CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">Ideal: {thresholds.salinity.min} - {thresholds.salinity.max} ppt</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Turbidity</CardTitle>
              <CardDescription>Current: <b>{waterData.turbidity} NTU</b></CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">Ideal: {thresholds.turbidity.min} - {thresholds.turbidity.max} NTU</div>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Historical Trends</CardTitle>
            <CardDescription>Last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={history} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="pH" stroke="#2563eb" strokeWidth={2} name="pH" />
                  <Line type="monotone" dataKey="salinity" stroke="#16a34a" strokeWidth={2} name="Salinity" />
                  <Line type="monotone" dataKey="turbidity" stroke="#f59e42" strokeWidth={2} name="Turbidity" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="outline" onClick={() => setShowThresholds((v) => !v)}>
            {showThresholds ? "Hide" : "Edit"} Thresholds
          </Button>
          <Button size="sm" variant="secondary">Export Data</Button>
        </div>
        {showThresholds && (
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Edit Thresholds</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs mb-1">pH</label>
                  <input type="number" step="0.1" defaultValue={thresholds.pH.min} className="border rounded px-2 py-1 w-20" />
                  <span className="mx-1">-</span>
                  <input type="number" step="0.1" defaultValue={thresholds.pH.max} className="border rounded px-2 py-1 w-20" />
                </div>
                <div>
                  <label className="block text-xs mb-1">Salinity (ppt)</label>
                  <input type="number" step="0.1" defaultValue={thresholds.salinity.min} className="border rounded px-2 py-1 w-20" />
                  <span className="mx-1">-</span>
                  <input type="number" step="0.1" defaultValue={thresholds.salinity.max} className="border rounded px-2 py-1 w-20" />
                </div>
                <div>
                  <label className="block text-xs mb-1">Turbidity (NTU)</label>
                  <input type="number" step="0.1" defaultValue={thresholds.turbidity.min} className="border rounded px-2 py-1 w-20" />
                  <span className="mx-1">-</span>
                  <input type="number" step="0.1" defaultValue={thresholds.turbidity.max} className="border rounded px-2 py-1 w-20" />
                </div>
              </div>
              <Button className="mt-4" size="sm">Save Thresholds</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </Suspense>
  )
}