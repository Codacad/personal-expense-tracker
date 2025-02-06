import React, { useState } from "react";
import Payment from "/payment.svg";
import { useAddExpenseMutation } from "../state/apis/expensesApi";
const AddExpense = () => {
  const [addExpense] = useAddExpenseMutation();
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
    description: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await addExpense(expense);
      if (response.error) {
        setError(response.error.data.message);
        setSuccess("");
      }
      if (response.data) {
        setSuccess(response.data.message);
        setError("");
        setExpense({
          title: "",
          amount: "",
          category: "",
          date: "",
          description: "",
        });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

    // If you are ready to send data to server, you can use an API call here.
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      {loading && (
        <div className="spinner-wrapper">
          <div className="spinner"></div>
        </div>
      )}
      <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Column - Form */}
        <div className="p-8">
          <h2 className="text-3xl font-semibold text-red-700 mb-6 text-center">
            Add Expense
          </h2>

          {error && <div className="mb-4 text-red-500">{error}</div>}
          {success && <div className="mb-4 text-green-500">{success}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Amount
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={expense.amount}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter amount"
                required
              />
            </div>

            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={expense.title}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter title"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={expense.category}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              >
                <option value="" disabled>
                  Select an expense category
                </option>
                <option value="Rent">Rent</option>
                <option value="Utilities">Utilities</option>
                <option value="Groceries">Groceries</option>
                <option value="Transportation">Transportation</option>
                <option value="Insurance">Insurance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Debt Repayment">Debt Repayment</option>
                <option value="Education">Education</option>
                <option value="Childcare">Childcare</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Dining Out">Dining Out</option>
                <option value="Travel">Travel</option>
                <option value="Clothing">Clothing</option>
                <option value="Personal Care">Personal Care</option>
                <option value="Subscriptions">Subscriptions</option>
                <option value="Gifts">Gifts</option>
                <option value="Charity">Charity</option>
                <option value="Home Maintenance">Home Maintenance</option>
                <option value="Office Supplies">Office Supplies</option>
                <option value="Marketing">Marketing</option>
                <option value="Legal Fees">Legal Fees</option>
                <option value="Taxes">Taxes</option>
                <option value="Investments">Investments</option>
                <option value="Savings">Savings</option>
                <option value="Loan Payments">Loan Payments</option>
                <option value="Technology">Technology</option>
                <option value="Fitness">Fitness</option>
                <option value="Pets">Pets</option>
                <option value="Miscellaneous">Miscellaneous</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={expense.date}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={expense.description}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter description"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                disabled={loading}
                type="submit"
                className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
              >
                {loading ? "Adding Expense..." : "Add Expense"}
              </button>
            </div>
          </form>
        </div>

        {/* Right Column - Illustration */}
        <div className="bg-red-100 flex items-center justify-center">
          <img
            src={Payment}
            alt="Expense Tracker Illustration"
            className="w-3/4 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
