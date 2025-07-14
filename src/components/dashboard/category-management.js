// "use client"

// import { useState } from "react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { formatCurrency } from "@/lib/utils"
// import { Plus, MoreHorizontal, Edit, Trash2 } from "lucide-react"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog"

// export default function CategoryManagement({
//   categories,
//   expenses,
//   onUpdateCategory,
//   onDeleteCategory,
//   onAddCategory,
//   colorPalette,
// }) {
//   const [editingCategory, setEditingCategory] = useState(null)
//   const [editDialogOpen, setEditDialogOpen] = useState(false)
//   const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
//   const [categoryToDelete, setCategoryToDelete] = useState(null)

//   const categoriesWithSpending = categories.map((category) => {
//     const categoryExpenses = expenses.filter((expense) => expense.categoryId === category.$id)
//     const spent = categoryExpenses.reduce((sum, expense) => sum + expense.amount, 0)
//     const remaining = category.budget - spent
//     const percentSpent = category.budget > 0 ? (spent / category.budget) * 100 : 0

//     return {
//       ...category,
//       spent,
//       remaining,
//       percentSpent,
//     }
//   })

//   const handleEditCategory = (category) => {
//     setEditingCategory({ ...category })
//     setEditDialogOpen(true)
//   }

//   const handleSaveCategory = () => {
//     if (editingCategory) {
//       onUpdateCategory(editingCategory)
//       setEditDialogOpen(false)
//       setEditingCategory(null)
//     }
//   }

//   const confirmDeleteCategory = (categoryId) => {
//     setCategoryToDelete(categoryId)
//     setDeleteDialogOpen(true)
//   }

//   const handleDeleteCategory = () => {
//     if (categoryToDelete) {
//       onDeleteCategory(categoryToDelete)
//       setDeleteDialogOpen(false)
//       setCategoryToDelete(null)
//     }
//   }

//   return (
//     <>
//       <Card>
//         <CardHeader>
//           <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
//             <div>
//               <CardTitle>Budget Categories</CardTitle>
//               <CardDescription>Manage your budget categories</CardDescription>
//             </div>
//             <Button onClick={onAddCategory} className="gradient-bg">
//               <Plus className="mr-2 h-4 w-4" /> Add Category
//             </Button>
//           </div>
//         </CardHeader>
//         <CardContent>
//           {categories.length > 0 ? (
//             <div className="rounded-md border">
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Category</TableHead>
//                     <TableHead>Budget</TableHead>
//                     <TableHead>Spent</TableHead>
//                     <TableHead>Remaining</TableHead>
//                     <TableHead className="w-[50px]"></TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {categoriesWithSpending.map((category) => (
//                     <TableRow key={category.$id}>
//                       <TableCell>
//                         <div className="flex items-center">
//                           <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: category.color }} />
//                           <span className="font-medium">{category.name}</span>
//                         </div>
//                       </TableCell>
//                       <TableCell>{formatCurrency(category.budget)}</TableCell>
//                       <TableCell>{formatCurrency(category.spent)}</TableCell>
//                       <TableCell
//                         className={
//                           category.remaining < 0
//                             ? "text-[var(--chart-color-6)] font-medium"
//                             : category.remaining > category.budget * 0.5
//                               ? "text-[var(--chart-color-4)] font-medium"
//                               : "text-[var(--chart-color-1)] font-medium"
//                         }
//                       >
//                         {formatCurrency(category.remaining)}
//                       </TableCell>
//                       <TableCell>
//                         <DropdownMenu>
//                           <DropdownMenuTrigger asChild>
//                             <Button variant="ghost" className="h-8 w-8 p-0">
//                               <MoreHorizontal className="h-4 w-4" />
//                               <span className="sr-only">Open menu</span>
//                             </Button>
//                           </DropdownMenuTrigger>
//                           <DropdownMenuContent align="end">
//                             <DropdownMenuItem onClick={() => handleEditCategory(category)}>
//                               <Edit className="mr-2 h-4 w-4" /> Edit
//                             </DropdownMenuItem>
//                             <DropdownMenuItem
//                               onClick={() => confirmDeleteCategory(category.$id)}
//                               className="text-destructive"
//                             >
//                               <Trash2 className="mr-2 h-4 w-4" /> Delete
//                             </DropdownMenuItem>
//                           </DropdownMenuContent>
//                         </DropdownMenu>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </div>
//           ) : (
//             <div className="flex flex-col items-center justify-center py-8 text-center">
//               <p className="mb-2 text-muted-foreground">No categories found</p>
//               <Button variant="outline" onClick={onAddCategory}>
//                 <Plus className="mr-2 h-4 w-4" /> Add Your First Category
//               </Button>
//             </div>
//           )}
//         </CardContent>
//       </Card>

//       {/* Edit Category Dialog */}
//       <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Edit Category</DialogTitle>
//             <DialogDescription>Update your budget category details</DialogDescription>
//           </DialogHeader>
//           {editingCategory && (
//             <div className="grid gap-4 py-4">
//               <div className="grid gap-2">
//                 <Label htmlFor="name">Category Name</Label>
//                 <Input
//                   id="name"
//                   value={editingCategory.name}
//                   onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
//                 />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="budget">Budget Amount</Label>
//                 <Input
//                   id="budget"
//                   type="number"
//                   value={editingCategory.budget}
//                   onChange={(e) =>
//                     setEditingCategory({ ...editingCategory, budget: parseFloat(e.target.value) || 0 })
//                   }
//                 />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="color">Color</Label>
//                 <div className="flex items-center gap-2">
//                   <Input
//                     id="color"
//                     type="color"
//                     value={editingCategory.color}
//                     onChange={(e) => setEditingCategory({ ...editingCategory, color: e.target.value })}
//                     className="w-12 h-8 p-1"
//                   />
//                   <span className="text-sm text-muted-foreground">{editingCategory.color}</span>
//                 </div>
//               </div>
//             </div>
//           )}
//           <DialogFooter>
//             <Button variant="outline" onClick={() => setEditDialogOpen(false)}>
//               Cancel
//             </Button>
//             <Button onClick={handleSaveCategory} className="gradient-bg">
//               Save Changes
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>

//       {/* Delete Confirmation Dialog */}
//       <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Confirm Deletion</DialogTitle>
//             <DialogDescription>
//               Are you sure you want to delete this category? This will also delete all expenses associated with this
//               category.
//             </DialogDescription>
//           </DialogHeader>
//           <DialogFooter>
//             <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
//               Cancel
//             </Button>
//             <Button variant="destructive" onClick={handleDeleteCategory}>
//               Delete
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </>
//   )
// }


"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "@/components/ui/dialog"
import { formatCurrency } from "@/lib/utils"
import { Plus, MoreHorizontal, Edit, Trash2 } from "lucide-react"
import { useActionState } from "react"; 
import { updateCategory, deleteCategory } from "@/lib/server/actions/database"

export default function CategoryManagement({ categories, expenses, onAddCategory, colorPalette }) {
  const [editingCategory, setEditingCategory] = useState(null)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [categoryToDelete, setCategoryToDelete] = useState(null)

  const [_, editAction] = useActionState(updateCategory, null)
  const [__, deleteAction] = useActionState(deleteCategory, null)

  const categoriesWithSpending = categories.map((category) => {
    const categoryExpenses = expenses.filter((e) => e.categoryId === category.$id)
    const spent = categoryExpenses.reduce((sum, e) => sum + e.amount, 0)
    const remaining = category.budget - spent
    const percentSpent = category.budget > 0 ? (spent / category.budget) * 100 : 0
    return { ...category, spent, remaining, percentSpent }
  })

  const handleEditCategory = (category) => {
    setEditingCategory({ ...category })
    setEditDialogOpen(true)
  }

  const confirmDeleteCategory = (categoryId) => {
    setCategoryToDelete(categoryId)
    setDeleteDialogOpen(true)
  }

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <CardTitle>Budget Categories</CardTitle>
              <CardDescription>Manage your budget categories</CardDescription>
            </div>
            <Button onClick={onAddCategory} className="gradient-bg">
              <Plus className="mr-2 h-4 w-4" /> Add Category
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {categories.length > 0 ? (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Budget</TableHead>
                    <TableHead>Spent</TableHead>
                    <TableHead>Remaining</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {categoriesWithSpending.map((category) => (
                    <TableRow key={category.$id}>
                      <TableCell>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: category.color }} />
                          <span className="font-medium">{category.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{formatCurrency(category.budget)}</TableCell>
                      <TableCell>{formatCurrency(category.spent)}</TableCell>
                      <TableCell
                        className={
                          category.remaining < 0
                            ? "text-[var(--chart-color-6)] font-medium"
                            : category.remaining > category.budget * 0.5
                              ? "text-[var(--chart-color-4)] font-medium"
                              : "text-[var(--chart-color-1)] font-medium"
                        }
                      >
                        {formatCurrency(category.remaining)}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleEditCategory(category)}>
                              <Edit className="mr-2 h-4 w-4" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => confirmDeleteCategory(category.$id)}
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
              <p className="mb-2 text-muted-foreground">No categories found</p>
              <Button variant="outline" onClick={onAddCategory}>
                <Plus className="mr-2 h-4 w-4" /> Add Your First Category
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* --- Edit Category Dialog --- */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Category</DialogTitle>
            <DialogDescription>Update your budget category details</DialogDescription>
          </DialogHeader>
          {editingCategory && (
            <form action={editAction}>
              <input type="hidden" name="id" value={editingCategory.$id} />
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Category Name</Label>
                  <Input name="name" defaultValue={editingCategory.name} required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="budget">Budget Amount</Label>
                  <Input name="budget" type="number" defaultValue={editingCategory.budget} required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="color">Color</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      name="color"
                      type="color"
                      defaultValue={editingCategory.color}
                      className="w-12 h-8 p-1"
                    />
                    <span className="text-sm text-muted-foreground">{editingCategory.color}</span>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" type="button" onClick={() => setEditDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="gradient-bg" onClick={() => setEditDialogOpen(false)}>
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
              Are you sure you want to delete this category? All associated expenses will also be removed.
            </DialogDescription>
          </DialogHeader>
          <form action={deleteAction}>
            <input type="hidden" name="id" value={categoryToDelete} />
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setDeleteDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="destructive " onClick={() => setDeleteDialogOpen(false)}>
                Delete
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
