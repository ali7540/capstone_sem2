'use client'

import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800 px-6 py-12">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
          <p className="text-lg text-slate-600 mb-4">
            At BudgetWise, we’re dedicated to helping people take control of their finances with clarity, ease, and confidence.
          </p>
          <p className="text-md text-slate-600">
            Our goal is to simplify money management through intuitive tools, meaningful insights, and seamless design—so that you can make smarter decisions and plan for a secure future.
          </p>
        </div>
        <div>
          <Image
            src="/783b1e90-8469-4e13-87ea-592038cf3d72.png"
            alt="Team collaboration image"
            width={600}
            height={400}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-purple-50 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-purple-700 mb-2">Simplify</h3>
            <p className="text-slate-600">We make complex financial concepts easy to understand through intuitive design and clear visualizations.</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-purple-700 mb-2">Educate</h3>
            <p className="text-slate-600">We provide resources and insights to help users learn about personal finance and make informed choices.</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-purple-700 mb-2">Empower</h3>
            <p className="text-slate-600">We equip users with tools to take control of their finances and achieve their goals.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-24 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Our Team</h2>
        <p className="text-slate-600 mb-10">Meet the passionate individuals behind FinTrack.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <Image
                src={member.img}
                alt={member.name}
                width={96}
                height={96}
                className="rounded-full bg-gray-200"
              />
              <p className="font-semibold mt-3">{member.name}</p>
              <p className="text-sm text-slate-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Co-founder",
    img: "/0d0b51dc-1f89-46f5-8299-87af9afdd535.png"
  },
  {
    name: "Sarah Chen",
    role: "CTO & Co-founder",
    img: "/5531bf0f-d53b-4306-b9f3-ad7ede008702.png"
  },
  {
    name: "Emily Kim",
    role: "Head of Design",
    img: "/0d0b51dc-1f89-46f5-8299-87af9afdd535.png"
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Product",
    img: "/5531bf0f-d53b-4306-b9f3-ad7ede008702.png"
  },
  {
    name: "Jessica Wong",
    role: "Financial Analyst",
    img: "/0d0b51dc-1f89-46f5-8299-87af9afdd535.png"
  },
]
