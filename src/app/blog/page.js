// "use client";
// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import React,{ useState } from "react";

// export default function BlogPage() {
//   const blogPosts = [
//     {
//       id: 1,
//       title: "10 Tips for Better Budgeting in 2023",
//       excerpt:
//         "Learn how to create and stick to a budget that works for your lifestyle and financial goals.",
//       category: "Budgeting",
//       date: "June 15, 2023",
//       author: "Sarah Chen",
//       readTime: "5 min read",
//       image: "/placeholder.svg?height=200&width=400",
//     },
//     {
//       id: 2,
//       title: "Understanding Investment Basics: A Beginner's Guide",
//       excerpt:
//         "Everything you need to know to start investing, from stocks and bonds to ETFs and mutual funds.",
//       category: "Investing",
//       date: "May 28, 2023",
//       author: "Michael Rodriguez",
//       readTime: "8 min read",
//       image: "/placeholder.svg?height=200&width=400",
//     },
//     {
//       id: 3,
//       title: "How to Pay Off Debt Faster: Proven Strategies",
//       excerpt:
//         "Practical advice for tackling debt and becoming financially free sooner than you thought possible.",
//       category: "Debt Management",
//       date: "May 10, 2023",
//       author: "Emily Kim",
//       readTime: "6 min read",
//       image: "/placeholder.svg?height=200&width=400",
//     },
//     {
//       id: 4,
//       title: "Saving for Retirement: Start Early, Finish Rich",
//       excerpt:
//         "Why starting your retirement savings early can make a massive difference in your financial future.",
//       category: "Retirement",
//       date: "April 22, 2023",
//       author: "David Patel",
//       readTime: "7 min read",
//       image: "/placeholder.svg?height=200&width=400",
//     },
//     {
//       id: 5,
//       title: "The Psychology of Spending: Why We Buy What We Buy",
//       excerpt:
//         "Understanding the psychological factors that influence our spending habits and how to control them.",
//       category: "Personal Finance",
//       date: "April 5, 2023",
//       author: "Jessica Wong",
//       readTime: "4 min read",
//       image: "/placeholder.svg?height=200&width=400",
//     },
//     {
//       id: 6,
//       title: "Emergency Funds: How Much Do You Really Need?",
//       excerpt:
//         "A detailed look at emergency funds, including how much to save and where to keep your money.",
//       category: "Saving",
//       date: "March 18, 2023",
//       author: "Robert Lee",
//       readTime: "5 min read",
//       image: "/placeholder.svg?height=200&width=400",
//     },
//   ];

//   const pageSize = 3;
//   const [currentTab, setCurrentTab] = useState("all");
//   const [currentPage, setCurrentPage] = useState(1);

//   // whenever you switch tabs, reset to page 1
//   const handleTabChange = (value) => {
//     setCurrentTab(value);
//     setCurrentPage(1);
//   };

//   // filter posts by category
//   const filteredPosts = blogPosts.filter((post) =>
//     currentTab === "all" ? true : post.category.toLowerCase() === currentTab
//   );

//   const totalPages = Math.ceil(filteredPosts.length / pageSize);

//   // slice out only the posts for current page
//   const paginatedPosts = filteredPosts.slice(
//     (currentPage - 1) * pageSize,
//     currentPage * pageSize
//   );

//   return (
//     <div className="flex min-h-screen  flex-col">
//       <main className="flex-1 ">
//         <section className="w-full py-12 md:py-24 lg:py-32 hero-pattern ">
//           <div className="container px-4 md:px-6 mx-auto">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
//                   Financial <span className="gradient-text">Insights</span> Blog
//                 </h1>
//                 <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Expert advice and insights to help you make smarter financial
//                   decisions.
//                 </p>
//               </div>
//               <div className="w-full max-w-sm">
//                 <div className="relative">
//                   <Input
//                     type="search"
//                     placeholder="Search articles..."
//                     className="w-full rounded-full pr-10"
//                   />
//                   <Button
//                     size="sm"
//                     className="absolute right-0 top-0 h-full rounded-l-none rounded-r-full gradient-bg"
//                   >
//                     Search
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container mx-auto px-4 md:px-6">
//             {/* <Tabs defaultValue="all" className="w-full">
//               <div className="flex justify-center mb-8">
//                 <TabsList>
//                   <TabsTrigger value="all">All</TabsTrigger>
//                   <TabsTrigger value="budgeting">Budgeting</TabsTrigger>
//                   <TabsTrigger value="investing">Investing</TabsTrigger>
//                   <TabsTrigger value="saving">Saving</TabsTrigger>
//                   <TabsTrigger value="debt">Debt</TabsTrigger>
//                 </TabsList>
//               </div>

//               <TabsContent value="all" className="mt-0">
//                 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                   {blogPosts.map((post) => (
//                     <Card
//                       key={post.id}
//                       className="overflow-hidden border-0 shadow-md"
//                     >
//                       <Image
//                         src={post.image}
//                         width={400}
//                         height={200}
//                         alt={post.title}
//                         className="w-full object-cover h-48"
//                       />
//                       <CardContent className="p-6">
//                         <div className="flex items-center gap-2 mb-2">
//                           <span className="text-xs bg-muted text-primary px-2 py-1 rounded-full">
//                             {post.category}
//                           </span>
//                           <span className="text-xs text-muted-foreground">
//                             {post.date}
//                           </span>
//                         </div>
//                         <h3 className="text-xl font-bold mb-2">{post.title}</h3>
//                         <p className="line-clamp-2 text-muted-foreground mb-4">
//                           {post.excerpt}
//                         </p>
//                         <div className="flex justify-between items-center">
//                           <div className="flex items-center gap-2">
//                             <Image
//                               src={`/placeholder.svg?height=30&width=30`}
//                               width={30}
//                               height={30}
//                               alt={post.author}
//                               className="rounded-full"
//                             />
//                             <span className="text-xs text-muted-foreground">
//                               {post.author}
//                             </span>
//                           </div>
//                           <span className="text-xs text-muted-foreground">
//                             {post.readTime}
//                           </span>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </TabsContent>

//               <TabsContent value="budgeting" className="mt-0">
//                 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                   {blogPosts
//                     .filter((post) => post.category === "Budgeting")
//                     .map((post) => (
//                       <Card
//                         key={post.id}
//                         className="overflow-hidden border-0 shadow-md"
//                       >
//                         <Image
//                           src={post.image}
//                           width={400}
//                           height={200}
//                           alt={post.title}
//                           className="w-full object-cover h-48"
//                         />
//                         <CardContent className="p-6">
//                           <div className="flex items-center gap-2 mb-2">
//                             <span className="text-xs bg-muted text-primary px-2 py-1 rounded-full">
//                               {post.category}
//                             </span>
//                             <span className="text-xs text-muted-foreground">
//                               {post.date}
//                             </span>
//                           </div>
//                           <h3 className="text-xl font-bold mb-2">
//                             {post.title}
//                           </h3>
//                           <p className="line-clamp-2 text-muted-foreground mb-4">
//                             {post.excerpt}
//                           </p>
//                           <div className="flex justify-between items-center">
//                             <div className="flex items-center gap-2">
//                               <Image
//                                 src={`/placeholder.svg?height=30&width=30`}
//                                 width={30}
//                                 height={30}
//                                 alt={post.author}
//                                 className="rounded-full"
//                               />
//                               <span className="text-xs text-muted-foreground">
//                                 {post.author}
//                               </span>
//                             </div>
//                             <span className="text-xs text-muted-foreground">
//                               {post.readTime}
//                             </span>
//                           </div>
//                         </CardContent>
//                       </Card>
//                     ))}
//                 </div>
//               </TabsContent>
//             </Tabs> */}
//             <Tabs defaultValue="all" onValueChange={handleTabChange}>
//               <div className="flex justify-center mb-8">
//                 <TabsList>
//                   <TabsTrigger value="all">All</TabsTrigger>
//                   <TabsTrigger value="budgeting">Budgeting</TabsTrigger>
//                   <TabsTrigger value="investing">Investing</TabsTrigger>
//                   <TabsTrigger value="saving">Saving</TabsTrigger>
//                   <TabsTrigger value="debt">Debt</TabsTrigger>
//                 </TabsList>
//               </div>

//               {/* We only need one TabsContent since we're driving what shows via currentTab */}
//               <TabsContent value={currentTab}>
//                 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                   {paginatedPosts.map((post) => (
//                     <Card key={post.id} className="overflow-hidden shadow-md">
//                       <Image
//                         src={post.image}
//                         width={400}
//                         height={200}
//                         alt={post.title}
//                         className="w-full object-cover h-48"
//                       />
//                       <CardContent className="p-6">
//                         {/* … your existing markup … */}
//                         <h3 className="text-xl font-bold mb-2">{post.title}</h3>
//                         <p className="line-clamp-2 text-muted-foreground mb-4">
//                           {post.excerpt}
//                         </p>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>

//                 {/* pagination controls */}
//                 <div className="flex justify-center items-center space-x-2 mt-8">
//                   <Button
//                     variant="outline"
//                     disabled={currentPage === 1}
//                     onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//                   >
//                     Prev
//                   </Button>

//                   {[...Array(totalPages)].map((_, idx) => {
//                     const page = idx + 1;
//                     return (
//                       <Button
//                         key={page}
//                         size="sm"
//                         variant={page === currentPage ? undefined : "outline"}
//                         className={page === currentPage ? "gradient-bg" : ""}
//                         onClick={() => setCurrentPage(page)}
//                       >
//                         {page}
//                       </Button>
//                     );
//                   })}

//                   <Button
//                     variant="outline"
//                     disabled={currentPage === totalPages}
//                     onClick={() =>
//                       setCurrentPage((p) => Math.min(p + 1, totalPages))
//                     }
//                   >
//                     Next
//                   </Button>
//                 </div>
//               </TabsContent>
//             </Tabs>
//             <div className="flex justify-center mt-8">
//               <Button variant="outline">Load More Articles</Button>
//             </div>
//           </div>
//         </section>

//         <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
//           <div className="container mx-auto px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
//                   Subscribe to Our{" "}
//                   <span className="gradient-text">Newsletter</span>
//                 </h2>
//                 <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Get the latest financial tips, news, and insights delivered
//                   straight to your inbox.
//                 </p>
//               </div>
//               <div className="w-full max-w-md space-y-2">
//                 <div className="flex flex-col sm:flex-row gap-2">
//                   <Input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="flex-1"
//                   />
//                   <Button className="gradient-bg">Subscribe</Button>
//                 </div>
//                 <p className="text-xs text-muted-foreground">
//                   We respect your privacy. Unsubscribe at any time.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }


"use client";

// import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import React, { useState } from "react";

export default function BlogPage() {
  const  blogPosts = [
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


  const pageSize = 3;
  const [currentTab, setCurrentTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const handleTabChange = (value) => {
    setCurrentTab(value);
    setCurrentPage(1);
  };

  const filteredPosts = blogPosts.filter((post) =>
    currentTab === "all" ? true : post.category.toLowerCase() === currentTab
  );
  const totalPages = Math.ceil(filteredPosts.length / pageSize);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-800">
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE]">
          <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
            <h1 className="text-3xl sm:text-5xl font-bold">
              Financial <span className="text-[#9333EA]">Insights</span> Blog
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Expert advice and insights to help you make smarter financial
              decisions.
            </p>
            <div className="mt-8 max-w-sm mx-auto relative">
              <Input
                type="search"
                placeholder="Search articles..."
                className="w-full rounded-full pr-14"
              />
              <Button className="absolute right-1 top-1 h-10 rounded-full px-4 gradient-bg">
                Search
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <Tabs defaultValue="all" onValueChange={handleTabChange}>
              <div className="flex justify-center mb-8">
              <TabsList className="justify-center mb-8 space-x-2">
                {["all", "budgeting", "investing", "saving", "debt"].map(
                  (v) => (
                    <TabsTrigger
                      key={v}
                      value={v}
                      className={
                        currentTab === v
                          ? "gradient-bg text-purple-700"
                          : "border border-purple-200 text-purple-700 hover:bg-purple-50"
                      }
                    >
                      {v === "all" ? "All" : v[0].toUpperCase() + v.slice(1)}
                    </TabsTrigger>
                  )
                )}
              </TabsList>
              </div>

              <TabsContent value={currentTab} className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {paginatedPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <img
                        src={post.image}
                        width={400}
                        height={200}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs bg-purple-100 text-[#9333EA] px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-xs text-slate-400">
                            {post.date}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 line-clamp-2 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <img
                              src={post.authorImage}
                              width={30}
                              height={30}
                              alt={post.author}
                              className="rounded-full"
                            />
                            <span className="text-sm text-slate-500">
                              {post.author}
                            </span>
                          </div>
                          <span className="text-sm text-slate-500">
                            {post.readTime}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-center items-center space-x-2 mt-10">
                  <Button
                    variant="outline"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  >
                    Prev
                  </Button>

                  {[...Array(totalPages)].map((_, i) => {
                    const page = i + 1;
                    return (
                      <Button
                        key={page}
                        size="sm"
                        variant={page === currentPage ? undefined : "outline"}
                        className={
                          page === currentPage ? "gradient-bg text-white" : ""
                        }
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    );
                  })}

                  <Button
                    variant="outline"
                    disabled={currentPage === totalPages}
                    onClick={() =>
                      setCurrentPage((p) => Math.min(p + 1, totalPages))
                    }
                  >
                    Next
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-purple-50">
          <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold">
              Subscribe to our{" "}
              <span className="text-[#9333EA]">Newsletter</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Get the latest financial tips and insights straight to your
              inbox.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full"
              />
              <Button className="gradient-bg text-white rounded-full px-8">
                Subscribe
              </Button>
            </div>
            <p className="mt-2 text-xs text-slate-400">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

