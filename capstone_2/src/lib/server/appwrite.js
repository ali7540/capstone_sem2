"use server";
import { Client, Account, Databases, ID, Query, Permission, Role } from "node-appwrite";
import { cookies } from "next/headers";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT);

  const session = await cookies().get("my-custom-session");
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
    .setKey(process.env.NEXT_APPWRITE_KEY);

  const database = new Databases(client);
  const account = new Account(client);

  return { client, database, account };
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}

export { ID, Query, Permission, Role };

// const client = new Client()
//   .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
//   .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
//   .setKey(process.env.NEXT_APPWRITE_API_KEY);

// export const db = new Databases(client);
// export const account = new Account(client);
