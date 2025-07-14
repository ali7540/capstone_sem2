// src/app/account/page.jsx

import {
  createSessionClient,
  getLoggedInUser,
} from "@/lib/server/appwrite";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

async function signOut() {
  "use server";

  const { account } = await createSessionClient();

  cookies().delete("my-custom-session");
  await account.deleteSession("current");

  redirect("/signup");
}

export default async function HomePage() {
  const user = await getLoggedInUser();
  if (!user) redirect("/signup");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Your Account</h1>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Email:</strong> {user.email}
            </li>
            <li>
              <strong>Name:</strong> {user.name}
            </li>
            <li>
              <strong>ID:</strong> {user.$id}
            </li>
          </ul>
        </div>

        <form action={signOut}>
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
}
