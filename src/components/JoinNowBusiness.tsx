import React from "react";

const JoinNowBusiness = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-purple-200 px-4">
      <div className="max-w-6xl w-[85%] grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side Content */}
        <div className="text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[36px] font-bold text-gray-900 leading-tight">
            Transform Your <br />
            <span className="text-black underline decoration-red-500">
              Business
            </span>{" "}
            with Smart <br />
            Inventory Control
          </h1>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start space-x-2">
              <span className="text-red-500 font-bold">✔</span>
              <span>
                <strong>Real-time Analytics</strong> <br /> Get instant insights
                into your inventory performance
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-red-500 font-bold">✔</span>
              <span>
                <strong>Smart Predictions</strong> <br /> AI-powered forecasting
                for optimal stock levels
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-red-500 font-bold">✔</span>
              <span>
                <strong>Seamless Integration</strong> <br /> Works with your
                existing business tools
              </span>
            </li>
          </ul>
        </div>

        {/* Right Side Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center max-w-sm w-full">
          <div className="flex justify-center">
            <div className="bg-red-100 p-3 rounded-full">
              <span className="text-red-500 text-xl">🔔</span>
            </div>
          </div>
          <h2 className="text-lg sm:text-xl font-bold mt-4">Join 12M+ Users</h2>
          <p className="text-gray-600 text-sm mt-2">
            Start your journey to better inventory management
          </p>
          <button className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg font-bold hover:bg-red-600 transition">
            Join Now →
          </button>
          <div className="flex justify-between text-gray-500 text-xs mt-4">
            <span>🔒 Secure</span>
            <span>🕒 24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNowBusiness;
