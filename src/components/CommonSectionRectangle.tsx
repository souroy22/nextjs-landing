import Image from "next/image";
import React from "react";

const data = [
  {
    text: "Upload high-resolution photos so you can visually track and verify inventory and monitor condition.",
  },
  {
    text: "Upload high-resolution photos so you can visually track and verify inventory and monitor condition.",
  },
  {
    text: "Upload high-resolution photos so you can visually track and verify inventory and monitor condition.",
  },
  {
    text: "Upload high-resolution photos so you can visually track and verify inventory and monitor condition.",
  },
];

const CommonSectionCard = () => {
  return (
    <div
      className="relative flex flex-col lg:flex-row justify-between items-center min-h-screen px-6 py-10
                 bg-[url('/Rectangle.png')] bg-cover bg-center bg-no-repeat"
    >
      {/* Left Section: Image */}
      <div className="w-full lg:w-2/3 flex justify-center mb-6 lg:mb-0">
        <Image
          src="/folder-image.png"
          width={600}
          height={400}
          alt="Folder Image"
          className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto rounded-lg shadow-md relative"
        />
      </div>

      {/* Right Section: Checklist */}
      <div className="w-full lg:w-1/3 p-6 space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-start space-x-3 space-y-10">
            <Image
            src="/checkbox-icon.png"
            width={50}
            height={50}
            alt="checkbox"
            />
            <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonSectionCard;
