import React from "react";
import Finance from "../assets/images/finance.svg";
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Take Charge of Your Finances
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Unlock the power to track, analyze, and optimize your income and
              expenses. Empower yourself to achieve financial freedom with our
              smart tools and insights.
            </p>
            <div className="flex space-x-4">
              <a
                href="/dashboard"
                className="px-6 py-3 bg-gradient-to-tr from-teal-500 to-teal-700 text-white font-semibold rounded-lg shadow hover:bg-teal-400 transition duration-300"
              >
                Get Started
              </a>
              <a
                href="/about"
                className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow hover:bg-gray-600 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center">
            <img
              src={Finance}
              alt="Finance Tracking Illustration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Secondary Section: Features */}
        <div className="mt-16 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mb-4">
              <i className="fas fa-wallet text-teal-500 text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Track Expenses</h3>
            <p className="text-gray-400">
              Monitor your spending habits effortlessly with categorized expense
              tracking.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4">
              <i className="fas fa-chart-line text-teal-500 text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Analyze Income</h3>
            <p className="text-gray-400">
              Gain insights into your earnings and identify opportunities to
              save.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4">
              <i className="fas fa-piggy-bank text-teal-500 text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Budget Smarter</h3>
            <p className="text-gray-400">
              Plan ahead and allocate your funds wisely to achieve your
              financial goals.
            </p>
          </div>
        </div>
      </section>
    
      <section className="py-20 bg-gray-200 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-user-plus text-3xl"></i>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-teal-700 mb-4">
                Sign Up
              </h3>
              <p className="text-gray-600 mb-4">
                Create an account in just a few steps. We prioritize security to
                ensure your data is safe and protected.
              </p>
              <a
                href="/register"
                className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-300"
              >
                Get Started
              </a>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-cogs text-3xl"></i>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Set Your Budget
              </h3>
              <p className="text-gray-600 mb-4">
                Set up your monthly budget by defining income sources, expenses,
                and savings goals. The app helps you stay on track.
              </p>
              <a
                href="/dashboard"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Track Budget
              </a>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-chart-line text-3xl"></i>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-teal-700 mb-4">
                Track & Analyze
              </h3>
              <p className="text-gray-600 mb-4">
                Monitor your spending and income patterns. Use detailed reports
                and charts to analyze your financial health.
              </p>
              <a
                href="/reports"
                className="inline-block px-6 py-3 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition duration-300"
              >
                View Reports
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Heading */}
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
              <div className="mb-4 text-green-500 text-5xl">
                <i className="fas fa-money-bill-wave"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Expense Tracking</h3>
              <p className="text-gray-600 mb-4">
                Easily track your daily expenses and stay on top of your
                financial health with advanced tools and analytics.
              </p>
              <a
                href="/expense-tracking"
                className="text-teal-500 hover:text-teal-600 font-semibold transition duration-300"
              >
                Learn More &rarr;
              </a>
            </div>

            <div className="p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
              <div className="mb-4 text-blue-500 text-5xl">
                <i className="fas fa-coins"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Income Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Monitor your income streams and analyze your earnings with
                intuitive dashboards and real-time data.
              </p>
              <a
                href="/income-monitoring"
                className="text-teal-500 hover:text-teal-600 font-semibold transition duration-300"
              >
                Learn More &rarr;
              </a>
            </div>

            <div className="p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
              <div className="mb-4 text-teal-500 text-5xl">
                <i className="fas fa-chart-pie"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Detailed Reports</h3>
              <p className="text-gray-600 mb-4">
                Generate comprehensive financial reports to gain deep insights
                into your finances and make smarter decisions.
              </p>
              <a
                href="/detailed-reports"
                className="text-teal-500 hover:text-teal-600 font-semibold transition duration-300"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>

          {/* Testimonials and Call to Action */}
          <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
              {/* Call to Action */}
              <div className="mt-16 bg-gradient-to-r from-teal-600 to-blue-500 text-white p-10 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">
                  Join Us Today
                </h3>
                <p className="text-lg text-center mb-6">
                  Become part of a growing community that’s taking charge of
                  their financial future. Sign up now and get started for free!
                </p>
                <div className="text-center">
                  <a
                    href="/register"
                    className="inline-block px-6 py-3 bg-white text-teal-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Affordable Pricing Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white text-center rounded-lg shadow text-gray-800">
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <p className="text-lg mb-4">$5/month</p>
              <ul className="mb-6">
                <li>Track Expenses</li>
                <li>Monitor Income</li>
                <li>Basic Reports</li>
              </ul>
              <a
                href="/signup"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
              >
                Choose Plan
              </a>
            </div>
            <div className="p-6 bg-white text-center rounded-lg shadow text-gray-800">
              <h3 className="text-2xl font-bold mb-4">Standard</h3>
              <p className="text-lg mb-4">$10/month</p>
              <ul className="mb-6">
                <li>Everything in Basic</li>
                <li>Custom Categories</li>
                <li>Advanced Reports</li>
              </ul>
              <a
                href="/signup"
                className="px-6 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition duration-300"
              >
                Choose Plan
              </a>
            </div>
            <div className="p-6 bg-white text-center rounded-lg shadow text-gray-800">
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <p className="text-lg mb-4">$20/month</p>
              <ul className="mb-6">
                <li>Everything in Standard</li>
                <li>Priority Support</li>
                <li>Unlimited Reports</li>
              </ul>
              <a
                href="/signup"
                className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-300"
              >
                Choose Plan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100 text-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Start Managing Your Finances Today!
        </h2>
        <p className="text-lg mb-8">
          Sign up now and take control of your financial journey.
        </p>
        <a
          href="/signup"
          className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-gray-100 font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300"
        >
          Get Started
        </a>
      </section>
      <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            What Our Users Are Saying
          </h2>
          <div className="flex flex-wrap justify-center gap-16">
            {/* Testimonial 1 */}
            <div className="w-full md:w-1/3 p-8 bg-white text-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="flex justify-center mb-6">
                <img
                  src="https://i.pravatar.cc/150?img=3"
                  alt="User Avatar"
                  className="w-20 h-20 rounded-full border-4 border-teal-500"
                />
              </div>
              <p className="text-lg italic mb-4 text-center">
                "This app has revolutionized how I manage my money. I can easily
                track both my income and expenses, and the reports help me plan
                better."
              </p>
              <div className="flex justify-center text-center">
                <div>
                  <h4 className="font-semibold text-xl">Alex Johnson</h4>
                  <p className="text-sm text-gray-500">Freelancer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="w-full md:w-1/3 p-8 bg-white text-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="flex justify-center mb-6">
                <img
                  src="https://i.pravatar.cc/150?img=4"
                  alt="User Avatar"
                  className="w-20 h-20 rounded-full border-4 border-teal-500"
                />
              </div>
              <p className="text-lg italic mb-4 text-center">
                "The detailed analytics and reports are exactly what I needed.
                This app helps me stay on top of my finances and save more
                effectively."
              </p>
              <div className="flex justify-center text-center">
                <div>
                  <h4 className="font-semibold text-xl">Samantha Lee</h4>
                  <p className="text-sm text-gray-500">Entrepreneur</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="w-full md:w-1/3 p-8 bg-white text-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="flex justify-center mb-6">
                <img
                  src="https://i.pravatar.cc/150?img=5"
                  alt="User Avatar"
                  className="w-20 h-20 rounded-full border-4 border-teal-500"
                />
              </div>
              <p className="text-lg italic mb-4 text-center">
                "I never realized how much I was overspending until I started
                using this app. Now I have full control over my budget."
              </p>
              <div className="flex justify-center text-center">
                <div>
                  <h4 className="font-semibold text-xl">Michael Brown</h4>
                  <p className="text-sm text-gray-500">Freelancer</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="/testimonials"
              className="px-8 py-4 bg-teal-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-teal-500 transition duration-300"
            >
              
              See More Testimonials
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-teal-700">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {/* Question 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                How do I get started with the app?
              </h3>
              <p className="text-gray-600">
                Simply sign up for an account and follow the steps to set up
                your financial details. You can start tracking your income and
                expenses right away!
              </p>
            </div>

            {/* Question 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                Is my data secure?
              </h3>
              <p className="text-gray-600">
                Yes, your data is encrypted using the latest security protocols.
                We prioritize your privacy and ensure that your information
                remains secure.
              </p>
            </div>

            {/* Question 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                Can I track multiple accounts or currencies?
              </h3>
              <p className="text-gray-600">
                Yes, you can track multiple accounts and manage different
                currencies. The app supports a wide range of financial
                institutions and currency options.
              </p>
            </div>

            {/* Question 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                How do I export my financial reports?
              </h3>
              <p className="text-gray-600">
                You can export your financial reports in CSV or PDF format.
                Simply go to the reports section and select the export option.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
