"use client"
import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "components/ui/card"
import { Button } from "components/ui/button"
import { Alert, AlertDescription } from "components/ui/alert"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"
import { Droplet, Thermometer, Sun, AlertTriangle, Info, Leaf, Play, Pause } from "lucide-react"
import { AddFarmDialog } from "components/farmer/add-farm-dialog"

const sustainabilityTips = [
  "Mulch your soil to retain moisture and reduce evaporation.",
  "Schedule irrigation for early morning or late evening to minimize water loss.",
  "Regularly check for leaks in pipes and hoses.",
  "Rotate crops to improve soil health and reduce pests.",
]

type Farm = {
  id: string
  name: string
  crops: string[]
  location: string
  sensors: {
    moisture: number
    temperature: number
    humidity: number
    online: boolean
    leak: boolean
    overIrrigation: boolean
  }
  irrigationActive: boolean
  aiRecommendation: string
  waterUsage: { day: string; usage: number }[]
}

// Demo initial data
const initialFarms: Farm[] = [
  {
    id: "farm-1",
    name: "Green Valley",
    crops: ["Corn", "Soybeans"],
    location: "North Field",
    sensors: {
      moisture: 31,
      temperature: 22,
      humidity: 60,
      online: true,
      leak: false,
      overIrrigation: false,
    },
    irrigationActive: false,
    aiRecommendation: "Irrigate in the early morning for best results.",
    waterUsage: [
      { day: "Mon", usage: 120 },
      { day: "Tue", usage: 110 },
      { day: "Wed", usage: 130 },
      { day: "Thu", usage: 100 },
      { day: "Fri", usage: 90 },
      { day: "Sat", usage: 80 },
      { day: "Sun", usage: 95 },
    ],
  },
]

export default function MyFarmerPage() {
  const [farmList, setFarmList] = useState<Farm[]>(initialFarms)
  const [selectedFieldId, setSelectedFieldId] = useState<string>(farmList[0]?.id ?? "")
  const [dialogOpen, setDialogOpen] = useState(false)
  const selectedField = farmList.find(f => f.id === selectedFieldId) ?? farmList[0]
  const [irrigationActive, setIrrigationActive] = useState(selectedField?.irrigationActive ?? false)

  // Alerts for UI
  const alerts: string[] = []
  if (selectedField && !selectedField.sensors.online) alerts.push("Sensor offline: Data may be outdated.")
  if (selectedField && selectedField.sensors.leak) alerts.push("Leak detected! Check irrigation system.")
  if (selectedField && selectedField.sensors.overIrrigation) alerts.push("Over-irrigation warning: Reduce water usage.")

  // Handlers
  const handleIrrigationToggle = () => setIrrigationActive((prev) => !prev)
  const handleAddFarm = (farm: { name: string; crop: string; location: string }) => {
    const newFarm: Farm = {
      id: `farm-${Date.now()}`,
      name: farm.name,
      crops: farm.crop.split(",").map(c => c.trim()),
      location: farm.location,
      sensors: {
        moisture: 30,
        temperature: 22,
        humidity: 60,
        online: true,
        leak: false,
        overIrrigation: false,
      },
      irrigationActive: false,
      aiRecommendation: "No recommendation yet.",
      waterUsage: [
        { day: "Mon", usage: 0 },
        { day: "Tue", usage: 0 },
        { day: "Wed", usage: 0 },
        { day: "Thu", usage: 0 },
        { day: "Fri", usage: 0 },
        { day: "Sat", usage: 0 },
        { day: "Sun", usage: 0 },
      ],
    }
    setFarmList(prev => {
      const updated = [...prev, newFarm]
      setSelectedFieldId(newFarm.id)
      return updated
    })
    setDialogOpen(false)
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto w-full p-2 md:p-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">My Farm Insights</h2>
          <p className="text-muted-foreground">Monitor your fields and irrigation in real time.</p>
        </div>
        <Button onClick={() => setDialogOpen(true)}>Add Farm</Button>
        <AddFarmDialog open={dialogOpen} onOpenChange={setDialogOpen} onAddFarm={handleAddFarm} />
      </div>
      <div className="flex gap-2 flex-wrap items-center mb-2">
        <label htmlFor="field-select" className="text-sm font-medium flex items-center gap-1">
          <Sun className="h-4 w-4 text-yellow-500" /> Field:
        </label>
        <select
          id="field-select"
          className="border rounded px-2 py-1 text-sm"
          value={selectedFieldId}
          onChange={e => setSelectedFieldId(e.target.value)}
        >
          {farmList.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
        </select>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {farmList.map((farm) => (
          <Card key={farm.id} className={`cursor-pointer hover:shadow-lg transition ${selectedFieldId === farm.id ? "border-primary border-2" : ""}`} onClick={() => setSelectedFieldId(farm.id)}>
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <CardTitle className="text-lg font-semibold">{farm.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 text-xs">
                <span>Moisture: <b>{farm.sensors.moisture}%</b></span>
                <span>Temp: <b>{farm.sensors.temperature}&deg;C</b></span>
                <span>Humidity: <b>{farm.sensors.humidity}%</b></span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {alerts.length > 0 && (
        <Alert variant="destructive">
          <AlertDescription>
            {alerts.map((a, i) => (
              <div key={i} className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-red-500" /> {a}</div>
            ))}
          </AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <Droplet className="h-5 w-5 text-blue-500" />
            <CardTitle className="text-sm font-medium">Soil Moisture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{selectedField.sensors.moisture}%</div>
            <p className="text-xs text-muted-foreground">Current</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <Thermometer className="h-5 w-5 text-orange-500" />
            <CardTitle className="text-sm font-medium">Temperature</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{selectedField.sensors.temperature}&deg;C</div>
            <p className="text-xs text-muted-foreground">Current</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <Sun className="h-5 w-5 text-yellow-500" />
            <CardTitle className="text-sm font-medium">Humidity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{selectedField.sensors.humidity}%</div>
            <p className="text-xs text-muted-foreground">Current</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>AI Irrigation Recommendation</CardTitle>
          <CardDescription>Personalized advice for this field</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-base text-primary font-medium flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-400" /> {selectedField.aiRecommendation}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Irrigation Control</CardTitle>
            <CardDescription>Start or stop irrigation for this field</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Button
              size="sm"
              variant={irrigationActive ? "destructive" : "default"}
              className={!irrigationActive ? "bg-green-600 text-white hover:bg-green-700" : ""}
              onClick={handleIrrigationToggle}
              disabled={!selectedField.sensors.online}
            >
              {irrigationActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {irrigationActive ? "Stop Irrigation" : "Start Irrigation"}
            </Button>
            {!selectedField.sensors.online && (
              <span className="text-xs text-red-500 flex items-center gap-1"><AlertTriangle className="h-4 w-4" /> Device offline</span>
            )}
          </div>
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
              <LineChart data={selectedField.waterUsage} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
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

      <Card>
        <CardHeader className="flex flex-row items-center gap-2">
          <Leaf className="h-5 w-5 text-green-600" />
          <CardTitle className="text-base font-semibold">Sustainability Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {sustainabilityTips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}