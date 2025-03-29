import { CiSquareCheck } from "react-icons/ci";
import Image from "next/image";

const FeatureSection = () => {
  return (
    <section className="">
      <div className="absolute z-0">
        <svg
          width="622"
          height="481"
          viewBox="0 0 622 481"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M622 240.5C622 107.676 514.324 0 381.5 0H-170V481H381.5C514.324 481 622 373.324 622 240.5V240.5Z"
            fill="#FAE0E1"
          />
        </svg>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-white px-6 py-12 z-20">
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
          {/* Feature List */}
          <div className="space-y-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 justify-center"
              >
                <span className=" h-full bg-red-200 p-1 rounded-sm m-auto ">
                  <CiSquareCheck className="text-black text-2xl" size={20} />
                </span>
                <p className="text-gray-700 text-base">
                  Upload high-resolution photos so you can visually track and
                  verify inventory and monitor condition.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
