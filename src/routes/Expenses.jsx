import React from "react";
import { Link } from "react-router-dom";

const Expenses = () => {
  // Dummy Data for Expense Entries
  const expenseEntries = [
    {
      date: "2025-01-10",
      title: "Groceries",
      amount: "$200",
      category: "Food",
      description: "Weekly grocery shopping",
    },
    {
      date: "2025-01-12",
      title: "Electricity Bill",
      amount: "$120",
      category: "Utilities",
      description: "Monthly electricity bill",
    },
    {
      date: "2025-01-14",
      title: "Gym Membership",
      amount: "$50",
      category: "Fitness",
      description: "Monthly gym subscription",
    },
    {
      date: "2025-01-16",
      title: "Dining Out",
      amount: "$80",
      category: "Entertainment",
      description: "Dinner with friends",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-teal-700">Expense Tracker</h1>
          <Link
            to={"/expense/add"}
            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow hover:bg-teal-700 transition duration-300"
          >
            Add Expense
          </Link>
        </div>

        {/* Expense Entries Table */}
        <div className="bg-white p-8 rounded-lg shadow mb-16 overflow-x-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Expense Entries
          </h3>
          <table className="min-w-full table-auto text-gray-800">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Title</th>
                <th className="py-2 px-4 text-left">Amount</th>
                <th className="py-2 px-4 text-left">Category</th>
                <th className="py-2 px-4 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {expenseEntries.map((expense, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4">{expense.date}</td>
                  <td className="py-2 px-4">{expense.title}</td>
                  <td className="py-2 px-4 text-red-600">{expense.amount}</td>
                  <td className="py-2 px-4">{expense.category}</td>
                  <td className="py-2 px-4">{expense.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Additional Content (Optional) */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Expense Summary
          </h3>
          <p className="text-lg text-gray-600">
            Track your spending effectively. The total expenses can be
            dynamically calculated from the entries above. See where your money
            goes and manage your budget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
