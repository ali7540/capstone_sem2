import React from "react";

const testimonials = [
  {
    name: "Esther Howard",
    title: "Software Developer",
    image: "https://i.pravatar.cc/100?img=1",
    review:
      "I’ve always struggled with sticking to a budget, but Budgetify AI made it ridiculously easy. Just two months, I reduced my monthly expenses by 15% and saved enough to finally start investing!",
  },
  { 
    name: "Bessie Cooper",
    title: "Software Tester",
    image: "https://i.pravatar.cc/100?img=2",
    review:
      "I used to live paycheck to paycheck. The automated subscription manager alone saved me over $600 a year! I finally feel in control of my money.",
  },
  {
    name: "Ralph Edwards",
    title: "Scrum Master",
    image: "https://i.pravatar.cc/100?img=3",
    review:
      "I’ve tried so many budgeting apps, and they all felt overwhelming—until I found SmartBudget AI. The interface is incredibly user-friendly, and everything is automated.",
  },
  {
    name: "Annette Black",
    title: "Software Development Manager",
    image: "https://i.pravatar.cc/100?img=4",
    review:
      "SmartBudget AI categorized everything for me. Seeing my spending habits in real time was eye-opening. The AI recommendations are spot-on!",
  },
  {
    name: "Ronald Richards",
    title: "Ethical Hacker",
    image: "https://i.pravatar.cc/100?img=5",
    review:
      "What sets Budgetify apart is the AI-powered insights. It doesn’t just track my expenses—it actively helps me make better financial decisions.",
  },
  {
    name: "Marvin McKinney",
    title: "Project Manager",
    image: "https://i.pravatar.cc/100?img=6",
    review:
      "No more stress about tracking expenses! My favorite feature? The Financial Health Score! Watching it improve keeps me motivated.",
  },
];

export default function Testimonials() {
  return (
    <section id="review" className="bg-[#FAFAFA] h-screen py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-12">Loved by Thousands of Users</h2>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md p-6 text-left flex flex-col justify-between h-full">
            <div>
              <div className="flex gap-1 text-purple-600 mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
              </div>
              <p className="text-gray-700 mb-6">{t.review}</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold text-[#0F172A]">{t.name}</p>
                <p className="text-sm text-gray-500">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
