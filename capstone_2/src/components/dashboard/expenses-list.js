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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatCurrency, formatDate } from "@/lib/utils";
import {
  Plus,
  MoreHorizontal,
  Search,
  RefreshCw,
  Edit,
  Trash2,
} from "lucide-react";
import { DialogFooter, DialogHeader } from "../ui/dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { useActionState } from "react";
import { updateExpense, deleteExpense } from "@/lib/server/actions/database";
import { Checkbox } from "../ui/checkbox";

export default function ExpensesList({
  expenses,
  categories,
  onDeleteExpense,
  onAddExpense,
}) {
  const [editingExpense, setEditingExpense] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [expenseToDelete, setExpenseToDelete] = useState(null);
  const [isRecurring, setIsRecurring] = useState(false);
  const [frequency, setFrequency] = useState("monthly");

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const [_, editAction] = useActionState(updateExpense, null);
  const [__, deleteAction] = useActionState(deleteExpense, null);

  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch = expense.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || expense.categoryId === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.$id === categoryId);
    return category ? category.name : "Uncategorized";
  };

  const getCategoryColor = (categoryId) => {
    const category = categories.find((cat) => cat.$id === categoryId);
    return category ? category.color : "#CBD5E1";
  };

  const handleEditExpense = (expense) => {
    setEditingExpense({ ...expense });
    setIsRecurring(!!expense.isRecurring);
    setFrequency(expense.recurringFrequency || "monthly");
    setEditDialogOpen(true);
  };

  const confirmDeleteExpense = (expenseId) => {
    setExpenseToDelete(expenseId);
    setDeleteDialogOpen(true);
  };
  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <CardTitle>Expenses</CardTitle>
              <CardDescription>Manage and track your expenses</CardDescription>
            </div>
            <Button onClick={onAddExpense} className="gradient-bg">
              <Plus className="mr-2 h-4 w-4" /> Add Expense
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search expenses..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.$id} value={category.$id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {filteredExpenses.length > 0 ? (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredExpenses.map((expense) => (
                    <TableRow key={expense.$id}>
                      <TableCell>{formatDate(expense.date)}</TableCell>
                      <TableCell>
                        <div className="font-medium">{expense.description}</div>
                        {expense.isRecurring && (
                          <div className="flex items-center text-xs text-muted-foreground">
                            <RefreshCw className="mr-1 h-3 w-3" /> Recurring
                          </div>
                        )}
                      </TableCell>
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
                              onClick={() => handleEditExpense(expense)}
                            >
                              <Edit className="mr-2 h-4 w-4" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => confirmDeleteExpense(expense.$id)}
                              className="text-destructive"
                            >
                              <Trash2 className="mr-2 h-4 w-4" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <p className="mb-2 text-muted-foreground">No expenses found</p>
              <Button variant="outline" onClick={onAddExpense}>
                <Plus className="mr-2 h-4 w-4" /> Add Your First Expense
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* --- Edit Category Dialog --- */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Expense</DialogTitle>
            <DialogDescription>Update your expense details</DialogDescription>
          </DialogHeader>

          {editingExpense && (
            <form action={editAction}>
              <input type="hidden" name="id" value={editingExpense.$id} />

              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    name="description"
                    defaultValue={editingExpense.description}
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    step="0.01"
                    defaultValue={editingExpense.amount}
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="categoryId">Category</Label>
                  <Select
                    defaultValue={editingExpense.categoryId}
                    onValueChange={(val) =>
                      (document.getElementById("edit-categoryId").value = val)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose category" />
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
                    id="edit-categoryId"
                    name="categoryId"
                    defaultValue={editingExpense.categoryId}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    defaultValue={editingExpense.date.split("T")[0]}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="edit-isRecurring"
                    checked={isRecurring}
                    onCheckedChange={(val) => {
                      setIsRecurring(!!val);
                    }}
                  />
                  <Label htmlFor="edit-isRecurring">Recurring Expense</Label>
                  <input
                    type="hidden"
                    name="isRecurring"
                    value={isRecurring ? "true" : "false"}
                  />
                </div>

                {isRecurring && (
                  <div className="grid gap-2">
                    <Label htmlFor="edit-recurringFrequency">Frequency</Label>
                    <Select
                      value={frequency}
                      onValueChange={(val) => {
                        setFrequency(val);
                        document.getElementById(
                          "edit-recurringFrequency"
                        ).value = val;
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          "daily",
                          "weekly",
                          "monthly",
                          "quarterly",
                          "yearly",
                        ].map((freq) => (
                          <SelectItem key={freq} value={freq}>
                            {freq}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <input
                      type="hidden"
                      id="edit-recurringFrequency"
                      name="recurringFrequency"
                      value={frequency}
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
                  Save Changes
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* --- Delete Confirmation Dialog --- */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this expense?
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
