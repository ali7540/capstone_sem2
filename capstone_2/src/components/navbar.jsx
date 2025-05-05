import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-[#E8DAF9] px-8 py-6 flex justify-between items-center font-sans">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-gradient-to-tr from-purple-600 to-violet-500 rounded-sm rotate-45"></div>
    <Link href="/"> <span className="text-2xl font-semibold text-slate-800">Budgetify</span></Link>
      </div>

      <div className="bg-white/20 bg-opacity-90 border border-white/30 rounded-full px-6 py-4 flex gap-6 shadow-sm">
        {["Home", "Features", "Pricing", "Review", "Blog"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-slate-800 font-medium hover:text-purple-600 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <Link href="/login">
        <button className="rounded-full bg-white bg-opacity-80 border border-white/30 px-6 py-2 text-slate-800 font-medium hover:text-purple-600 transition-colors shadow-sm">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
