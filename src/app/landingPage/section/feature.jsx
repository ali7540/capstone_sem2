const features = [
    {
      title: "Budget Tracking",
      description: "Create custom budgets for different categories and track your spending against them.",
      icon: "📊"
    },
    {
      title: "Visual Analytics",
      description: "See where your money is going with intuitive charts and detailed spending breakdowns.",
      icon: "📈"
    },
    {
      title: "Smart Alerts",
      description: "Get notified when you're approaching budget limits or when unusual spending occurs.",
      icon: "🔔"
    },
    {
      title: "Recurring Expenses",
      description: "Track and manage recurring bills and subscriptions to avoid surprises.",
      icon: "📅"
    },
    {
      title: "Account Aggregation",
      description: "Connect all your financial accounts to get a complete picture of your finances.",
      icon: "💳"
    },
    {
      title: "Financial Goals",
      description: "Set and track progress towards your financial goals, from saving for a vacation to retirement.",
      icon: "🎯"
    }
  ];
  
  export default function FeaturesSection() {
    return (
      <section id="features" className="bg-[#E8DAF9] h-screen text-white py-2 px-8 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <span className="bg-gray-800 px-6 py-1 rounded-full text-xl mb-2 inline-block">Features</span>
          <h2 className="text-4xl font-bold my-4 text-[#00234B]">
            Everything You Need to <span className="">Manage Your Money</span>
          </h2>
          <p className="text-gray-700 mb-12">
            Our platform offers a comprehensive suite of tools to help you take control of your finances.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 py-12 rounded-xl text-left hover:bg-gray-200 transition">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-black text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-md">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  