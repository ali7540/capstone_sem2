"use server";

import { ID } from "node-appwrite";
import { createAdminClient } from "@/lib/server/appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSessionClient } from "@/lib/server/appwrite";


export async function signUpWithEmail(formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name");

  const { account } = await createAdminClient();

  await account.create(ID.unique(), email, password, name);
  const session = await account.createEmailPasswordSession(email, password);

  cookies().set("my-custom-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  redirect("/account");
}


export async function signInWithEmail(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("my-custom-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return { success: true, redirect: "/dashboard" };
  } catch (error) {
    const message = error?.message || "Login failed. Please try again.";
    return { error: message };
  }
}

export async function signOut() {

  const { account } = await createSessionClient();

  cookies().delete("my-custom-session");
  await account.deleteSession("current");

  redirect("/signup");
}