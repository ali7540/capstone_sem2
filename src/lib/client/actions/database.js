// import { Client, Databases, ID } from 'node-appwrite'

// const client = new Client()
//   .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
//   .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
//   .setKey(process.env.NEXT_PUBLIC_APPWRITE_API_KEY)

// const databases = new Databases(client)

// const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DB_ID
// const CATEGORY_COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_CATEGORY_COLLECTION_ID
// const EXPENSE_COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_EXPENSE_COLLECTION_ID

// export async function createCategory({ name, budget, color, userId }) {
//   return await databases.createDocument(DB_ID, CATEGORY_COLLECTION_ID, ID.unique(), {
//     name,
//     budget,
//     color,
//     userId,
//   })
// }

// export async function createExpense({
//   description,
//   amount,
//   categoryId,
//   date,
//   isRecurring = false,
//   recurringFrequency = '',
//   userId,
// }) {
//   return await databases.createDocument(DB_ID, EXPENSE_COLLECTION_ID, ID.unique(), {
//     description,
//     amount,
//     categoryId,
//     date,
//     isRecurring,
//     recurringFrequency,
//     userId,
//   })
// }

// export async function getExpensesByUser(userId) {
//   const res = await databases.listDocuments(DB_ID, EXPENSE_COLLECTION_ID, [
//     Query.equal('userId', userId)
//   ])
//   return res.documents
// }

// export async function getCategoriesByUser(userId) {
//   const res = await databases.listDocuments(DB_ID, CATEGORY_COLLECTION_ID, [
//     Query.equal('userId', userId)
//   ])
//   return res.documents
// }
