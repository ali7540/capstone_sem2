import { generateId } from "./utils"

export function generateSampleData() {
  // Sample categories
  const categories = [
    {
      id: generateId(),
      name: "Groceries",
      budget: 500,
      color: "#FF7E00", // orange
    },
    {
      id: generateId(),
      name: "Entertainment",
      budget: 200,
      color: "#FF9500", // orange
    },
    {
      id: generateId(),
      name: "Transportation",
      budget: 300,
      color: "#FFB700", // orange
    },
    {
      id: generateId(),
      name: "Utilities",
      budget: 250,
      color: "#FF5722", // orange
    },
    {
      id: generateId(),
      name: "Dining Out",
      budget: 350,
      color: "#FF3D00", // orange
    },
  ]

  const expenses = []
  const now = new Date()
  const currentMonth = now.getMonth()
  const currentYear = now.getFullYear()

  // Grocery expenses
  for (let i = 1; i <= 4; i++) {
    const date = new Date(currentYear, currentMonth, i * 7)
    expenses.push({
      id: generateId(),
      description: `Grocery shopping - Week ${i}`,
      amount: 80 + Math.floor(Math.random() * 40),
      categoryId: categories[0].id,
      date: date.toISOString(),
      isRecurring: false,
    })
  }

  // Entertainment expenses
  expenses.push({
    id: generateId(),
    description: "Movie tickets",
    amount: 35,
    categoryId: categories[1].id,
    date: new Date(currentYear, currentMonth, 5).toISOString(),
    isRecurring: false,
  })

  expenses.push({
    id: generateId(),
    description: "Concert tickets",
    amount: 120,
    categoryId: categories[1].id,
    date: new Date(currentYear, currentMonth, 15).toISOString(),
    isRecurring: false,
  })

  // Transportation expenses
  expenses.push({
    id: generateId(),
    description: "Gas",
    amount: 45,
    categoryId: categories[2].id,
    date: new Date(currentYear, currentMonth, 3).toISOString(),
    isRecurring: false,
  })

  expenses.push({
    id: generateId(),
    description: "Car maintenance",
    amount: 150,
    categoryId: categories[2].id,
    date: new Date(currentYear, currentMonth, 12).toISOString(),
    isRecurring: false,
  })

  // Utilities expenses
  expenses.push({
    id: generateId(),
    description: "Electricity bill",
    amount: 95,
    categoryId: categories[3].id,
    date: new Date(currentYear, currentMonth, 10).toISOString(),
    isRecurring: true,
    recurringFrequency: "monthly",
  })

  expenses.push({
    id: generateId(),
    description: "Internet bill",
    amount: 75,
    categoryId: categories[3].id,
    date: new Date(currentYear, currentMonth, 15).toISOString(),
    isRecurring: true,
    recurringFrequency: "monthly",
  })

  expenses.push({
    id: generateId(),
    description: "Water bill",
    amount: 45,
    categoryId: categories[3].id,
    date: new Date(currentYear, currentMonth, 20).toISOString(),
    isRecurring: true,
    recurringFrequency: "monthly",
  })

  // Dining out expenses
  expenses.push({
    id: generateId(),
    description: "Dinner with friends",
    amount: 85,
    categoryId: categories[4].id,
    date: new Date(currentYear, currentMonth, 8).toISOString(),
    isRecurring: false,
  })

  expenses.push({
    id: generateId(),
    description: "Lunch at work",
    amount: 12,
    categoryId: categories[4].id,
    date: new Date(currentYear, currentMonth, 2).toISOString(),
    isRecurring: true,
    recurringFrequency: "weekly",
  })

  expenses.push({
    id: generateId(),
    description: "Coffee subscription",
    amount: 20,
    categoryId: categories[4].id,
    date: new Date(currentYear, currentMonth, 1).toISOString(),
    isRecurring: true,
    recurringFrequency: "monthly",
  })

  return { categories, expenses }
}

export const  blogPosts = [
  {
    id: 1,
    title: "10 Tips for Better Budgeting in 2023",
    excerpt: "Learn how to create and stick to a budget that works for your lifestyle and financial goals.",
    category: "Budgeting",
    date: "June 15, 2023",
    author: "Sarah Chen",
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
    readTime: "5 min read",
    image: "https://plus.unsplash.com/premium_photo-1680721445172-e34cb0e8ebf3?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Understanding Investment Basics: A Beginner's Guide",
    excerpt: "Everything you need to know to start investing, from stocks and bonds to ETFs and mutual funds.",
    category: "Investing",
    date: "May 28, 2023",
    author: "Michael Rodriguez",
    authorImage: "https://randomuser.me/api/portraits/men/45.jpg",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "How to Pay Off Debt Faster: Proven Strategies",
    excerpt: "Practical advice for tackling debt and becoming financially free sooner than you thought possible.",
    category: "Debt Management",
    date: "May 10, 2023",
    author: "Emily Kim",
    authorImage: "https://randomuser.me/api/portraits/women/65.jpg",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Saving for Retirement: Start Early, Finish Rich",
    excerpt: "Why starting your retirement savings early can make a massive difference in your financial future.",
    category: "Retirement",
    date: "April 22, 2023",
    author: "David Patel",
    authorImage: "https://randomuser.me/api/portraits/men/33.jpg",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1579706966804-be9f2bf0b2eb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "The Psychology of Spending: Why We Buy What We Buy",
    excerpt: "Understanding the psychological factors that influence our spending habits and how to control them.",
    category: "Personal Finance",
    date: "April 5, 2023",
    author: "Jessica Wong",
    authorImage: "https://randomuser.me/api/portraits/women/18.jpg",
    readTime: "4 min read",
    image: "https://plus.unsplash.com/premium_photo-1700824490100-f82146b2441f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Emergency Funds: How Much Do You Really Need?",
    excerpt: "A detailed look at emergency funds, including how much to save and where to keep your money.",
    category: "Saving",
    date: "March 18, 2023",
    author: "Robert Lee",
    authorImage: "https://randomuser.me/api/portraits/men/36.jpg",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1602595363908-5c2c56832613?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RW1lcmdlbmN5JTIwRnVuZHMlM0ElMjBIb3clMjBNdWNoJTIwRG8lMjBZb3UlMjBSZWFsbHklMjBOZWVkJTNGfGVufDB8fDB8fHww",
  },
  {
    id: 7,
    title: "Budgeting Apps Compared: Which One is Right for You?",
    excerpt: "Explore the top budgeting apps and find out which tool best fits your financial goals.",
    category: "Budgeting",
    date: "February 8, 2023",
    author: "Olivia Garcia",
    authorImage: "https://randomuser.me/api/portraits/women/25.jpg",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QnVkZ2V0aW5nJTIwQXBwcyUyMENvbXBhcmVkJTNBJTIwV2hpY2glMjBPbmUlMjBpcyUyMFJpZ2h0JTIwZm9yJTIwWW91JTNGfGVufDB8fDB8fHww",
  },
  {
    id: 8,
    title: "How Compound Interest Builds Wealth Over Time",
    excerpt: "Understand the power of compound interest and how to use it to your advantage.",
    category: "Investing",
    date: "March 3, 2023",
    author: "Robert Lee",
    authorImage: "https://randomuser.me/api/portraits/men/36.jpg",
    readTime: "7 min read",
    image: "https://plus.unsplash.com/premium_photo-1681586033518-97e2e2abdd13?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEhvdyUyMENvbXBvdW5kJTIwSW50ZXJlc3QlMjBCdWlsZHMlMjBXZWFsdGglMjBPdmVyJTIwVGltZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 9,
    title: "Should You Pay Off Student Loans or Save First?",
    excerpt: "Explore pros and cons of debt repayment vs. building savings for long-term security.",
    category: "Debt Management",
    date: "January 20, 2023",
    author: "Sarah Chen",
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
    readTime: "5 min read",
    image: "https://plus.unsplash.com/premium_photo-1714675222296-e8867bc9398a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFNob3VsZCUyMFlvdSUyMFBheSUyME9mZiUyMFN0dWRlbnQlMjBMb2FucyUyMG9yJTIwU2F2ZSUyMEZpcnN0JTNGfGVufDB8fDB8fHww",
  },
  {
    id: 10,
    title: "Retirement Planning in Your 20s: Why It Matters",
    excerpt: "Starting retirement planning early gives you more freedom and less stress in later years.",
    category: "Retirement",
    date: "July 4, 2023",
    author: "Michael Rodriguez",
    authorImage: "https://randomuser.me/api/portraits/men/45.jpg",
    readTime: "6 min read",
    image: "https://plus.unsplash.com/premium_photo-1664301663432-b1d883a21258?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UmV0aXJlbWVudCUyMFBsYW5uaW5nJTIwaW4lMjBZb3VyJTIwMjBzJTNBJTIwV2h5JTIwSXQlMjBNYXR0ZXJzfGVufDB8fDB8fHww://source.unsplash.com/800x400/?retirement,young",
  },
  {
    id: 11,
    title: "How to Build Good Financial Habits",
    excerpt: "Learn daily financial habits that can improve your spending, saving, and investing patterns.",
    category: "Personal Finance",
    date: "March 10, 2023",
    author: "Emily Kim",
    authorImage: "https://randomuser.me/api/portraits/women/65.jpg",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1633372915206-adaef4b76e49?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEhvdyUyMHRvJTIwQnVpbGQlMjBHb29kJTIwRmluYW5jaWFsJTIwSGFiaXRzfGVufDB8fDB8fHww",
  },
  {
    id: 12,
    title: "Top 5 Saving Challenges to Try This Year",
    excerpt: "Make saving fun and productive with these creative financial challenges.",
    category: "Saving",
    date: "February 25, 2023",
    author: "Jessica Wong",
    authorImage: "https://randomuser.me/api/portraits/women/18.jpg",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1642489216436-4c5075b34d53?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VG9wJTIwNSUyMFNhdmluZyUyMENoYWxsZW5nZXMlMjB0byUyMFRyeSUyMFRoaXMlMjBZZWFyfGVufDB8fDB8fHww://source.unsplash.com/800x400/?saving,challenge",
  },
  {
    id: 13,
    title: "Zero-Based Budgeting: Is It Right for You?",
    excerpt: "Learn how to assign every dollar a purpose and gain control over your spending.",
    category: "Budgeting",
    date: "May 2, 2023",
    author: "David Patel",
    authorImage: "https://randomuser.me/api/portraits/men/33.jpg",
    readTime: "5 min read",
    image: "https://plus.unsplash.com/premium_photo-1680721445172-e34cb0e8ebf3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8WmVybyUyMEJhc2VkJTIwQnVkZ2V0aW5nJTNBJTIwSXMlMjBJdCUyMFJpZ2h0JTIwZm9yJTIwWW91fGVufDB8fDB8fHww",
  },
  {
    id: 14,
    title: "How to Avoid Investment Scams",
    excerpt: "Protect yourself from fraudulent schemes while growing your wealth.",
    category: "Investing",
    date: "April 10, 2023",
    author: "Sarah Chen",
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1602595363908-5c2c56832613?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RW1lcmdlbmN5JTIwRnVuZHMlM0ElMjBIb3clMjBNdWNoJTIwRG8lMjBZb3UlMjBSZWFsbHklMjBOZWVkJTNGfGVufDB8fDB8fHww",
  },
  {
    id: 15,
    title: "Debt Snowball vs. Avalanche: What Works Best?",
    excerpt: "Compare two powerful strategies for paying off debt and reducing stress.",
    category: "Debt Management",
    date: "May 17, 2023",
    author: "Olivia Garcia",
    authorImage: "https://randomuser.me/api/portraits/women/25.jpg",
    readTime: "6 min read",
    image: "https://plus.unsplash.com/premium_photo-1681586033518-97e2e2abdd13?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEhvdyUyMENvbXBvdW5kJTIwSW50ZXJlc3QlMjBCdWlsZHMlMjBXZWFsdGglMjBPdmVyJTIwVGltZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 16,
    title: "5 Common Retirement Planning Mistakes to Avoid",
    excerpt: "Avoid the pitfalls many people face when planning for retirement.",
    category: "Retirement",
    date: "June 30, 2023",
    author: "Jessica Wong",
    authorImage: "https://randomuser.me/api/portraits/women/18.jpg",
    readTime: "5 min read",
    image: "https://plus.unsplash.com/premium_photo-1680721445172-e34cb0e8ebf3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8WmVybyUyMEJhc2VkJTIwQnVkZ2V0aW5nJTNBJTIwSXMlMjBJdCUyMFJpZ2h0JTIwZm9yJTIwWW91fGVufDB8fDB8fHwws",
  },
];
