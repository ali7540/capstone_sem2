// "use client"

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import {
//   BarChart,
//   Bar,
//   LineChart,
//   Line,
//   AreaChart,
//   Area,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   RadialBarChart,
//   RadialBar,
// } from "recharts"
// import { formatCurrency } from "@/lib/utils"

// export default function EnhancedCharts({ categories, expenses, colorPalette }) {
//   const categoryData = categories.map((category) => {
//     const categoryExpenses = expenses.filter((expense) => expense.categoryId === category.$id)
//     const spent = categoryExpenses.reduce((sum, expense) => sum + expense.amount, 0)
//     const remaining = category.budget - spent
//     const percentSpent = category.budget > 0 ? (spent / category.budget) * 100 : 0

//     return {
//       name: category.name,
//       budget: category.budget,
//       spent,
//       remaining: Math.max(0, remaining),
//       percentSpent,
//       color: category.color,
//     }
//   })

//   const monthlyData = [
//     { month: "Jan", spending: 2400, budget: 3000 },
//     { month: "Feb", spending: 2800, budget: 3000 },
//     { month: "Mar", spending: 2200, budget: 3000 },
//     { month: "Apr", spending: 3200, budget: 3000 },
//     { month: "May", spending: 2900, budget: 3000 },
//     { month: "Jun", spending: 2600, budget: 3000 },
//   ]

//   const radialData = categoryData.map((item, index) => ({
//     ...item,
//     fill: colorPalette
//       ? Object.values(colorPalette)[index % Object.values(colorPalette).length]
//       : item.color,
//   }))

//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-background p-3 border rounded-lg shadow-lg">
//           <p className="font-medium">{label}</p>
//           {payload.map((entry, index) => (
//             <p key={index} className="text-sm" style={{ color: entry.color }}>
//               {entry.name}: {typeof entry.value === "number" ? formatCurrency(entry.value) : entry.value}
//             </p>
//           ))}
//         </div>
//       )
//     }
//     return null
//   }

//   return (
//     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//       <Card className="col-span-full lg:col-span-2 animate-fade-in">
//         <CardHeader>
//           <CardTitle>Budget vs Spending Comparison</CardTitle>
//           <CardDescription>Compare your budget allocations with actual spending</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={categoryData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Legend />
//                 <Bar dataKey="budget" fill="hsl(var(--chart-1))" name="Budget" />
//                 <Bar dataKey="spent" fill="hsl(var(--chart-2))" name="Spent" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </CardContent>
//       </Card>

//       <Card className="animate-fade-in" style={{ animationDelay: "100ms" }}>
//         <CardHeader>
//           <CardTitle>Budget Utilization</CardTitle>
//           <CardDescription>Percentage of budget used per category</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <RadialBarChart
//                 cx="50%"
//                 cy="50%"
//                 innerRadius="20%"
//                 outerRadius="90%"
//                 data={radialData}
//               >
//                 <RadialBar dataKey="percentSpent" cornerRadius={10} />
//                 <Tooltip content={<CustomTooltip />} />
//               </RadialBarChart>
//             </ResponsiveContainer>
//           </div>
//         </CardContent>
//       </Card>

//       <Card className="col-span-full lg:col-span-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
//         <CardHeader>
//           <CardTitle>Monthly Spending Trend</CardTitle>
//           <CardDescription>Track your spending patterns over time</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={monthlyData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Legend />
//                 <Line
//                   type="monotone"
//                   dataKey="spending"
//                   stroke="hsl(var(--chart-1))"
//                   strokeWidth={3}
//                   name="Spending"
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="budget"
//                   stroke="hsl(var(--chart-4))"
//                   strokeWidth={2}
//                   strokeDasharray="5 5"
//                   name="Budget"
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </CardContent>
//       </Card>

//       <Card className="animate-fade-in" style={{ animationDelay: "300ms" }}>
//         <CardHeader>
//           <CardTitle>Spending Flow</CardTitle>
//           <CardDescription>Visualize spending distribution</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <AreaChart data={categoryData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Area
//                   type="monotone"
//                   dataKey="spent"
//                   stroke="hsl(var(--chart-2))"
//                   fill="hsl(var(--chart-2) / 0.3)"
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }



"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts"
import { formatCurrency } from "@/lib/utils"

export default function EnhancedCharts({ categories, expenses, colorPalette }) {
  const categoryData = categories.map((category) => {
    const categoryExpenses = expenses.filter((expense) => expense.categoryId === category.$id)
    const spent = categoryExpenses.reduce((sum, expense) => sum + expense.amount, 0)
    const remaining = category.budget - spent
    const percentSpent = category.budget > 0 ? (spent / category.budget) * 100 : 0

    return {
      name: category.name,
      budget: category.budget,
      spent,
      remaining: Math.max(0, remaining),
      percentSpent: Number(percentSpent.toFixed(2)),
      color: category.color,
    }
  })

  const monthlyData = [
    { month: "Jan", spending: 2400, budget: 3000 },
    { month: "Feb", spending: 2800, budget: 3000 },
    { month: "Mar", spending: 2200, budget: 3000 },
    { month: "Apr", spending: 3200, budget: 3000 },
    { month: "May", spending: 2900, budget: 3000 },
    { month: "Jun", spending: 2600, budget: 3000 },
  ]

  const radialData = categoryData.map((item, index) => ({
    ...item,
    fill: colorPalette
      ? Object.values(colorPalette)[index % Object.values(colorPalette).length]
      : item.color,
  }))

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background p-3 border rounded-lg shadow-lg">
          <p className="font-medium">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}:{" "}
              {typeof entry.value === "number" ? formatCurrency(entry.value) : entry.value}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Bar Chart: Budget vs Spending */}
      <Card className="col-span-full lg:col-span-2 animate-fade-in">
        <CardHeader>
          <CardTitle>Budget vs Spending Comparison</CardTitle>
          <CardDescription>Compare your budget allocations with actual spending</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="budget" fill="#8884d8" name="Budget" />
                <Bar dataKey="spent" fill="#82ca9d" name="Spent" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Radial Chart: Budget Utilization */}
      <Card className="animate-fade-in" style={{ animationDelay: "100ms" }}>
        <CardHeader>
          <CardTitle>Budget Utilization</CardTitle>
          <CardDescription>Percentage of budget used per category</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                innerRadius="20%"
                outerRadius="90%"
                barSize={12}
                data={radialData}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  angleAxisId={0}
                  tick={false}
                />
                <RadialBar
                  background
                  clockWise
                  dataKey="percentSpent"
                  cornerRadius={6}
                />
                <Tooltip content={<CustomTooltip />} />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Line Chart: Monthly Spending Trend */}
      <Card className="col-span-full lg:col-span-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
        <CardHeader>
          <CardTitle>Monthly Spending Trend</CardTitle>
          <CardDescription>Track your spending patterns over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="spending"
                  stroke="#8884d8"
                  strokeWidth={3}
                  name="Spending"
                />
                <Line
                  type="monotone"
                  dataKey="budget"
                  stroke="#ffc658"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Budget"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Area Chart: Spending Flow */}
      <Card className="animate-fade-in" style={{ animationDelay: "300ms" }}>
        <CardHeader>
          <CardTitle>Spending Flow</CardTitle>
          <CardDescription>Visualize spending distribution</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="spent"
                  stroke="#82ca9d"
                  fill="rgba(130, 202, 157, 0.3)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

