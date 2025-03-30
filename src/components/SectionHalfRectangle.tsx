import Image from "next/image";
import React from "react";

const data = [
  { text: "Upload high-resolution photos so you can visually track and verify inventory and monitor condition." },
  { text: "Upload high-resolution photos so you can visually track and verify inventory and monitor condition." },
  { text: "Upload high-resolution photos so you can visually track and verify inventory and monitor condition." },
  { text: "Upload high-resolution photos so you can visually track and verify inventory and monitor condition." },
];

const SectionHalfRectangle = () => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-between items-center min-h-screen px-6 py-10">
      {/* Right Section: Checklist */}
      <div className="w-full lg:w-1.75/3 p-30 space-y-6">
        {data.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Image
            src="/checkbox-icon.png"
            width={40}
            height={40}
            alt="checkbox"
            className="w-8 h-8 md:w-10 md:h-10"
            />
            <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Left Section with Enlarged Background Ellipse */}
      <div className="w-full lg:w-1.25/3 flex justify-center mb-6 lg:mb-0 relative">
        <div className="absolute inset-0 left-35 -top-20 bg-[url('/HalfRectangle.png')] bg-no-repeat bg-center bg-[length:150%] w-[80%] h-[129%]"></div>
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

export default SectionHalfRectangle;
