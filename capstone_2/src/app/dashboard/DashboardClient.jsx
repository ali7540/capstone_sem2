"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

import { generateSampleData } from "@/lib/sample-data"
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import BudgetOverview from "@/components/dashboard/budget-overview"
import ExpensesList from "@/components/dashboard/expenses-list"
import CategoryManagement from "@/components/dashboard/category-management"
import AddExpenseDialog from "@/components/dashboard/add-expense-dialog"
import AddCategoryDialog from "@/components/dashboard/add-category-dialog"
import RecurringExpenses from "@/components/dashboard/recurring-expenses"


export default function DashboardPage({ user ,categories, expenses}) {
  

  // const [categories, setCategories] = useState([])
  // const [expenses, setExpenses] = useState([])

  const [showAddExpense, setShowAddExpense] = useState(false)
  const [showAddCategory, setShowAddCategory] = useState(false)

  const [activeTab, setActiveTab] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const colorPalette = {
    primary: "#8B5CF6",
    secondary: "#9333EA",
    tertiary: "#06B6D4",
    success: "#10B981",
    warning: "#F59E0B",
    danger: "#EF4444",
    info: "#3B82F6",
    purple: "#8B5CF6",
    pink: "#EC4899",
    indigo: "#6366F1",
  }

   useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true)
      } else {
        setSidebarOpen(false)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // useEffect(() => {
  //   const loadData = () => {
  //     const storedCategories = localStorage.getItem(`fintrack-categories-${user?.id}`)
  //     const storedExpenses = localStorage.getItem(`fintrack-expenses-${user?.id}`)

  //     if (storedCategories && storedExpenses) {
  //       setCategories(JSON.parse(storedCategories))
  //       setExpenses(JSON.parse(storedExpenses))
  //     } else {
  //       const { categories, expenses } = generateSampleData()
  //       setCategories(categories)
  //       setExpenses(expenses)
  //     }
  //   }

  //   loadData()
  // }, [user])

  // useEffect(() => {
  //   if (user) {
  //     localStorage.setItem(`fintrack-categories-${user.id}`, JSON.stringify(categories))
  //     localStorage.setItem(`fintrack-expenses-${user.id}`, JSON.stringify(expenses))
  //   }
  // }, [categories, expenses, user])

  // useEffect(() => {
  //   const checkBudgetAlerts = () => {
  //     categories.forEach((category) => {
  //       const categoryExpenses = expenses.filter((expense) => expense.categoryId === category.id)
  //       const totalSpent = categoryExpenses.reduce((sum, expense) => sum + expense.amount, 0)

  //       if (totalSpent > category.budget && category.budget > 0) {
  //         toast({
  //           title: "Budget Exceeded",
  //           description: `You've exceeded your budget for ${category.name}`,
  //           variant: "destructive",
  //         })
  //       } else if (totalSpent > category.budget * 0.9 && totalSpent <= category.budget && category.budget > 0) {
  //         toast({
  //           title: "Budget Alert",
  //           description: `You're approaching your budget limit for ${category.name}`,
  //           variant: "warning",
  //         })
  //       }
  //     })
  //   }

  //   checkBudgetAlerts()
  // }, [categories, expenses, toast])

  // const addExpense = (expense) => {
  //   setExpenses([...expenses, expense])
  //   setShowAddExpense(false)
  // }

  // const addCategory = (category) => {
  //   setCategories([...categories, category])
  //   setShowAddCategory(false)
  // }

  const updateCategory = (updatedCategory) => {
    setCategories(categories.map((category) => (category.id === updatedCategory.id ? updatedCategory : category)))
  }

  const deleteCategory = (categoryId) => {
    setCategories(categories.filter((category) => category.id !== categoryId))
    setExpenses(expenses.filter((expense) => expense.categoryId !== categoryId))
  }

  const deleteExpense = (expenseId) => {
    setExpenses(expenses.filter((expense) => expense.id !== expenseId))
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

   const handleBackdropClick = () => {
    if (window.innerWidth < 768) {
      // Only on mobile
      setSidebarOpen(false)
    }
  }
  return (
    <div className="flex h-screen">
      <DashboardSidebar isOpen={sidebarOpen} activeTab={activeTab} setActiveTab={setActiveTab} user={user}/>
       {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity duration-300"
          onClick={handleBackdropClick}
          aria-hidden="true"
        />
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} user={user}/>

        <main className="flex-1 overflow-y-auto p-4">
          <div
            className="container mx-auto max-w-7xl"
            style={{
              "--chart-color-1": colorPalette.primary,
              "--chart-color-2": colorPalette.secondary,
              "--chart-color-3": colorPalette.tertiary,
              "--chart-color-4": colorPalette.success,
              "--chart-color-5": colorPalette.warning,
              "--chart-color-6": colorPalette.danger,
              "--chart-color-7": colorPalette.info,
              "--chart-color-8": colorPalette.purple,
              "--chart-color-9": colorPalette.pink,
              "--chart-color-10": colorPalette.indigo,
            }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">
                  {activeTab === "overview" && "Dashboard Overview"}
                  {activeTab === "expenses" && "Expenses"}
                  {activeTab === "categories" && "Budget Categories"}
                  {activeTab === "recurring" && "Recurring Expenses"}
                </h1>
                <p className="text-muted-foreground">Manage your finances with ease</p>
              </div>

              <div className="flex gap-2">
                <Button onClick={() => setShowAddExpense(true)} className="gradient-bg">
                  <Plus className="mr-2 h-4 w-4" /> Add Expense
                </Button>
                <Button variant="outline" onClick={() => setShowAddCategory(true)}>
                  <Plus className="mr-2 h-4 w-4" /> Add Category
                </Button>
              </div>
            </div>

            {categories.length === 0 ? (
              <Card>
                <CardHeader>
                  <CardTitle>Welcome to Your Financial Dashboard</CardTitle>
                  <CardDescription>Get started by adding your first budget category</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={() => setShowAddCategory(true)} className="gradient-bg">
                    <Plus className="mr-2 h-4 w-4" /> Add Your First Category
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <>
                {activeTab === "overview" && (
                  <BudgetOverview categories={categories} expenses={expenses} colorPalette={colorPalette} />
                )}

                {activeTab === "expenses" && (
                  <ExpensesList
                    expenses={expenses}
                    categories={categories}
                    onDeleteExpense={deleteExpense}
                    onAddExpense={() => setShowAddExpense(true)}
                    colorPalette={colorPalette}
                  />
                )}

                {activeTab === "categories" && (
                  <CategoryManagement
                    categories={categories}
                    expenses={expenses}
                    onUpdateCategory={updateCategory}
                    onDeleteCategory={deleteCategory}
                    onAddCategory={() => setShowAddCategory(true)}
                    colorPalette={colorPalette}
                  />
                )}

                {activeTab === "recurring" && (
                  <RecurringExpenses
                    categories={categories}
                    expenses={expenses.filter((expense) => expense.isRecurring)}
                    onAddExpense={() => setShowAddExpense(true)}
                    colorPalette={colorPalette}
                  />
                )}
              </>
            )}
          </div>
        </main>
      </div>

      {showAddExpense && (
        <AddExpenseDialog
          open={showAddExpense}
          onClose={() => setShowAddExpense(false)}
          // onAddExpense={addExpense}
          categories={categories}
        />
      )}

      {showAddCategory && (
        <AddCategoryDialog
          open={showAddCategory}
          onClose={() => setShowAddCategory(false)}
          // onAddCategory={addCategory}
        />
      )}
    </div>
  )
}
