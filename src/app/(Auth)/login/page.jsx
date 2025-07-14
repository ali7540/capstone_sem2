// 'use client';

// import React, { useState } from 'react';
// import { Eye, EyeOff } from 'lucide-react';

// const LoginForm = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center px-4"
//       style={{ backgroundColor: '#E8D9F9' }}
//     >
//       <div className="bg-white rounded-xl shadow-md w-full max-w-md p-8">
//         <h2 className="text-2xl font-bold mb-1">
//           <span className="text-purple-600">Login</span> to your account
//         </h2>
//         <p className="text-gray-500 mb-6 text-sm">
//           Enter your email and password to access your account
//         </p>

//         <form className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="name@example.com"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>

//           <div>
//             <div className="flex items-center justify-between">
//               <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//               <a href="#" className="text-sm text-purple-600 hover:underline">
//                 Forgot password?
//               </a>
//             </div>
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="••••••••"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10"
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-3 flex items-center text-gray-500"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-purple-600 to-teal-500 text-white font-semibold py-2 rounded-md shadow hover:opacity-90 transition"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-sm text-center text-gray-600 mt-4">
//           Don’t have an account?{' '}
//           <a href="/signup" className="text-purple-600 hover:underline">
//             Sign up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;



import { getLoggedInUser } from "@/lib/server/appwrite";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";

export default async function LoginPage() {
  const user = await getLoggedInUser();
  if (user) redirect("/dashboard"); // Already logged in

  return <LoginForm />;
}
