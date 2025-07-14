"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  CreditCard,
  BarChart3,
  RefreshCw,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";
// import { logout } from "@/lib/client/actions/auth.js";
import { signOut } from "@/lib/server/actions/auth.js";



export default function DashboardSidebar({ isOpen, activeTab, setActiveTab }) {
  const menuItems = [
    {
      id: "overview",
      label: "Overview",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      id: "expenses",
      label: "Expenses",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      id: "categories",
      label: "Categories",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      id: "recurring",
      label: "Recurring",
      icon: <RefreshCw className="h-5 w-5" />,
    },
  ];

  return (
    <aside
      className={`
        fixed md:relative top-0 left-0 z-40 
        bg-background border-r transition-all duration-300 ease-in-out
        h-screen flex flex-col w-64
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      role="navigation"
      aria-label="Dashboard navigation"
    >
      <div className="p-4 border-b">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded gradient-bg flex items-center justify-center text-white font-bold">
            F
          </div>
          <span className="text-xl font-bold">BudgetWise</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <div className="mb-6">
          <p className="text-xs font-semibold text-muted-foreground uppercase mb-2 px-2">
            Main
          </p>
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-3 rounded-md text-sm
                    transition-colors duration-200 touch-manipulation
                    ${
                      activeTab === item.id
                        ? "bg-muted text-primary font-medium"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }
                  `}
                  aria-current={activeTab === item.id ? "page" : undefined}
                >
                  {item.icon}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase mb-2 px-2">
            Settings
          </p>
          <ul className="space-y-1">
            <li>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 rounded-md text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors duration-200 touch-manipulation"
              >
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-3 rounded-md text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors duration-200 touch-manipulation"
              >
                <HelpCircle className="h-5 w-5" />
                Help & Support
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="p-4 border-t">
        {/* <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-md text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors duration-200 touch-manipulation"
          aria-label="Sign out of your account"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button> */}
        <form action={signOut}>
          <button
            type="submit"
            className="w-full flex items-center gap-3 px-3 py-3 rounded-md text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors duration-200 touch-manipulation"
            aria-label="Sign out of your account"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </form>
      </div>
    </aside>
  );
}
