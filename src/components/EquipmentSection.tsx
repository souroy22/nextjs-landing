import React from "react";
import { CiSquareCheck } from "react-icons/ci";
const EquipmentSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-white px-6 py-12">
      {/* Left Side - Image with Background Bubble */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <svg
          className="absolute -z-10 w-[80%] h-auto max-w-lg"
          width="827"
          height="703"
          viewBox="0 0 827 703"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 392C0 175.505 175.504 0.000183105 392 0.000183105H456C672.496 0.000183105 848 175.505 848 392V703H0V392Z"
            fill="#FFF5F5"
          />
        </svg>
        <img
          src="/path-to-your-image.png"
          alt="Inventory Management"
          className="w-full max-w-lg rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - Text and Features */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Inventory Software for your industry.
        </h2>
        <p className="text-gray-700 mb-6 text-lg">
          You and your construction crew should be working—not searching for
          supplies or hunting down missing materials. With Sortly’s construction
          inventory software.
        </p>

        {/* Feature List */}
        <div className="space-y-4">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 bg-pink-200 p-4 rounded-lg"
            >
              <CiSquareCheck className="text-black text-2xl" />
              <p className="text-black font-medium">
                Upload high-resolution photos so you can visually track and
                verify inventory and monitor condition.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EquipmentSection;
