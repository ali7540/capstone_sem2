// "use client"

// import { useState } from "react"
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
// import { generateId, getRandomColor } from "@/lib/utils"
// import { createCategory, updateCategory } from "@/lib/server/actions/database";


// export default function AddCategoryDialog({ open, onClose, onAddCategory }) {
//   const [name, setName] = useState("")
//   const [budget, setBudget] = useState("")
//   const [color, setColor] = useState(getRandomColor())

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     if (!name || !budget) {
//       return
//     }

//     const newCategory = {
//       id: generateId(),
//       name,
//       budget: parseFloat(budget),
//       color,
//     }

//     onAddCategory(newCategory)
//     resetForm()
//   }

//   const resetForm = () => {
//     setName("")
//     setBudget("")
//     setColor(getRandomColor())
//   }

//   return (
//     <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Add Category</DialogTitle>
//           <DialogDescription>Create a new budget category to organize your expenses</DialogDescription>
//         </DialogHeader>
//         <form onSubmit={handleSubmit}>
//           <div className="grid gap-4 py-4">
//             <div className="grid gap-2">
//               <Label htmlFor="name">Category Name</Label>
//               <Input
//                 id="name"
//                 placeholder="Groceries, Entertainment, etc."
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="budget">Monthly Budget</Label>
//               <Input
//                 id="budget"
//                 type="number"
//                 placeholder="0.00"
//                 step="0.01"
//                 min="0"
//                 value={budget}
//                 onChange={(e) => setBudget(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="color">Color</Label>
//               <div className="flex items-center gap-2">
//                 <Input
//                   id="color"
//                   type="color"
//                   value={color}
//                   onChange={(e) => setColor(e.target.value)}
//                   className="w-12 h-8 p-1"
//                 />
//                 <span className="text-sm text-muted-foreground">{color}</span>
//               </div>
//             </div>
//           </div>
//           <DialogFooter>
//             <Button type="button" variant="outline" onClick={onClose}>
//               Cancel
//             </Button>
//             <Button type="submit" className="gradient-bg">
//               Add Category
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
import { useState } from "react";
import { useActionState } from "react"; 
import { createCategory } from "@/lib/server/actions/database";

export default function AddCategoryDialog({ open, onClose }) {
  const [state, formAction] = useActionState(createCategory, null);
  const [color, setColor] = useState("#8B5CF6");

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
          <DialogDescription>Create a new budget category</DialogDescription>
        </DialogHeader>
        <form action={formAction}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input name="name" id="name" required placeholder="Groceries" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="budget">Budget</Label>
              <Input name="budget" id="budget" type="number" step="0.01" required placeholder="500" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="color">Color</Label>
              <div className="flex items-center gap-2">
                <Input
                  name="color"
                  id="color"
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-12 h-8 p-1"
                />
                <span>{color}</span>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit" className="gradient-bg" >Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
