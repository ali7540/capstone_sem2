"use client"

import { Menu } from "lucide-react"
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

      </div>

      <div className="flex items-center gap-4">


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
