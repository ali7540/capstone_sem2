"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/lib/utils";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { AlertTriangle, TrendingUp, DollarSign } from "lucide-react";
import EnhancedCharts from "./enhanced-charts";

export default function BudgetOverview({ categories, expenses, colorPalette }) {
  const totalBudget = categories.reduce(
    (sum, category) => sum + category.budget,
    0
  );
  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const totalRemaining = totalBudget - totalSpent;
  const percentSpent = totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0;

  const categorySpending = categories.map((category) => {
    const categoryExpenses = expenses.filter(
      (expense) => expense.categoryId === category.$id
    );
    const spent = categoryExpenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );
    const remaining = category.budget - spent;
    const percentSpent =
      category.budget > 0 ? (spent / category.budget) * 100 : 0;
    const isOverBudget = spent > category.budget && category.budget > 0;

    return {
      ...category,
      spent,
      remaining,
      percentSpent,
      isOverBudget,
    };
  });

  // const pieChartData = categorySpending
  //   .filter((category) => category.spent > 0)
  //   .map((category) => ({
  //     name: category.name,
  //     value: category.spent,
  //     color: category.color,
  //   }));
  const pieChartData = categorySpending
    .filter((category) => category.spent > 0 && isFinite(category.spent))
    .map((category, index) => ({
      name: category.name || `Category ${index + 1}`,
      value: Number(category.spent) || 0,
      color: category.color || "#8884d8",
    }));

  const overBudgetCategories = categorySpending.filter(
    (category) => category.isOverBudget
  );
  const topSpendingCategories = [...categorySpending]
    .sort((a, b) => b.spent - a.spent)
    .slice(0, 3);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background p-2 border rounded shadow-sm">
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-sm">{formatCurrency(payload[0].value)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-full animate-fade-in">
          <CardHeader>
            <CardTitle>Total Budget</CardTitle>
            <CardDescription>Your overall budget summary</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">
                  Total Budget
                </div>
                <div className="text-2xl font-bold">
                  {formatCurrency(totalBudget)}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">
                  Total Spent
                </div>
                <div className="text-2xl font-bold">
                  {formatCurrency(totalSpent)}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">
                  Remaining
                </div>
                <div
                  className={`text-2xl font-bold ${
                    totalRemaining < 0 ? "text-destructive" : "text-primary"
                  }`}
                >
                  {formatCurrency(totalRemaining)}
                </div>
              </div>
              <div className="col-span-full">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">
                    {percentSpent.toFixed(0)}% spent
                  </span>
                  <span className="text-sm">
                    {(100 - percentSpent).toFixed(0)}% remaining
                  </span>
                </div>
                <Progress
                  value={percentSpent}
                  className="h-3 transition-all duration-500"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-full md:col-span-1 lg:col-span-2 row-span-2 animate-slide-in-left">
          <CardHeader>
            <CardTitle>Budget by Category</CardTitle>
            <CardDescription>Track spending across categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categorySpending.map((category, index) => (
                <div
                  key={category.$id}
                  className="space-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: category.color }}
                      />
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <div className="text-sm">
                      {formatCurrency(category.spent)} /{" "}
                      {formatCurrency(category.budget)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress
                      value={Math.min(category.percentSpent, 100)}
                      className="h-2 transition-all duration-500"
                      indicatorColor={
                        category.isOverBudget
                          ? "bg-destructive"
                          : category.percentSpent > 75
                          ? "bg-[var(--chart-color-5)]"
                          : category.percentSpent > 50
                          ? "bg-[var(--chart-color-1)]"
                          : "bg-[var(--chart-color-4)]"
                      }
                    />
                    <span className="text-xs w-12 text-right">
                      {category.percentSpent.toFixed(0)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* <Card className="col-span-full md:col-span-1 row-span-2 animate-slide-in-right">
          <CardHeader>
            <CardTitle>Spending Distribution</CardTitle>
            <CardDescription>Where your money is going</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="chart-container">
              {pieChartData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                      animationBegin={0}
                      animationDuration={800}
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            colorPalette
                              ? Object.values(colorPalette)[
                                  index % Object.values(colorPalette).length
                                ]
                              : entry.color
                          }
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                      layout="vertical"
                      verticalAlign="middle"
                      align="right"
                      formatter={(value) => (
                        <span className="text-xs">{value}</span>
                      )}
                    />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p className="text-muted-foreground">
                    No spending data to display
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>  */}
{/* 
        <Card className="col-span-full md:col-span-1 row-span-2 animate-slide-in-right">
          <CardHeader>
            <CardTitle>Spending Distribution</CardTitle>
            <CardDescription>Where your money is going</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="chart-container">
              {pieChartData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                      animationBegin={0}
                      animationDuration={800}
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                      layout="vertical"
                      verticalAlign="middle"
                      align="right"
                      formatter={(value) => (
                        <span className="text-xs">{value}</span>
                      )}
                    />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p className="text-muted-foreground">
                    No spending data to display
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card> */}

        <Card className="animate-scale-in" style={{ animationDelay: "200ms" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            {overBudgetCategories.length > 0 ? (
              <div className="space-y-2">
                {overBudgetCategories.map((category) => (
                  <div
                    key={category.$id}
                    className="flex items-center justify-between text-sm"
                  >
                    <span>{category.name}</span>
                    <span className="text-destructive font-medium">
                      {formatCurrency(category.spent - category.budget)} over
                      budget
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                No budget alerts at this time
              </p>
            )}
          </CardContent>
        </Card>

        <Card className="animate-scale-in" style={{ animationDelay: "300ms" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Spending</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {topSpendingCategories.map((category) => (
                <div
                  key={category.$id}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-2"
                      style={{ backgroundColor: category.color }}
                    />
                    <span>{category.name}</span>
                  </div>
                  <span>{formatCurrency(category.spent)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="animate-scale-in" style={{ animationDelay: "400ms" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Monthly Savings
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {totalRemaining >= 0 ? (
                <span style={{ color: "var(--chart-color-4)" }}>
                  {formatCurrency(totalRemaining)}
                </span>
              ) : (
                <span style={{ color: "var(--chart-color-6)" }}>
                  {formatCurrency(totalRemaining)}
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              {totalRemaining >= 0
                ? "You're under budget. Great job!"
                : "You're over budget. Consider adjusting your spending."}
            </p>
          </CardContent>
        </Card>
      </div>

      <EnhancedCharts
        categories={categories}
        expenses={expenses}
        colorPalette={colorPalette}
      />
    </div>
  );
}
