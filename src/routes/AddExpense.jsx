import React, { useState } from 'react';

const AddExpense = () => {
  const [expense, setExpense] = useState({
    amount: '',
    category: '',
    date: '',
    description: '',
  });

  const [error, setError] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!expense.amount || !expense.category || !expense.date || !expense.description) {
      setError('Please fill in all fields');
      return;
    }

    // If you are ready to send data to server, you can use an API call here.
    console.log('Expense submitted:', expense);
    
    // Clear form after submission
    setExpense({
      amount: '',
      category: '',
      date: '',
      description: '',
    });

    setError('');
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Add Expense</h2>

      {error && <div className="mb-4 text-red-500">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter amount"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={expense.category}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter category"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={expense.date}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={expense.description}
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
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
