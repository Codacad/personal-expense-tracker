import React from "react";
import { Link } from "react-router-dom";

const Income = () => {
  // Dummy Data for Income Entries
  const incomeEntries = [
    { date: "2025-01-10", source: "Freelance Work", amount: "$1,200", category: "Freelance", description: "Web development project" },
    { date: "2025-01-12", source: "Salary", amount: "$2,000", category: "Job", description: "Monthly salary" },
    { date: "2025-01-15", source: "Online Sales", amount: "$500", category: "Sales", description: "E-commerce product sales" },
    { date: "2025-01-18", source: "Investment", amount: "$300", category: "Investment", description: "Stock market returns" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-teal-700">Income Tracker</h1>
          <Link
          to={"/income/add"}
            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow hover:bg-teal-700 transition duration-300"
          >
            Add Income
          </Link>
        </div>

        {/* Income Entries Table */}
        <div className="bg-white p-8 rounded-lg shadow mb-16 overflow-x-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Income Entries</h3>
          <table className="min-w-full table-auto table-row text-gray-800">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Source</th>
                <th className="py-2 px-4 text-left">Amount</th>
                <th className="py-2 px-4 text-left">Category</th>
                <th className="py-2 px-4 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {incomeEntries.map((income, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4">{income.date}</td>
                  <td className="py-2 px-4">{income.source}</td>
                  <td className="py-2 px-4 text-teal-600">{income.amount}</td>
                  <td className="py-2 px-4">{income.category}</td>
                  <td className="py-2 px-4">{income.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Additional Content (Optional) */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Income Summary</h3>
          <p className="text-lg text-gray-600">Track your earnings and analyze income sources easily. The total income can be dynamically calculated from the entries above.</p>
        </div>
      </div>
    </div>
  );
};

export default Income;
