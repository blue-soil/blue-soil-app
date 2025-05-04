"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui/tabs"
import { Thermometer, Droplets, Sun, Wind, AlertCircle } from "lucide-react"
import { Suspense } from "react"

// Mock data for IoT devices
const devices = [
  {
    id: "1",
    name: "Field Sensor 1",
    location: "North Field",
    status: "active",
    lastUpdate: "2 minutes ago",
    readings: {
      temperature: 24.5,
      humidity: 65,
      light: 850,
      wind: 12,
    },
  },
  {
    id: "2",
    name: "Field Sensor 2",
    location: "South Field",
    status: "active",
    lastUpdate: "5 minutes ago",
    readings: {
      temperature: 23.8,
      humidity: 70,
      light: 780,
      wind: 15,
    },
  },
]

export default function IoTPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-40"><span className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></span></div>}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">IoT Monitoring</h2>
          <p className="text-muted-foreground">
            Monitor your field sensors and environmental conditions in real-time.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="devices">Devices</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Temperature</CardTitle>
                  <Thermometer className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24.5°C</div>
                  <p className="text-xs text-muted-foreground">
                    Average across all sensors
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Humidity</CardTitle>
                  <Droplets className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">65%</div>
                  <p className="text-xs text-muted-foreground">
                    Average across all sensors
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Light</CardTitle>
                  <Sun className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">850 lux</div>
                  <p className="text-xs text-muted-foreground">
                    Average across all sensors
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Wind Speed</CardTitle>
                  <Wind className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12 km/h</div>
                  <p className="text-xs text-muted-foreground">
                    Average across all sensors
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Sensor Data</CardTitle>
                <CardDescription>
                  Real-time readings from your field sensors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full rounded-md border bg-slate-50 p-4 dark:bg-slate-800">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-sm text-muted-foreground">
                      Sensor data visualization will display here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="devices" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {devices.map((device) => (
                <Card key={device.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{device.name}</CardTitle>
                        <CardDescription>{device.location}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${device.status === "active" ? "bg-green-500" : "bg-red-500"}`} />
                        <span className="text-sm text-muted-foreground">{device.status}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Temperature</div>
                        <div className="text-2xl font-bold">{device.readings.temperature}°C</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Humidity</div>
                        <div className="text-2xl font-bold">{device.readings.humidity}%</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Light</div>
                        <div className="text-2xl font-bold">{device.readings.light} lux</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Wind</div>
                        <div className="text-2xl font-bold">{device.readings.wind} km/h</div>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-muted-foreground">
                      Last updated: {device.lastUpdate}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Active Alerts</CardTitle>
                <CardDescription>
                  Monitor and respond to critical conditions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-[300px] items-center justify-center rounded-md border border-dashed">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <AlertCircle className="h-8 w-8 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      No active alerts at this time
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Suspense>
  )
}