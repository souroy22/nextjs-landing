import { ArrowRight, ChevronRight } from "lucide-react";
import React from "react";

const solutions = [
    { icon: "/icons/solutions.svg", title: "Antiques", longdesc:"Track,organize and manage all your business’s inventory", desc: "Antiques Inventory Management" },
    { icon: "/icons/solutions.svg", title: "Antiques", longdesc:"Track,organize and manage all your business’s inventory", desc: "Antiques Inventory Management" },
    { icon: "/icons/solutions.svg", title: "Antiques", longdesc:"Track,organize and manage all your business’s inventory", desc: "Antiques Inventory Management" },
    { icon: "/icons/solutions.svg", title: "Antiques", longdesc:"Track,organize and manage all your business’s inventory", desc: "Antiques Inventory Management" },
    { icon: "/icons/solutions.svg", title: "Antiques", longdesc:"Track,organize and manage all your business’s inventory", desc: "Antiques Inventory Management" },
    { icon: "/icons/solutions.svg", title: "Antiques", longdesc:"Track,organize and manage all your business’s inventory", desc: "Antiques Inventory Management" },
    { icon: "/icons/solutions.svg", title: "Antiques", longdesc:"Track,organize and manage all your business’s inventory", desc: "Antiques Inventory Management" },
    { icon: "/icons/solutions.svg", title: "Antiques", longdesc:"Track,organize and manage all your business’s inventory", desc: "Antiques Inventory Management" },
    { icon: "/icons/solutions.svg", title: "Antiques", longdesc:"Track,organize and manage all your business’s inventory", desc: "Antiques Inventory Management" },
    { icon: "/icons/solutions.svg", title: "Antiques", longdesc:"Track,organize and manage all your business’s inventory", desc: "Antiques Inventory Management" },
    { icon: "/icons/solutions.svg", title: "Antiques", longdesc:"Track,organize and manage all your business’s inventory", desc: "Antiques Inventory Management" },
    { icon: "/icons/solutions.svg", title: "Antiques", longdesc:"Track,organize and manage all your business’s inventory", desc: "Antiques Inventory Management" },
    { icon: "/icons/solutions.svg", title: "Antiques", longdesc:"Track,organize and manage all your business’s inventory", desc: "Antiques Inventory Management" },
    { icon: "/icons/solutions.svg", title: "Antiques", longdesc:"Track,organize and manage all your business’s inventory", desc: "Antiques Inventory Management" },
    { icon: "/icons/solutions.svg", title: "Antiques", longdesc:"Track,organize and manage all your business’s inventory", desc: "Antiques Inventory Management" },
  ];

const BussinessToolkit = () => {
  return (
    <section id="solutions" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-52">
        <div className="text-left mb-16">
          <h2 className="text-4xl font-bold mb-1 text-black">
          A business toolkit for <br/> every business
          </h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="group border-t-6 border-[#DAF9BA]  p-6 rounded-2xl transition-all hover:shadow-md hover:-translate-y-1 mb-4"
            >
              <div className="w-18 h-18 mb-1">
                <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 font-medium">{item.longdesc}</p>
              <div className="flex items-center justify-between text-[#E12B3E] text-sm font-normal">
                
                <p>{item.desc}</p>
                <ChevronRight className="w-6 h-6 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BussinessToolkit;
