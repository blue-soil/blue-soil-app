"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui/tabs"
import { Users, BarChart2, MessageSquare, Tractor, Activity, TrendingUp } from "lucide-react"

// Mock data for analytics
const stats = {
  users: {
    total: 150,
    active: 120,
    new: 15,
    growth: 12.5,
  },
  farms: {
    total: 250,
    active: 200,
    monitored: 180,
    growth: 8.2,
  },
  iot: {
    devices: 500,
    active: 450,
    alerts: 5,
    growth: 15.3,
  },
  forum: {
    posts: 1200,
    active: 85,
    new: 12,
    growth: 5.8,
  },
}

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <p className="text-muted-foreground">
          System-wide statistics and performance metrics.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="farms">Farms</TabsTrigger>
          <TabsTrigger value="iot">IoT</TabsTrigger>
          <TabsTrigger value="forum">Forum</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.users.total}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  {stats.users.growth}% growth
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Farms</CardTitle>
                <Tractor className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.farms.total}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  {stats.farms.growth}% growth
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">IoT Devices</CardTitle>
                <BarChart2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.iot.devices}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  {stats.iot.growth}% growth
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Forum Posts</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.forum.posts}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  {stats.forum.growth}% growth
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>User Growth</CardTitle>
                <CardDescription>
                  Monthly user registration trends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full rounded-md border bg-slate-50 p-4 dark:bg-slate-800">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-sm text-muted-foreground">
                      User growth chart will display here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>System Activity</CardTitle>
                <CardDescription>
                  Real-time system usage and performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full rounded-md border bg-slate-50 p-4 dark:bg-slate-800">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-sm text-muted-foreground">
                      System activity chart will display here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Analytics</CardTitle>
              <CardDescription>
                Detailed user statistics and behavior
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[600px] w-full rounded-md border bg-slate-50 p-4 dark:bg-slate-800">
                <div className="flex h-full items-center justify-center">
                  <p className="text-sm text-muted-foreground">
                    User analytics dashboard will display here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="farms" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Farm Analytics</CardTitle>
              <CardDescription>
                Farm management and monitoring statistics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[600px] w-full rounded-md border bg-slate-50 p-4 dark:bg-slate-800">
                <div className="flex h-full items-center justify-center">
                  <p className="text-sm text-muted-foreground">
                    Farm analytics dashboard will display here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="iot" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>IoT Analytics</CardTitle>
              <CardDescription>
                Device performance and sensor data analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[600px] w-full rounded-md border bg-slate-50 p-4 dark:bg-slate-800">
                <div className="flex h-full items-center justify-center">
                  <p className="text-sm text-muted-foreground">
                    IoT analytics dashboard will display here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forum" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Forum Analytics</CardTitle>
              <CardDescription>
                Community engagement and content analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[600px] w-full rounded-md border bg-slate-50 p-4 dark:bg-slate-800">
                <div className="flex h-full items-center justify-center">
                  <p className="text-sm text-muted-foreground">
                    Forum analytics dashboard will display here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 