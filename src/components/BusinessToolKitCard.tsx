import React from "react";

const BusinessToolkit = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          A business toolkit for <br /> every business
        </h2>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="relative p-5 rounded-xl shadow-md bg-white border border-gray-200 flex flex-col space-y-2 transition duration-300 hover:shadow-lg"
            >
              {/* Gradient Border Effect */}
              <div
                className="absolute inset-0 rounded-xl border-2 opacity-100"
                style={{
                  borderImageSource:
                    index % 2 === 0
                      ? "linear-gradient(to right, #60d394, #8ec5fc)"
                      : "linear-gradient(to right, #8ec5fc, #60d394)",
                  borderImageSlice: 1,
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-gray-900">Antiques</h3>
                <p className="text-gray-700 text-sm">
                  Track, organize and manage all your business's inventory
                </p>
                <a
                  href="#"
                  className="text-teal-500 font-semibold mt-2 inline-flex items-center"
                >
                  Antiques Inventory Management <span className="ml-1">➤</span>
                </a>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default BusinessToolkit;
