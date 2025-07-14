import { generateId } from "./utils"

export function generateSampleData() {
  // Sample categories
  const categories = [
    {
      id: generateId(),
      name: "Groceries",
      budget: 500,
      color: "#FF7E00", // orange
    },
    {
      id: generateId(),
      name: "Entertainment",
      budget: 200,
      color: "#FF9500", // orange
    },
    {
      id: generateId(),
      name: "Transportation",
      budget: 300,
      color: "#FFB700", // orange
    },
    {
      id: generateId(),
      name: "Utilities",
      budget: 250,
      color: "#FF5722", // orange
    },
    {
      id: generateId(),
      name: "Dining Out",
      budget: 350,
      color: "#FF3D00", // orange
    },
  ]

  const expenses = []
  const now = new Date()
  const currentMonth = now.getMonth()
  const currentYear = now.getFullYear()

  // Grocery expenses
  for (let i = 1; i <= 4; i++) {
    const date = new Date(currentYear, currentMonth, i * 7)
    expenses.push({
      id: generateId(),
      description: `Grocery shopping - Week ${i}`,
      amount: 80 + Math.floor(Math.random() * 40),
      categoryId: categories[0].id,
      date: date.toISOString(),
      isRecurring: false,
    })
  }

  // Entertainment expenses
  expenses.push({
    id: generateId(),
    description: "Movie tickets",
    amount: 35,
    categoryId: categories[1].id,
    date: new Date(currentYear, currentMonth, 5).toISOString(),
    isRecurring: false,
  })

  expenses.push({
    id: generateId(),
    description: "Concert tickets",
    amount: 120,
    categoryId: categories[1].id,
    date: new Date(currentYear, currentMonth, 15).toISOString(),
    isRecurring: false,
  })

  // Transportation expenses
  expenses.push({
    id: generateId(),
    description: "Gas",
    amount: 45,
    categoryId: categories[2].id,
    date: new Date(currentYear, currentMonth, 3).toISOString(),
    isRecurring: false,
  })

  expenses.push({
    id: generateId(),
    description: "Car maintenance",
    amount: 150,
    categoryId: categories[2].id,
    date: new Date(currentYear, currentMonth, 12).toISOString(),
    isRecurring: false,
  })

  // Utilities expenses
  expenses.push({
    id: generateId(),
    description: "Electricity bill",
    amount: 95,
    categoryId: categories[3].id,
    date: new Date(currentYear, currentMonth, 10).toISOString(),
    isRecurring: true,
    recurringFrequency: "monthly",
  })

  expenses.push({
    id: generateId(),
    description: "Internet bill",
    amount: 75,
    categoryId: categories[3].id,
    date: new Date(currentYear, currentMonth, 15).toISOString(),
    isRecurring: true,
    recurringFrequency: "monthly",
  })

  expenses.push({
    id: generateId(),
    description: "Water bill",
    amount: 45,
    categoryId: categories[3].id,
    date: new Date(currentYear, currentMonth, 20).toISOString(),
    isRecurring: true,
    recurringFrequency: "monthly",
  })

  // Dining out expenses
  expenses.push({
    id: generateId(),
    description: "Dinner with friends",
    amount: 85,
    categoryId: categories[4].id,
    date: new Date(currentYear, currentMonth, 8).toISOString(),
    isRecurring: false,
  })

  expenses.push({
    id: generateId(),
    description: "Lunch at work",
    amount: 12,
    categoryId: categories[4].id,
    date: new Date(currentYear, currentMonth, 2).toISOString(),
    isRecurring: true,
    recurringFrequency: "weekly",
  })

  expenses.push({
    id: generateId(),
    description: "Coffee subscription",
    amount: 20,
    categoryId: categories[4].id,
    date: new Date(currentYear, currentMonth, 1).toISOString(),
    isRecurring: true,
    recurringFrequency: "monthly",
  })

  return { categories, expenses }
}
