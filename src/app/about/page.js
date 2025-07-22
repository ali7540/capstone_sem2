// 'use client'

// import Image from "next/image"

// export default function AboutPage() {
//   return (
//     <div className="bg-white min-h-screen text-slate-800 px-6 py-12">
//       {/* Hero Section */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//         <div>
//           <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
//           <p className="text-lg text-slate-600 mb-4">
//             At BudgetWise, we’re dedicated to helping people take control of their finances with clarity, ease, and confidence.
//           </p>
//           <p className="text-md text-slate-600">
//             Our goal is to simplify money management through intuitive tools, meaningful insights, and seamless design—so that you can make smarter decisions and plan for a secure future.
//           </p>
//         </div>
//         <div>
//           <Image
//             src="/783b1e90-8469-4e13-87ea-592038cf3d72.png"
//             alt="Team collaboration image"
//             width={600}
//             height={400}
//             className="rounded-xl shadow-md"
//           />
//         </div>
//       </div>

//       {/* Values Section */}
//       <div className="mt-20 max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           <div className="bg-purple-50 rounded-xl p-6 shadow-sm">
//             <h3 className="text-lg font-semibold text-purple-700 mb-2">Simplify</h3>
//             <p className="text-slate-600">We make complex financial concepts easy to understand through intuitive design and clear visualizations.</p>
//           </div>
//           <div className="bg-purple-50 rounded-xl p-6 shadow-sm">
//             <h3 className="text-lg font-semibold text-purple-700 mb-2">Educate</h3>
//             <p className="text-slate-600">We provide resources and insights to help users learn about personal finance and make informed choices.</p>
//           </div>
//           <div className="bg-purple-50 rounded-xl p-6 shadow-sm">
//             <h3 className="text-lg font-semibold text-purple-700 mb-2">Empower</h3>
//             <p className="text-slate-600">We equip users with tools to take control of their finances and achieve their goals.</p>
//           </div>
//         </div>
//       </div>

//       {/* Team Section */}
//       <div className="mt-24 max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-2">Our Team</h2>
//         <p className="text-slate-600 mb-10">Meet the passionate individuals behind BudgetWise.</p>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//           {team.map((member) => (
//             <div key={member.name} className="flex flex-col items-center">
//               <Image
//                 src={member.img}
//                 alt={member.name}
//                 width={96}
//                 height={96}
//                 className="rounded-full bg-gray-200"
//               />
//               <p className="font-semibold mt-3">{member.name}</p>
//               <p className="text-sm text-slate-500">{member.role}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// const team = [
//   {
//     name: "Alex Johnson",
//     role: "CEO & Co-founder",
//     img: "/0d0b51dc-1f89-46f5-8299-87af9afdd535.png"
//   },
//   {
//     name: "Sarah Chen",
//     role: "CTO & Co-founder",
//     img: "/5531bf0f-d53b-4306-b9f3-ad7ede008702.png"
//   },
//   {
//     name: "Emily Kim",
//     role: "Head of Design",
//     img: "/0d0b51dc-1f89-46f5-8299-87af9afdd535.png"
//   },
//   {
//     name: "Michael Rodriguez",
//     role: "Head of Product",
//     img: "/5531bf0f-d53b-4306-b9f3-ad7ede008702.png"
//   },
//   {
//     name: "Jessica Wong",
//     role: "Financial Analyst",
//     img: "/0d0b51dc-1f89-46f5-8299-87af9afdd535.png"
//   },
// ]


// 'use client'

// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { motion } from "framer-motion"

// const team = [
//   {
//     name: "Alex Johnson",
//     role: "CEO & Co-founder",
//     img: "/0d0b51dc-1f89-46f5-8299-87af9afdd535.png"
//   },
//   {
//     name: "Sarah Chen",
//     role: "CTO & Co-founder",
//     img: "/5531bf0f-d53b-4306-b9f3-ad7ede008702.png"
//   },
//   {
//     name: "Emily Kim",
//     role: "Head of Design",
//     img: "/0d0b51dc-1f89-46f5-8299-87af9afdd535.png"
//   },
//   {
//     name: "Michael Rodriguez",
//     role: "Head of Product",
//     img: "/5531bf0f-d53b-4306-b9f3-ad7ede008702.png"
//   },
//   {
//     name: "Jessica Wong",
//     role: "Financial Analyst",
//     img: "/0d0b51dc-1f89-46f5-8299-87af9afdd535.png"
//   },
// ]

// export default function AboutPage() {
//   return (
//     <main className="bg-white text-slate-800">
//       {/* Hero Section */}
//       <section className="h-screen bg-[#E8DAF9] flex flex-col justify-center px-6 md:px-20 text-center md:text-left">
//         <motion.div
//           className="max-w-4xl mx-auto"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">About BudgetWise</h1>
//           <p className="text-lg md:text-xl text-slate-700 mb-6">
//             Empowering Your Financial Journey with Smart Technology and Intuitive Design
//           </p>
//           <Button variant="default" className="bg-violet-600 text-white hover:bg-violet-700 transition">
//             Start Your Journey
//           </Button>
//         </motion.div>
//       </section>

//       {/* Mission Section */}
//       <section className="min-h-screen px-6 py-16 md:px-20 bg-white">
//         <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold mb-4">Our Story</h2>
//             <p className="text-slate-600 mb-4">
//               Founded in 2023, BudgetWise emerged from a simple yet powerful idea: everyone deserves access to smart,
//               intuitive financial tools. Our team of experts and innovators created a platform that makes budgeting
//               not just easier, but enjoyable.
//             </p>
//             <p className="text-slate-600">
//               Today, we serve thousands worldwide — helping them meet financial goals through technology and personalized insights.
//             </p>
//           </motion.div>

//           <motion.div
//             className="rounded-lg overflow-hidden shadow-md"
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <Image
//               src="/783b1e90-8469-4e13-87ea-592038cf3d72.png"
//               alt="Team working together"
//               width={600}
//               height={400}
//               className="rounded-xl w-full"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="min-h-screen px-6 py-16 bg-gray-50 md:px-20 text-center">
//         <h2 className="text-3xl font-bold mb-10">What Sets Us Apart</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//           {[
//             {
//               title: "Smart Budgeting",
//               desc: "Intelligent algorithms that adapt to your spending patterns.",
//             },
//             {
//               title: "Real-time Tracking",
//               desc: "Monitor your expenses and income in real-time.",
//             },
//             {
//               title: "Custom Categories",
//               desc: "Organize your finances your way with custom tags.",
//             },
//             {
//               title: "Goal Setting",
//               desc: "Set and achieve your financial goals with insights.",
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="rounded-xl bg-white shadow-sm border border-gray-200 p-6 text-left"
//             >
//               <h4 className="font-semibold text-violet-700 mb-2">{item.title}</h4>
//               <p className="text-sm text-slate-600">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="min-h-screen px-6 py-16 md:px-20 text-center bg-white">
//         <h2 className="text-3xl font-bold mb-10">Meet the Team</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
//           {team.map((member) => (
//             <motion.div
//               key={member.name}
//               className="flex flex-col items-center"
//               whileHover={{ scale: 1.05 }}
//             >
//               <Image
//                 src={member.img}
//                 alt={member.name}
//                 width={96}
//                 height={96}
//                 className="rounded-full bg-gray-100 shadow"
//               />
//               <p className="font-semibold mt-3">{member.name}</p>
//               <p className="text-sm text-slate-500">{member.role}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </main>
//   )
// }




// src/app/about/page.jsx
// "use client";

// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";

// export default function AboutPage() {
//   const teamMembers = [
//     { name: "Alex Johnson", role: "CEO & Co-founder" },
//     { name: "Sarah Chen", role: "CTO & Co-founder" },
//     { name: "Michael Rodriguez", role: "Head of Product" },
//     { name: "Emily Kim", role: "Head of Design" },
//     { name: "David Patel", role: "Lead Engineer" },
//     { name: "Jessica Wong", role: "Financial Analyst" },
//     { name: "Robert Lee", role: "Marketing Director" },
//     { name: "Olivia Garcia", role: "Customer Success" },
//   ];

//   return (
//     <main className="flex flex-col">
      
//       <section className="w-full py-16 bg-[#F3EBFF]">
//         <div className="mx-auto max-w-[1200px] px-6 md:px-[5vw] text-center">
//           <h1 className="text-4xl font-bold text-[#1F1F1F] sm:text-5xl">
//             About <span className="text-[#9333EA]">BudgetWise</span>
//           </h1>
//           <p className="mt-4 text-lg text-[#555] md:text-xl">
//             We are on a mission to help people take control of their financial lives.
//           </p>
//         </div>
//       </section>

     
//       <section className="w-full py-16">
//   <div className="mx-auto max-w-[1200px] px-6 md:px-[5vw] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
  
//     <div className="w-full">
//       <img
//         src="https://plus.unsplash.com/premium_photo-1667518322204-31353611b2dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt="Our team"
//         width={600}
//         height={400}
//         className="w-full h-auto rounded-xl object-cover"
//       />
//     </div>

//     <div>
//       <h2 className="text-3xl font-bold text-[#1F1F1F] md:text-4xl">
//         Our <span className="text-[#9333EA]">Story</span>
//       </h2>
//       <p className="mt-4 text-[#555] md:text-lg">
//         Founded in 2020, BudgetWise was born out of a simple observation:
//         managing personal finances is too complicated. Our founders, who
//         previously worked in fintech and consumer technology, saw an
//         opportunity to create a more intuitive, comprehensive solution that
//         would help people understand and improve their financial health.
//       </p>
//       <p className="mt-4 text-[#555] md:text-lg">
//         What started as a simple budgeting tool has evolved into a
//         comprehensive financial management platform that helps thousands of
//         users track their spending, save for goals, and plan for the
//         future.
//       </p>
//     </div>
//   </div>
// </section>


      
//       <section className="w-full py-16 bg-[#FAFAFA]">
//         <div className="mx-auto max-w-[1200px] px-6 md:px-[5vw] text-center">
//           <h2 className="text-3xl font-bold text-[#1F1F1F] md:text-4xl">
//             Our <span className="text-[#9333EA]">Mission</span>
//           </h2>
//           <p className="mt-4 mx-auto max-w-[800px] text-[#555] md:text-xl">
//             We believe that financial well-being is essential to overall happiness and security. Our mission is to
//             empower people with the tools and knowledge they need to make smarter financial decisions.
//           </p>

//           <div className="mt-12 grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Simplify",
//                 desc:
//                   "We make complex financial concepts and data easy to understand through intuitive design and clear visualizations.",
//               },
//               {
//                 title: "Educate",
//                 desc:
//                   "We provide resources and insights to help users learn about personal finance and make informed decisions.",
//               },
//               {
//                 title: "Empower",
//                 desc:
//                   "We give users the tools they need to take control of their finances and work towards their goals.",
//               },
//             ].map((card) => (
//               <Card key={card.title} className="shadow-md border-0">
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-bold text-[#9333EA] mb-2">
//                     {card.title}
//                   </h3>
//                   <p className="text-[#555]">{card.desc}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

   
//       <section className="w-full py-16">
//         <div className="mx-auto max-w-[1200px] px-6 md:px-[5vw] text-center">
//           <h2 className="text-3xl font-bold text-[#1F1F1F] md:text-4xl">
//             Our <span className="text-[#9333EA]">Team</span>
//           </h2>
//           <p className="mt-4 mx-auto max-w-[800px] text-[#555] md:text-lg">
//             Meet the passionate individuals behind our platform.
//           </p>

//           <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             {teamMembers.map((member, i) => (
//               <div key={i} className="flex flex-col items-center space-y-3">
//                 <Image
//                   src="/placeholder.svg"
//                   alt={member.name}
//                   width={150}
//                   height={150}
//                   className="rounded-full bg-gray-100"
//                 />
//                 <h3 className="text-lg font-semibold text-[#1F1F1F]">
//                   {member.name}
//                 </h3>
//                 <p className="text-[#555] text-sm">{member.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }



"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Asad Ali",
      role: "CEO & Co-founder",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah Khan",
      role: "CTO & Co-founder",
      photo: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Md Sajjan",
      role: "Head of Product",
      photo: "https://randomuser.me/api/portraits/men/36.jpg",
    },
    {
      name: "Emily Kim",
      role: "Head of Design",
      photo: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      name: "Vikrant Yadav",
      role: "Lead Engineer",
      photo: "https://randomuser.me/api/portraits/men/64.jpg",
    },
    {
      name: "Jessica Wong",
      role: "Financial Analyst",
      photo: "https://randomuser.me/api/portraits/women/66.jpg",
    },
    {
      name: "Ashar Asif",
      role: "Marketing Director",
      photo: "https://randomuser.me/api/portraits/men/78.jpg",
    },
    {
      name: "Olivia Garcia",
      role: "Customer Success",
      photo: "https://randomuser.me/api/portraits/women/22.jpg",
    },
  ];

  return (
    <main className="flex flex-col">
      {/* Header */}
      <section className="w-full py-16 bg-[#F3EBFF]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-[5vw] text-center">
          <h1 className="text-4xl font-bold text-[#1F1F1F] sm:text-5xl">
            About <span className="text-[#9333EA]">BudgetWise</span>
          </h1>
          <p className="mt-4 text-lg text-[#555] md:text-xl">
            We are on a mission to help people take control of their financial lives.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="w-full py-16">
        <div className="mx-auto max-w-[1200px] px-6 md:px-[5vw] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="w-full">
            <img
              src="https://plus.unsplash.com/premium_photo-1667518322204-31353611b2dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our team"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#1F1F1F] md:text-4xl">
              Our <span className="text-[#9333EA]">Story</span>
            </h2>
            <p className="mt-4 text-[#555] md:text-lg">
              Founded in 2020, BudgetWise was born out of a simple observation:
              managing personal finances is too complicated. Our founders, who
              previously worked in fintech and consumer technology, saw an
              opportunity to create a more intuitive, comprehensive solution that
              would help people understand and improve their financial health.
            </p>
            <p className="mt-4 text-[#555] md:text-lg">
              What started as a simple budgeting tool has evolved into a
              comprehensive financial management platform that helps thousands of
              users track their spending, save for goals, and plan for the
              future.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="w-full py-16 bg-[#FAFAFA]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-[5vw] text-center">
          <h2 className="text-3xl font-bold text-[#1F1F1F] md:text-4xl">
            Our <span className="text-[#9333EA]">Mission</span>
          </h2>
          <p className="mt-4 mx-auto max-w-[800px] text-[#555] md:text-xl">
            We believe that financial well-being is essential to overall happiness and security. Our mission is to
            empower people with the tools and knowledge they need to make smarter financial decisions.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Simplify",
                desc:
                  "We make complex financial concepts and data easy to understand through intuitive design and clear visualizations.",
              },
              {
                title: "Educate",
                desc:
                  "We provide resources and insights to help users learn about personal finance and make informed decisions.",
              },
              {
                title: "Empower",
                desc:
                  "We give users the tools they need to take control of their finances and work towards their goals.",
              },
            ].map((card) => (
              <Card key={card.title} className="shadow-md border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#9333EA] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#555]">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="w-full py-16">
        <div className="mx-auto max-w-[1200px] px-6 md:px-[5vw] text-center">
          <h2 className="text-3xl font-bold text-[#1F1F1F] md:text-4xl">
            Our <span className="text-[#9333EA]">Team</span>
          </h2>
          <p className="mt-4 mx-auto max-w-[800px] text-[#555] md:text-lg">
            Meet the passionate individuals behind our platform.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <div key={i} className="flex flex-col items-center space-y-3">
                <img
                  src={member.photo}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
                <h3 className="text-lg font-semibold text-[#1F1F1F]">
                  {member.name}
                </h3>
                <p className="text-[#555] text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
