"use client"

import { Bell, Search, Menu } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { User } from "lucide-react"
// import { useAuth } from "@/lib/auth-context"

export default function DashboardHeader({ toggleSidebar, user }) {
  
  // const { user } = useAuth()

  return (
    <header className="h-16 border-b bg-background flex items-center px-4 relative z-20">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        className="md:hidden relative z-50 mr-2"
        aria-label="Toggle navigation menu"
        aria-expanded="false"
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle sidebar</span>
      </Button>

      <div className="flex-1 flex items-center">
        <div className="relative max-w-md w-full hidden md:block">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-8 bg-muted border-0" aria-label="Search dashboard" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative" aria-label="View notifications">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" aria-hidden="true"></span>
          <span className="sr-only">Notifications (1 unread)</span>
        </Button>

        <div className="flex items-center gap-2">
            <User className="w-8 h-8 rounded-full bg-muted p-1 text-muted-foreground" />

          {/* alt={`${user?.name || "User"} profile picture`} */}
          <div className="hidden md:block">
            <p className="text-sm font-medium">{user?.name || "Guest User"}</p>
            <p className="text-xs text-muted-foreground">{user?.email || "guest@example.com"}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
