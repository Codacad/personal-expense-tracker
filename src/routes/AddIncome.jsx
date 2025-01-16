import React, { useState } from "react";
import Savings from "/savings.svg";
const AddIncome = () => {
  const [income, setIncome] = useState({
    amount: "",
    source: "",
    category: "",
    date: "",
    description: "",
  });

  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncome((prevIncome) => ({
      ...prevIncome,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !income.amount ||
      !income.source ||
      !income.category ||
      !income.date ||
      !income.description
    ) {
      setError("Please fill in all fields");
      return;
    }

    // If you are ready to send data to server, you can use an API call here.
    console.log("Income submitted:", income);

    // Clear form after submission
    setIncome({
      amount: "",
      source: "",
      category: "",
      date: "",
      description: "",
    });

    setError("");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Column - Form */}
        <div className="p-8">
          <h2 className="text-3xl font-semibold text-teal-700 mb-6 text-center">
            Add Income
          </h2>

          {error && <div className="mb-4 text-red-500">{error}</div>}

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
                value={income.amount}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter amount"
                required
              />
            </div>

            <div>
              <label
                htmlFor="source"
                className="block text-sm font-medium text-gray-700"
              >
                Source
              </label>
              <input
                type="text"
                id="source"
                name="source"
                value={income.source}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter source of income"
                required
              />
            </div>

            <div className="mb-4">
      <label htmlFor="category" className="block text-sm font-medium text-gray-700">
        Category
      </label>
      <select
        id="category"
        name="category"
        value={income.category}
        onChange={handleChange}
        className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
        required
      >
        <option value="" disabled>Select a category</option>
        <option value="Salary">Salary</option>
        <option value="Freelance">Freelance</option>
        <option value="Business">Business</option>
        <option value="Investment">Investment</option>
        <option value="Rent">Rent</option>
        <option value="Dividends">Dividends</option>
        <option value="Capital Gains">Capital Gains</option>
        <option value="Savings Interest">Savings Interest</option>
        <option value="Pension">Pension</option>
        <option value="Government Benefits">Government Benefits</option>
        <option value="Inheritance">Inheritance</option>
        <option value="Lottery">Lottery</option>
        <option value="Insurance Payout">Insurance Payout</option>
        <option value="Gift">Gift</option>
        <option value="Grants">Grants</option>
        <option value="Scholarship">Scholarship</option>
        <option value="Crowdfunding">Crowdfunding</option>
        <option value="Royalties">Royalties</option>
        <option value="Consulting">Consulting</option>
        <option value="Stock Options">Stock Options</option>
        <option value="Part-time Job">Part-time Job</option>
        <option value="Bonuses">Bonuses</option>
        <option value="Referral Income">Referral Income</option>
        <option value="Affiliate Marketing">Affiliate Marketing</option>
        <option value="Tips">Tips</option>
        <option value="Rental Income">Rental Income</option>
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
                value={income.date}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                value={income.description}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter description"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition duration-300"
              >
                Add Income
              </button>
            </div>
          </form>
        </div>

        {/* Right Column - Illustration */}
        <div className="bg-teal-100 flex items-center justify-center">
          <img
            src={Savings}
            alt="Income Tracker Illustration"
            className="w-3/4 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AddIncome;
