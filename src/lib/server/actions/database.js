// src/lib/server/actions/database.js
"use server";

import { createAdminClient, ID, Query, Permission, Role, getLoggedInUser } from "../appwrite";
import { revalidatePath } from "next/cache";

const { database } = await createAdminClient();


const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DB_ID;
const CAT_COL = process.env.NEXT_PUBLIC_APPWRITE_CATEGORY_COLLECTION_ID;
const EXP_COL = process.env.NEXT_PUBLIC_APPWRITE_EXPENSE_COLLECTION_ID;

// ——— CATEGORIES ——————————————————————————

export async function createCategory(_prevState, formData) {
  const user = await getLoggedInUser();
  const doc = await database.createDocument(
    DB_ID,
    CAT_COL,
    ID.unique(),
    {
      name: formData.get("name"),
      budget: parseFloat(formData.get("budget")),
      color: formData.get("color"),
      userId: user.$id,
    },
    [
      // permissions
      Permission.read(Role.user(user.$id)),
      Permission.update(Role.user(user.$id)),
      Permission.delete(Role.user(user.$id)),
    ]
  );
  revalidatePath("/dashboard");
  return doc;
}

export async function updateCategory(_prevState,formData) {
  const user = await getLoggedInUser();
  const id = formData.get("id");
  const doc = await database.updateDocument(DB_ID, CAT_COL, id, {
    name: formData.get("name"),
    budget: parseFloat(formData.get("budget")),
    color: formData.get("color"),
  });
  revalidatePath("/dashboard");
  return doc;
}

export async function deleteCategory(_prevState,formData) {
  const id = formData.get("id");
  await database.deleteDocument(DB_ID, CAT_COL, id);
  // also delete related expenses
  const ex = await database.listDocuments(DB_ID, EXP_COL, [
    Query.equal("categoryId", id),
  ]);
  await Promise.all(
    ex.documents.map((e) => database.deleteDocument(DB_ID, EXP_COL, e.$id))
  );
  revalidatePath("/dashboard");
}

// ——— EXPENSES —————————————————————————————

export async function createExpense(_prevState, formData) {
  const user = await getLoggedInUser();
  const doc = await database.createDocument(
    DB_ID,
    EXP_COL,
    ID.unique(),
    {
      description: formData.get("description"),
      amount: parseFloat(formData.get("amount")),
      categoryId: formData.get("categoryId"),
      date: new Date(formData.get("date")).toISOString(),
      isRecurring: formData.get("isRecurring") === "true",
      recurringFrequency: formData.get("recurringFrequency") || "",
      userId: user.$id,
    },
    [
      Permission.read(Role.user(user.$id)),
      Permission.update(Role.user(user.$id)),
      Permission.delete(Role.user(user.$id)),
    ]
  );
  revalidatePath("/dashboard");
  return doc;
}

export async function updateExpense(_prevState, formData) {
  const id = formData.get("id");
  const doc = await database.updateDocument(DB_ID, EXP_COL, id, {
    description: formData.get("description"),
    amount: parseFloat(formData.get("amount")),
    categoryId: formData.get("categoryId"),
    date: new Date(formData.get("date")).toISOString(),
    isRecurring: formData.get("isRecurring") === "true",
    recurringFrequency: formData.get("recurringFrequency") || "",
  });
  revalidatePath("/dashboard");
  return doc;
}

export async function deleteExpense(_prevState, formData) {
  const id = formData.get("id");
  await database.deleteDocument(DB_ID, EXP_COL, id);
  revalidatePath("/dashboard");
}
