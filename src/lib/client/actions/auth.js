// src/lib/auth-client.js
// "use client";
//   "use server";
// import { redirect } from "next/navigation";
// import { cookies } from "next/headers";

// import { createSessionClient } from "@/lib/server/appwrite";

// export async function logout() {
//   try {
//     const { account } = await createSessionClient();
//     // await account.deleteSession("current");
//     // document.cookie = "my-custom-session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
//     // window.location.href = "/signup"

//     cookies().delete("my-custom-session");
//     await account.deleteSession("current");
//     redirect("/signup");
    
//   } catch (error) {
//     console.error("Logout failed:", error);
//   }
// }
// export async function signOut() {

//   const { account } = await createSessionClient();

//   cookies().delete("my-custom-session");
//   await account.deleteSession("current");

//   redirect("/signup");
// }