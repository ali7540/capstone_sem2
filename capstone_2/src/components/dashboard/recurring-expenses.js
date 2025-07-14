// "use client"

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { formatCurrency, formatDate } from "@/lib/utils"
// import { Plus, MoreHorizontal, RefreshCw } from "lucide-react"

// export default function RecurringExpenses({ expenses, categories, onAddExpense }) {
//   const getCategoryName = (categoryId) => {
//     const category = categories.find((cat) => cat.$id === categoryId)
//     return category ? category.name : "Uncategorized"
//   }

//   const getCategoryColor = (categoryId) => {
//     const category = categories.find((cat) => cat.$id === categoryId)
//     return category ? category.color : "#CBD5E1"
//   }

//   const getFrequencyLabel = (frequency) => {
//     const labels = {
//       daily: "Daily",
//       weekly: "Weekly",
//       biweekly: "Bi-weekly",
//       monthly: "Monthly",
//       quarterly: "Quarterly",
//       yearly: "Yearly",
//     }
//     return labels[frequency] || frequency
//   }

//   const calculateMonthlyTotal = () => {
//     return expenses.reduce((total, expense) => {
//       let monthlyAmount = 0

//       switch (expense.recurringFrequency) {
//         case "daily":
//           monthlyAmount = expense.amount * 30
//           break
//         case "weekly":
//           monthlyAmount = expense.amount * 4.33
//           break
//         case "biweekly":
//           monthlyAmount = expense.amount * 2.17
//           break
//         case "monthly":
//           monthlyAmount = expense.amount
//           break
//         case "quarterly":
//           monthlyAmount = expense.amount / 3
//           break
//         case "yearly":
//           monthlyAmount = expense.amount / 12
//           break
//         default:
//           monthlyAmount = expense.amount
//       }

//       return total + monthlyAmount
//     }, 0)
//   }

//   const monthlyTotal = calculateMonthlyTotal()

//   return (
//     <Card>
//       <CardHeader>
//         <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
//           <div>
//             <CardTitle>Recurring Expenses</CardTitle>
//             <CardDescription>Manage your recurring expenses</CardDescription>
//           </div>
//           <Button onClick={onAddExpense} className="gradient-bg">
//             <Plus className="mr-2 h-4 w-4" /> Add Recurring Expense
//           </Button>
//         </div>
//       </CardHeader>
//       <CardContent>
//         {expenses.length > 0 ? (
//           <>
//             <div className="rounded-md border mb-4">
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Description</TableHead>
//                     <TableHead>Category</TableHead>
//                     <TableHead>Frequency</TableHead>
//                     <TableHead>Next Date</TableHead>
//                     <TableHead className="text-right">Amount</TableHead>
//                     <TableHead className="w-[50px]"></TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {expenses.map((expense) => (
//                     <TableRow key={expense.$id}>
//                       <TableCell>
//                         <div className="font-medium">{expense.description}</div>
//                       </TableCell>
//                       <TableCell>
//                         <div className="flex items-center">
//                           <div
//                             className="w-2 h-2 rounded-full mr-2"
//                             style={{ backgroundColor: getCategoryColor(expense.categoryId) }}
//                           />
//                           {getCategoryName(expense.categoryId)}
//                         </div>
//                       </TableCell>
//                       <TableCell>
//                         <div className="flex items-center">
//                           <RefreshCw className="mr-2 h-3 w-3" />
//                           {getFrequencyLabel(expense.recurringFrequency || "monthly")}
//                         </div>
//                       </TableCell>
//                       <TableCell>{formatDate(expense.date)}</TableCell>
//                       <TableCell className="text-right font-medium">{formatCurrency(expense.amount)}</TableCell>
//                       <TableCell>
//                         <DropdownMenu>
//                           <DropdownMenuTrigger asChild>
//                             <Button variant="ghost" className="h-8 w-8 p-0">
//                               <MoreHorizontal className="h-4 w-4" />
//                               <span className="sr-only">Open menu</span>
//                             </Button>
//                           </DropdownMenuTrigger>
//                           <DropdownMenuContent align="end">
//                             <DropdownMenuItem>Edit</DropdownMenuItem>
//                             <DropdownMenuItem>Delete</DropdownMenuItem>
//                           </DropdownMenuContent>
//                         </DropdownMenu>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </div>

//             <div className="bg-muted p-4 rounded-lg">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <h3 className="font-medium">Estimated Monthly Total</h3>
//                   <p className="text-sm text-muted-foreground">Based on your recurring expenses</p>
//                 </div>
//                 <div className="text-xl font-bold">{formatCurrency(monthlyTotal)}</div>
//               </div>
//             </div>
//           </>
//         ) : (
//           <div className="flex flex-col items-center justify-center py-8 text-center">
//             <p className="mb-2 text-muted-foreground">No recurring expenses found</p>
//             <Button variant="outline" onClick={onAddExpense}>
//               <Plus className="mr-2 h-4 w-4" /> Add Your First Recurring Expense
//             </Button>
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   )
// }

"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { formatCurrency, formatDate } from "@/lib/utils";
import { updateExpense, deleteExpense } from "@/lib/server/actions/database";
import { Plus, MoreHorizontal, RefreshCw } from "lucide-react";

export default function RecurringExpenses({
  expenses,
  categories,
  onAddExpense,
}) {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);
  const [expenseToDelete, setExpenseToDelete] = useState(null);
  const [isRecurring, setIsRecurring] = useState(false);

  const [_, editAction] = useActionState(updateExpense, null);
  const [__, deleteAction] = useActionState(deleteExpense, null);

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.$id === categoryId);
    return category ? category.name : "Uncategorized";
  };

  const getCategoryColor = (categoryId) => {
    const category = categories.find((cat) => cat.$id === categoryId);
    return category ? category.color : "#CBD5E1";
  };

  const getFrequencyLabel = (frequency) => {
    const labels = {
      daily: "Daily",
      weekly: "Weekly",
      biweekly: "Bi-weekly",
      monthly: "Monthly",
      quarterly: "Quarterly",
      yearly: "Yearly",
    };
    return labels[frequency] || frequency;
  };

  const calculateMonthlyTotal = () => {
    return expenses.reduce((total, expense) => {
      let monthlyAmount = 0;
      switch (expense.recurringFrequency) {
        case "daily":
          monthlyAmount = expense.amount * 30;
          break;
        case "weekly":
          monthlyAmount = expense.amount * 4.33;
          break;
        case "biweekly":
          monthlyAmount = expense.amount * 2.17;
          break;
        case "monthly":
          monthlyAmount = expense.amount;
          break;
        case "quarterly":
          monthlyAmount = expense.amount / 3;
          break;
        case "yearly":
          monthlyAmount = expense.amount / 12;
          break;
        default:
          monthlyAmount = expense.amount;
      }
      return total + monthlyAmount;
    }, 0);
  };

  const handleEdit = (expense) => {
    setEditingExpense({ ...expense });
    setIsRecurring(!!expense.isRecurring);
    setEditDialogOpen(true);
  };

  const confirmDelete = (expenseId) => {
    setExpenseToDelete(expenseId);
    setDeleteDialogOpen(true);
  };

  const monthlyTotal = calculateMonthlyTotal();

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <CardTitle>Recurring Expenses</CardTitle>
              <CardDescription>Manage your recurring expenses</CardDescription>
            </div>
            <Button onClick={onAddExpense} className="gradient-bg">
              <Plus className="mr-2 h-4 w-4" /> Add Recurring Expense
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {expenses.length > 0 ? (
            <>
              <div className="rounded-md border mb-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Description</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Frequency</TableHead>
                      <TableHead>Next Date</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                      <TableHead />
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {expenses.map((expense) => (
                      <TableRow key={expense.$id}>
                        <TableCell>{expense.description}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <div
                              className="w-2 h-2 rounded-full mr-2"
                              style={{
                                backgroundColor: getCategoryColor(
                                  expense.categoryId
                                ),
                              }}
                            />
                            {getCategoryName(expense.categoryId)}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <RefreshCw className="mr-2 h-3 w-3" />
                            {getFrequencyLabel(
                              expense.recurringFrequency || "monthly"
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{formatDate(expense.date)}</TableCell>
                        <TableCell className="text-right font-medium">
                          {formatCurrency(expense.amount)}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={() => handleEdit(expense)}
                              >
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => confirmDelete(expense.$id)}
                                className="text-destructive"
                              >
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              php-template Copy Edit
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Estimated Monthly Total</h3>
                    <p className="text-sm text-muted-foreground">
                      Based on your recurring expenses
                    </p>
                  </div>
                  <div className="text-xl font-bold">
                    {formatCurrency(monthlyTotal)}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <p className="mb-2 text-muted-foreground">
                No recurring expenses found
              </p>
              <Button variant="outline" onClick={onAddExpense}>
                <Plus className="mr-2 h-4 w-4" /> Add Your First Recurring
                Expense
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* EDIT DIALOG */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Recurring Expense</DialogTitle>
            <DialogDescription>
              Update the recurring expense details
            </DialogDescription>
          </DialogHeader>
          {editingExpense && (
            <form action={editAction}>
              <input type="hidden" name="id" value={editingExpense.$id} />
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label>Description</Label>
                  <Input
                    name="description"
                    defaultValue={editingExpense.description}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Amount</Label>
                  <Input
                    name="amount"
                    type="number"
                    step="0.01"
                    defaultValue={editingExpense.amount}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Category</Label>
                  <Select
                    defaultValue={editingExpense.categoryId}
                    onValueChange={(val) =>
                      (document.getElementById("editCategory").value = val)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.$id} value={cat.$id}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <input
                    type="hidden"
                    name="categoryId"
                    id="editCategory"
                    defaultValue={editingExpense.categoryId}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Date</Label>
                  <Input
                    name="date"
                    type="date"
                    defaultValue={editingExpense.date.split("T")[0]}
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="editRecurring"
                    checked={isRecurring}
                    onCheckedChange={(checked) => setIsRecurring(!!checked)}
                  />
                  <Label htmlFor="editRecurring">Recurring</Label>
                  <input
                    type="hidden"
                    name="isRecurring"
                    value={isRecurring ? "true" : "false"}
                  />
                </div>
                {isRecurring && (
                  <div className="grid gap-2">
                    <Label>Frequency</Label>
                    <Select
                      defaultValue={
                        editingExpense.recurringFrequency || "monthly"
                      }
                      onValueChange={(val) =>
                        (document.getElementById("editFrequency").value = val)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          "daily",
                          "weekly",
                          "biweekly",
                          "monthly",
                          "quarterly",
                          "yearly",
                        ].map((f) => (
                          <SelectItem key={f} value={f}>
                            {f}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <input
                      type="hidden"
                      name="recurringFrequency"
                      id="editFrequency"
                      defaultValue={
                        editingExpense.recurringFrequency || "monthly"
                      }
                    />
                  </div>
                )}
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setEditDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="gradient-bg"
                  onClick={() => setEditDialogOpen(false)}
                >
                  Save
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* DELETE DIALOG */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Recurring Expense</DialogTitle>
            <DialogDescription>
              This will permanently remove the expense.
            </DialogDescription>
          </DialogHeader>
          <form action={deleteAction}>
            <input type="hidden" name="id" value={expenseToDelete} />
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setDeleteDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="destructive"
                onClick={() => setDeleteDialogOpen(false)}
              >
                Delete
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
