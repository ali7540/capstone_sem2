// import React from "react";
// import Link from "next/link";

// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Blog", href: "/blog" },
//   { name: "Dashboard", href: "/dashboard" },
// ];

// const Navbar = () => {
//   return (
//     <div className="bg-[#E8DAF9] px-8 py-6 flex justify-between items-center font-sans">
//       <div className="flex items-center gap-2">
//         <div className="w-6 h-6 bg-violet-500 rounded-sm rotate-45"></div>
//         <Link href="/">
//           {" "}
//           <span className="text-2xl font-semibold text-slate-800">
//             BudgetWise
//           </span>
//         </Link>
//       </div>

//       <div className="bg-white/20 bg-opacity-90 border border-white/30 rounded-full px-6 py-4 flex gap-6 shadow-sm">
//         {navItems.map((item) => (
//           <Link
//             key={item.name}
//             href={item.href}
//             className="text-slate-800 font-medium hover:text-purple-600 transition-colors"
//           >
//             {item.name}
//           </Link>
//         ))}
//       </div>

//       <Link href="/signup">
//         <button className="rounded-full bg-white bg-opacity-80 border border-white/30 px-6 py-2 text-slate-800 font-medium hover:text-purple-600 transition-colors shadow-sm">
//           Sign Up
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { getLoggedInUser } from "@/lib/server/appwrite";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const [user, setUser] = useState(null);

  // Fetch user in background, but don't block the header render
  useEffect(() => {
    getLoggedInUser().then((u) => {
      if (u) setUser(u);
    });
  }, []);

  return (
    <header className="bg-[#E8DAF9] px-6 py-4 md:px-8 md:py-6 flex items-center h-16 md:h-20 font-sans">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-violet-500 rounded-sm rotate-45" />
        <Link href="/">
          <span className="text-2xl font-semibold text-slate-800">
            BudgetWise
          </span>
        </Link>
      </div>

      {/* Center: Nav links (desktop only) */}
      <nav className="hidden md:flex flex-1 justify-center">
        <div className="bg-white/20 border border-white/30 rounded-full px-6 py-3 flex gap-6 shadow-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-slate-800 font-medium hover:text-purple-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Right: user info or login (desktop only) */}
      <div className="hidden md:flex items-center gap-4 ml-4">
        {user ? (
          <>
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="User"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-sm font-medium text-slate-800">
              {user.name}
            </span>
          </>
        ) : (
          <Link href="/login">
            <Button className="rounded-full bg-white bg-opacity-80 border border-white/30 text-slate-800 font-medium hover:text-purple-600 shadow-sm">
              Login
            </Button>
          </Link>
        )}
      </div>

      {/* Mobile: sheet trigger */}
      <div className="md:hidden flex-1 flex justify-end">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-slate-800">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="bg-[#E8DAF9] px-6 py-8 w-64">
            {/* accessibility title */}
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-800 font-medium hover:text-purple-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              {user ? (
                <div className="flex items-center gap-2 mt-4">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    alt="User"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="text-sm font-medium text-slate-800">
                    {user.name}
                  </span>
                </div>
              ) : (
                <Link href="/login">
                  <Button className="w-full bg-white bg-opacity-80 border border-white/30 text-slate-800 font-medium hover:text-purple-600 shadow-sm">
                    Login
                  </Button>
                </Link>
              )}
            </div>

            {/* Close button (optional) */}
            <SheetClose asChild>
              <Button variant="ghost" className="absolute top-2 right-2">
                <X className="h-5 w-5 text-slate-800" />
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
