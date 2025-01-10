import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/dashboard/DashboardCard";
const Dashboard = () => {
  const cards = [
    {
      icon: "📄",
      title: "Add Invoice",
      description: "Click to add invoice"
    },
    {
      icon: "💸",
      title: "Add Expense",
      description: "Click to add expense"
    },
    {
      icon: "👥",
      title: "Add Customer",
      description: "Click to add customer"
    },
    {
      icon: "📦",
      title: "Add Item",
      description: "Click to add item"
    }
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="ml-64 flex-1 p-8">
        <div className="text-sm text-gray-500 mb-8">Dashboard / Home</div>

        <h1 className="text-2xl font-bold mb-8">Dashboard Overview</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(card => (
            <DashboardCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
export default Dashboard;
