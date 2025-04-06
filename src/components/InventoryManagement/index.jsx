import React from "react";

const InventoryManagement = () => {
  return (
    <section className="pt-20 text-center bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          One platform <span className="text-red-500">SIMPLE</span> inventory
          management and accounts software
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg text-gray-700 font-medium italic">
          “So simple, it just works.”
        </p>
        <p className="mt-1 text-lg font-semibold text-gray-900">
          You read it right, <span className="text-red-500">SIMPLE</span>.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-5 py-2 text-sm bg-red-100 text-red-500 font-semibold rounded-full border border-red-500 hover:bg-red-500 hover:text-white transition">
            See All Features
          </button>
          <button className="px-5 py-2 text-sm bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition">
            Try Sortly Free
          </button>
        </div>

        {/* Feature Icons */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-6 gap-6 justify-center items-start">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} label={feature.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, label }) => (
  <div className="flex flex-col items-center bg-white rounded-xl p-4 hover:shadow-lg transition">
    <img src={icon} alt={label} className="rounded-lg mb-2" />
    <p className="text-sm font-medium text-gray-700">{label}</p>
  </div>
);

// Feature Data
const features = [
  { icon: "/icons/purchase-orders.png", label: "Purchase Order" },
  { icon: "/icons/invoicing.png", label: "Invoicing" },
  { icon: "/icons/challan.png", label: "Challan" },
  { icon: "/icons/reports.png", label: "Reports" },
  { icon: "/icons/items.png", label: "Items" },
  { icon: "/icons/ledger.png", label: "Ledger" },
];

export default InventoryManagement;
