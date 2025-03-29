import React from "react";

const CommonHeader = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center px-6 py-12 bg-white">
      {/* Background Bubble */}
      <div className="absolute top-0 right-0 w-full h-full">
        {/* <svg
          width="827"
          height="703"
          viewBox="0 0 827 703"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 392C0 175.505 175.504 0.000183105 392 0.000183105H456C672.496 0.000183105 848 175.505 848 392V703H0V392Z"
            fill="#FFF5F5"
          />
        </svg> */}
      </div>

      {/* Left Content */}
      <div className="max-w-lg text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Inventory Software for your industry.
        </h1>
        <p className="text-gray-700 mt-4 text-lg">
          You and your construction crew should be working—not searching for
          supplies or hunting down missing materials. With Sortly’s construction
          inventory software.
        </p>
        <div className="mt-6 flex space-x-4">
          <button className="bg-red-100 text-red-500 px-4 py-2 rounded-lg font-semibold">
            See All Features
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
            Try Sortly Free
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-8 lg:mt-0 lg:ml-12 max-w-2xl w-full">
        <img
          src="/path-to-your-image.png"
          alt="Software Dashboard"
          className="w-full h-auto shadow-lg rounded-lg"
        />
      </div>
    </div>
  );
};

export default CommonHeader;
