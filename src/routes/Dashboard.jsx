import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Filler } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const Dashboard = () => {
  // Dummy Data for Chart
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Income",
        data: [400, 500, 300, 700, 800, 650, 900],
        borderColor: "rgba(34, 197, 94, 1)", // Green color
        backgroundColor: "rgba(34, 197, 94, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Expenses",
        data: [200, 300, 250, 400, 350, 500, 600],
        borderColor: "rgba(239, 68, 68, 1)", // Red color
        backgroundColor: "rgba(239, 68, 68, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Dummy Data for Cards
  const stats = [
    { title: "Total Income", value: "$5,200", icon: "fas fa-coins" },
    { title: "Total Expenses", value: "$2,300", icon: "fas fa-credit-card" },
    { title: "Net Savings", value: "$2,900", icon: "fas fa-piggy-bank" },
    { title: "Monthly Budget", value: "$3,000", icon: "fas fa-wallet" },
  ];

  // Dummy Data for Table
  const recentTransactions = [
    { date: "2025-01-10", category: "Food", amount: "$50", type: "Expense" },
    { date: "2025-01-12", category: "Salary", amount: "$2,000", type: "Income" },
    { date: "2025-01-13", category: "Utilities", amount: "$100", type: "Expense" },
    { date: "2025-01-15", category: "Freelance", amount: "$400", type: "Income" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Dashboard Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-teal-700">Dashboard</h1>
          <p className="text-gray-600">Your financial summary and analytics</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 bg-white shadow rounded-lg flex items-center justify-between">
              <div>
                <h4 className="text-xl font-semibold text-gray-800">{stat.title}</h4>
                <p className="text-2xl font-bold text-teal-600">{stat.value}</p>
              </div>
              <div className="text-teal-500 text-3xl">
                <i className={stat.icon}></i>
              </div>
            </div>
          ))}
        </div>

        {/* Income & Expenses Chart */}
        <div className="bg-white p-8 rounded-lg shadow mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Income vs Expenses (Last 7 Months)</h3>
          <Line data={chartData} />
        </div>

        {/* Recent Transactions Table */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Recent Transactions</h3>
          <table className="min-w-full table-auto text-gray-800">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Category</th>
                <th className="py-2 px-4 text-left">Amount</th>
                <th className="py-2 px-4 text-left">Type</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((transaction, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4">{transaction.date}</td>
                  <td className="py-2 px-4">{transaction.category}</td>
                  <td className="py-2 px-4 text-teal-600">{transaction.amount}</td>
                  <td className="py-2 px-4 text-red-500">{transaction.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
