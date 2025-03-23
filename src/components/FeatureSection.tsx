import { CiSquareCheck } from "react-icons/ci";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <>
      <section className="relative text-center py-16 px-6 bg-pink-100">
        <h2 className="text-2xl md:text-4xl font-bold text-black">
          Visualize all your construction supplies and equipment on your Sortly
          dashboard
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Sortly helps businesses of all sizes track the inventory and assets
          that make their company run—saving them time, money, and stress.
        </p>
        <div className="mt-8 flex flex-col md:flex-row items-center md:items-start justify-center gap-8 relative">
          <div className="relative w-full md:w-1/2">
            <img
              src="/dashboard-image.png"
              alt="Dashboard"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <ul className="w-full md:w-1/2 text-left space-y-4">
            {Array(4).fill(
              <li className="flex items-start space-x-3 bg-pink-200 p-3 rounded-lg">
                <CiSquareCheck className="text-black text-2xl" />
                <p className="text-black font-medium">
                  Upload high-resolution photos so you can visually track and
                  verify inventory and monitor condition.
                </p>
              </li>
            )}
          </ul>
        </div>
      </section>
      <div className="bg-white min-h-screen py-10 flex flex-col items-center px-5 md:px-20">
      {/* Header Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Visualize all your construction supplies and equipment on your <span className="text-gray-700 font-semibold">Sortly dashboard</span>
        </h1>
        <p className="text-gray-600 mt-3">
          Sortly helps businesses of all sizes track the inventory and assets that make their company run - saving them time, money, and stress.
        </p>
      </div>
      
      {/* Main Content */}
      <div className="mt-10 grid md:grid-cols-2 gap-10 items-center w-full max-w-4xl">
        {/* Image Section */}
        <div className="relative w-full max-w-md">
          <div className="bg-red-100 rounded-lg p-4 shadow-md relative">
            <Image 
              src="/dashboard-image.png" 
              alt="Sortly Dashboard" 
              width={470} 
              height={409} 
              className="rounded-lg"
            />
          </div>
        </div>
        
        {/* Features List */}
        <div className="space-y-5">
          {Array(4).fill(0).map((_, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Image 
              src="/checkbox.svg" 
              alt="Sortly Dashboard" 
              width={20} 
              height={20} 
              className="rounded-lg"
            />
              <p className="text-gray-700 text-lg">
                Upload high-resolution photos so you can visually track and verify inventory and monitor condition.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default FeatureSection;
