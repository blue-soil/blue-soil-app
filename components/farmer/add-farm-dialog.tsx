import React, { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

interface AddFarmDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddFarm: (farm: { name: string; crop: string; location: string }) => void
}

export function AddFarmDialog({ open, onOpenChange, onAddFarm }: AddFarmDialogProps) {
  const [name, setName] = useState("")
  const [crop, setCrop] = useState("")
  const [location, setLocation] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddFarm({ name, crop, location })
    setName("")
    setCrop("")
    setLocation("")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogTitle>Add New Farm</DialogTitle>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Input
            placeholder="Farm Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <Input
            placeholder="Crop Type"
            value={crop}
            onChange={e => setCrop(e.target.value)}
            required
          />
          <Input
            placeholder="Location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            required
          />
          <Button type="submit">Add Farm</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
