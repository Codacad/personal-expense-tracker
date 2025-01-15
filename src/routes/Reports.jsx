import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Reports = () => {
  // Dummy Data for Chart (Income vs Expense)
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Income',
        data: [4000, 3500, 4200, 3900, 4500, 4800],
        fill: false,
        borderColor: '#4caf50',
        tension: 0.1,
      },
      {
        label: 'Expenses',
        data: [2800, 2300, 2900, 2700, 3100, 3300],
        fill: false,
        borderColor: '#f44336',
        tension: 0.1,
      },
    ],
  };

  // Dummy Data for Financial Summary
  const summaryData = [
    { title: 'Total Income', value: '$25,000' },
    { title: 'Total Expenses', value: '$18,000' },
    { title: 'Net Savings', value: '$7,000' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-teal-700">Financial Reports</h1>
          <p className="text-lg text-gray-600">Track your income, expenses, and net savings</p>
        </div>

        {/* Financial Summary */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {summaryData.map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-teal-600">{item.title}</h3>
              <p className="text-xl font-bold text-gray-800 mt-4">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Income vs Expense Chart */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Income vs Expenses (Last 6 Months)</h3>
          <div className="w-full h-72">
            <Line data={chartData} />
          </div>
        </div>

        {/* Detailed Financial Breakdown */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Detailed Breakdown</h3>
          <div className="space-y-6">
            <div className="flex justify-between items-center p-6 border-b">
              <h4 className="text-xl font-semibold text-gray-700">Category: Groceries</h4>
              <p className="text-lg text-gray-600">$200 (Expense)</p>
            </div>
            <div className="flex justify-between items-center p-6 border-b">
              <h4 className="text-xl font-semibold text-gray-700">Category: Salary</h4>
              <p className="text-lg text-gray-600">$4000 (Income)</p>
            </div>
            <div className="flex justify-between items-center p-6 border-b">
              <h4 className="text-xl font-semibold text-gray-700">Category: Utilities</h4>
              <p className="text-lg text-gray-600">$120 (Expense)</p>
            </div>
            <div className="flex justify-between items-center p-6 border-b">
              <h4 className="text-xl font-semibold text-gray-700">Category: Freelance Work</h4>
              <p className="text-lg text-gray-600">$1500 (Income)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
