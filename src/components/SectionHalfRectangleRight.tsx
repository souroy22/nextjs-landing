import Image from "next/image";
import React from "react";

const data = [
  { text: "Easily upload your existing inventory list into Sortly." },
  { text: "Organize inventory folders by location, type, and more." },
  { text: "Add critical item details with custom fields." },
];

const SectionHalfRectangleRight = () => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-between items-center min-h-screen px-6 py-16 lg:py-24 bg-white">
      {/* Left Section: Text & Checklist */}
      <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6 px-6 lg:px-12">
        {/* Title */}
        <h2 className="text-red-500 font-semibold text-lg flex items-center">
          <Image src="/checkbox-icon.png" width={24} height={24} alt="Check" className="mr-2" />
          Organizing
        </h2>

        {/* Heading */}
        <h1 className="text-gray-900 text-2xl md:text-4xl font-bold leading-tight">
          Organize and automate your inventory at the touch of a button.
        </h1>

        {/* Checklist Items */}
        <div className="space-y-5">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Image src="/checkbox-icon.png" width={28} height={28} alt="checkbox" />
              <p className="text-gray-700 text-lg">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-6">
          <button className="bg-red-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition duration-300">
            Try Sortly Free
          </button>
          <button className="bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition duration-300">
            See All Features
          </button>
        </div>
      </div>

     {/* Left Section with Enlarged Background Ellipse */}
     <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0 relative">
        <div className="absolute inset-0 left-18 top-20 bg-[url('/HalfRectangle.png')] bg-no-repeat bg-center bg-[length:100%] w-[95%] h-[129%]"></div>
        <Image
          src="/folder-image.png"
          width={600}
          height={400}
          alt="Folder Image"
          className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto rounded-lg shadow-md relative"
        />
      </div>
    </div>
  );
};

export default SectionHalfRectangleRight;
