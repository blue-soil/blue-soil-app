"use client"

import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "components/ui/card"
import { Button } from "components/ui/button"
import { Input } from "components/ui/input"
import { MessageSquare, Plus, Search } from "lucide-react"

// Mock data for forum
const categories = [
  {
    id: "1",
    name: "Crop Management",
    description: "Discuss best practices for crop cultivation",
    threads: 45,
    posts: 230,
  },
  {
    id: "2",
    name: "Soil Health",
    description: "Share knowledge about soil conditions and improvement",
    threads: 32,
    posts: 180,
  },
  {
    id: "3",
    name: "Weather & Climate",
    description: "Discuss weather patterns and climate impact",
    threads: 28,
    posts: 150,
  },
  {
    id: "4",
    name: "Equipment & Tools",
    description: "Share experiences with farming equipment",
    threads: 25,
    posts: 120,
  },
]

export default function ForumPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-40"><span className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></span></div>}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Community Forum</h2>
          <p className="text-muted-foreground">
            Connect with other farmers and share knowledge.
          </p>
        </div>

        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-x-4 md:space-y-0">
          <div className="relative flex flex-1 items-center">
            <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search discussions..."
              className="pl-8"
            />
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Discussion
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((category) => (
            <Card key={category.id} className="cursor-pointer transition-colors hover:bg-accent">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                  <MessageSquare className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div>
                    <span className="font-medium">{category.threads}</span> threads
                  </div>
                  <div>
                    <span className="font-medium">{category.posts}</span> posts
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Suspense>
  )
}