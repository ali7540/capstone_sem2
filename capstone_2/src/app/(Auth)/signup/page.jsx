// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { Eye, EyeOff } from 'lucide-react';

// const SignupForm = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center px-4"
//       style={{ backgroundColor: '#E8D9F9' }}
//     >
//       <div className="bg-white rounded-xl shadow-md w-full max-w-md p-8">
//         <h2 className="text-2xl font-bold mb-1">
//           <span className="text-purple-600">Create</span> an account
//         </h2>
//         <p className="text-gray-500 mb-6 text-sm">
//           Enter your information to create an account
//         </p>

//         <form className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//             <input
//               type="text"
//               placeholder="John Doe"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="name@example.com"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
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

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
//             <div className="relative">
//               <input
//                 type={showConfirmPassword ? 'text' : 'password'}
//                 placeholder="••••••••"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10"
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-3 flex items-center text-gray-500"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               >
//                 {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-purple-600 to-teal-500 text-white font-semibold py-2 rounded-md shadow hover:opacity-90 transition"
//           >
//             Create Account
//           </button>
//         </form>

//         <p className="text-sm text-center text-gray-600 mt-4">
//           Already have an account?{' '}
//           <Link href="/login" className="text-purple-600 hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;




// src/app/signup/page.jsx

// import { getLoggedInUser } from "@/lib/server/appwrite";

// import { ID } from "node-appwrite";
// import { createAdminClient } from "@/lib/server/appwrite";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import { signUpWithGithub } from "@/lib/server/oauth";

// async function signUpWithEmail(formData) {
//   "use server";

//   const email = formData.get("email");
//   const password = formData.get("password");
//   const name = formData.get("name");

//   const { account } = await createAdminClient();

//   await account.create(ID.unique(), email, password, name);
//   const session = await account.createEmailPasswordSession(email, password);

//   cookies().set("my-custom-session", session.secret, {
//     path: "/",
//     httpOnly: true,
//     sameSite: "strict",
//     secure: true,
//   });

//   redirect("/account");
// }

// export default async function SignUpPage() {
//   const user = await getLoggedInUser();
//   if (user) redirect("/account");

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           Create an Account
//         </h2>

//         <form action={signUpWithEmail} className="space-y-4">
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               placeholder="Enter your email"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               placeholder="At least 8 characters"
//               minLength={8}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Full Name
//             </label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               placeholder="Enter your name"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-primary text-white py-2 rounded-md font-semibold hover:bg-primary/90 transition"
//           >
//             Sign Up
//           </button>
//         </form>
//         <form action={signUpWithGithub}>
//           <button
//             type="submit"
//             className="w-full mt-2 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
//           >
//             <svg
//               className="w-5 h-5"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//               aria-hidden="true"
//             >
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.754-1.333-1.754-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.933 0-1.312.47-2.383 1.235-3.222-.123-.303-.535-1.522.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.654.241 2.873.118 3.176.767.84 1.233 1.91 1.233 3.222 0 4.61-2.804 5.628-5.476 5.922.43.37.814 1.103.814 2.222v3.293c0 .319.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"
//               />
//             </svg>
//             Sign up with GitHub
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }




// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { Eye, EyeOff } from 'lucide-react';

// import { getLoggedInUser } from "@/lib/server/appwrite";
// import { redirect } from "next/navigation";
// import { signUpWithEmail } from '@/lib/server/actions/auth';


// export default async function SignupForm() {
//   const user = await getLoggedInUser();
//   if (user) redirect("/account");

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#E8D9F9' }}>
//       <div className="bg-white rounded-xl shadow-md w-full max-w-md p-8">
//         <h2 className="text-2xl font-bold mb-1">
//           <span className="text-purple-600">Create</span> an account
//         </h2>
//         <p className="text-gray-500 mb-6 text-sm">Enter your information to create an account</p>

//         <form action={signUpWithEmail} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//             <input
//               name="name"
//               type="text"
//               placeholder="John Doe"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input
//               name="email"
//               type="email"
//               placeholder="name@example.com"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <div className="relative">
//               <input
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="••••••••"
//                 minLength={8}
//                 required
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

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
//             <div className="relative">
//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 placeholder="••••••••"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10"
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-3 flex items-center text-gray-500"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               >
//                 {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-purple-600 to-teal-500 text-white font-semibold py-2 rounded-md shadow hover:opacity-90 transition"
//           >
//             Create Account
//           </button>
//         </form>

//         <p className="text-sm text-center text-gray-600 mt-4">
//           Already have an account?{" "}
//           <Link href="/login" className="text-purple-600 hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }


import { redirect } from "next/navigation";
import { getLoggedInUser } from "@/lib/server/appwrite";
import SignupForm from "./SignupForm";

export default async function SignupPage() {
  const user = await getLoggedInUser();
  if (user) redirect("/account");

  return <SignupForm />;
}
