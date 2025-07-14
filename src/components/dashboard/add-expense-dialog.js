// "use client"

// import React, { useState } from "react"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Checkbox } from "@/components/ui/checkbox"
// import { generateId } from "@/lib/utils"

// export default function AddExpenseDialog({ open, onClose, onAddExpense, categories }) {
//   const [description, setDescription] = useState("")
//   const [amount, setAmount] = useState("")
//   const [categoryId, setCategoryId] = useState("")
//   const [date, setDate] = useState(new Date().toISOString().split("T")[0])
//   const [isRecurring, setIsRecurring] = useState(false)
//   const [recurringFrequency, setRecurringFrequency] = useState("monthly")

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     if (!description || !amount || !categoryId) {
//       return
//     }

//     const newExpense = {
//       id: generateId(),
//       description,
//       amount: parseFloat(amount),
//       categoryId,
//       date: new Date(date).toISOString(),
//       isRecurring,
//       recurringFrequency: isRecurring ? recurringFrequency : undefined,
//     }

//     onAddExpense(newExpense)
//     resetForm()
//   }

//   const resetForm = () => {
//     setDescription("")
//     setAmount("")
//     setCategoryId("")
//     setDate(new Date().toISOString().split("T")[0])
//     setIsRecurring(false)
//     setRecurringFrequency("monthly")
//   }

//   return (
//     <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Add Expense</DialogTitle>
//           <DialogDescription>Add a new expense to track your spending</DialogDescription>
//         </DialogHeader>
//         <form onSubmit={handleSubmit}>
//           <div className="grid gap-4 py-4">
//             <div className="grid gap-2">
//               <Label htmlFor="description">Description</Label>
//               <Input
//                 id="description"
//                 placeholder="Grocery shopping, Dinner, etc."
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="amount">Amount</Label>
//               <Input
//                 id="amount"
//                 type="number"
//                 placeholder="0.00"
//                 step="0.01"
//                 min="0"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="category">Category</Label>
//               <Select value={categoryId} onValueChange={setCategoryId}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select a category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {categories.map((category) => (
//                     <SelectItem key={category.id} value={category.id}>
//                       {category.name}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="date">Date</Label>
//               <Input
//                 id="date"
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="flex items-center space-x-2">
//               <Checkbox
//                 id="recurring"
//                 checked={isRecurring}
//                 onCheckedChange={(checked) => setIsRecurring(!!checked)}
//               />
//               <Label htmlFor="recurring" className="cursor-pointer">
//                 This is a recurring expense
//               </Label>
//             </div>
//             {isRecurring && (
//               <div className="grid gap-2">
//                 <Label htmlFor="frequency">Frequency</Label>
//                 <Select value={recurringFrequency} onValueChange={setRecurringFrequency}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select frequency" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="daily">Daily</SelectItem>
//                     <SelectItem value="weekly">Weekly</SelectItem>
//                     <SelectItem value="biweekly">Bi-weekly</SelectItem>
//                     <SelectItem value="monthly">Monthly</SelectItem>
//                     <SelectItem value="quarterly">Quarterly</SelectItem>
//                     <SelectItem value="yearly">Yearly</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             )}
//           </div>
//           <DialogFooter>
//             <Button type="button" variant="outline" onClick={onClose}>
//               Cancel
//             </Button>
//             <Button type="submit" className="gradient-bg">
//               Add Expense
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   )
// }



"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useActionState } from "react"; 
import { createExpense } from "@/lib/server/actions/database";

export default function AddExpenseDialog({ open, onClose, categories }) {
  const [state, formAction] = useActionState(createExpense, null);
  const [isRecurring, setIsRecurring] = useState(false);

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Expense</DialogTitle>
          <DialogDescription>Track your spending</DialogDescription>
        </DialogHeader>
        <form action={formAction}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input name="description" id="description" required placeholder="Dinner, Fuel..." />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="amount">Amount</Label>
              <Input name="amount" id="amount" type="number" step="0.01" required placeholder="100" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="categoryId">Category</Label>
              <Select name="categoryId" required onValueChange={(val) => document.getElementById("categoryId").value = val}>
                <SelectTrigger><SelectValue placeholder="Choose category" /></SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat.$id} value={cat.$id}>{cat.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input type="hidden" id="categoryId" name="categoryId" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date">Date</Label>
              <Input name="date" id="date" type="date" required defaultValue={new Date().toISOString().split("T")[0]} />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="isRecurring" onCheckedChange={(val) => setIsRecurring(!!val)} />
              <Label htmlFor="isRecurring">Recurring Expense</Label>
              <input type="hidden" name="isRecurring" value={isRecurring ? "true" : "false"} />
            </div>
            {isRecurring && (
              <div className="grid gap-2">
                <Label htmlFor="recurringFrequency">Frequency</Label>
                <Select name="recurringFrequency" defaultValue="monthly">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {["daily", "weekly", "monthly", "quarterly", "yearly"].map(freq => (
                      <SelectItem key={freq} value={freq}>{freq}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit" className="gradient-bg">Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
