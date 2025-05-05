"use client"
import React, { useState } from "react";

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <div id="pricing" className="min-h-screen bg-white px-6 py-12 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold text-[#0F172A] mb-3">Transparent Pricing</h1>
      <p className="text-gray-500 mb-8 max-w-xl">
        Start for free and upgrade anytime to unlock AI-powered financial management.
      </p>

     
      <div className="flex items-center bg-gray-100 rounded-full p-1 mb-8">
        <button
          onClick={() => setBilling("monthly")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            billing === "monthly" ? "bg-purple-500 text-white" : "text-gray-600"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling("yearly")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            billing === "yearly" ? "bg-purple-500 text-white" : "text-gray-600"
          }`}
        >
          Yearly
        </button>
      </div>

 
      <div className="flex flex-col md:flex-row gap-6">
   
        <div className="bg-[#FFF7F1] text-left rounded-3xl p-6 shadow-md w-full md:w-106">
          <h2 className="text-xl font-semibold text-[#0F172A] mb-1">Free</h2>
          <p className="text-sm text-gray-600 mb-4">Perfect for getting started with basic tracking.</p>
          <div className="text-3xl font-bold text-[#0F172A] mb-4">$0/m</div>
          <button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white font-semibold py-2 w-full rounded-full mb-2">
            Contact Us
          </button>
          <p className="text-xs text-gray-400 mb-4">*No credit card required for the Free Plan.</p>

          <h3 className="font-semibold text-[#0F172A] mb-2">Plan Includes:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>✓ Expense categorization</li>
            <li>✓ Basic expense tracking</li>
            <li>✓ Limited AI insights</li>
            <li>✓ Manual budgeting tools</li>
            <li>✓ Secure bank sync (1 account)</li>
          </ul>
        </div>
 
        <div className="bg-[#F3E8FF] text-left rounded-3xl p-6 shadow-md w-full md:w-106">
          <h2 className="text-xl font-semibold text-[#0F172A] mb-1">Pro</h2>
          <p className="text-sm text-gray-600 mb-4">Perfect for getting started with basic tracking.</p>
          <div className="text-3xl font-bold text-[#0F172A] mb-4">$79/m</div>
          <button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white font-semibold py-2 w-full rounded-full mb-2">
            Contact Us
          </button>
          <p className="text-xs text-gray-400 mb-4">*No credit card required for the Free Plan.</p>

          <h3 className="font-semibold text-[#0F172A] mb-2">Plan Includes:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>✓ Priority customer support</li>
            <li>✓ Investment tracking</li>
            <li>✓ Tax optimization tools</li>
            <li>✓ AI financial coaching</li>
            <li>✓ Unlimited bank connections</li>
            <li>✓ Advanced spending analytics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
