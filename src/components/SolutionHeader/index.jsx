import React from "react";
import { Timer, Zap, Brain, Keyboard, ArrowRight } from "lucide-react"; // optional Lucide icons
import Image from "next/image";
// import Inventorybanner from ""

const SolutionHeader = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* TEXT LEFT */}
          <div className="order-2 lg:order-1 px-8">
            <div className="space-y-4">
              {/* <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Zap className="text-blue-500 w-6 h-6" />
                </div>
                
              </div> */}
              <div className="heading-text">
                    <h2 className="text-[64px] w-[495px] leading-20 text-black font-bold mb-4">Sortly Solutions</h2>
                    <p className="text-[32px]  text-[#666666] font-normal">No matter what you need to track,<br/> Sortky has you covered.</p>
                </div>

            </div>
            <div className="mt-6 flex justify-start gap-4">
          <button className="px-5 py-2 text-sm bg-red-100 text-red-500 font-semibold rounded-full border border-red-500 hover:bg-red-500 hover:text-white transition">
            See All Features
          </button>
          <button className="px-5 py-2 text-sm bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition">
            Try Sortly Free
          </button>
        </div>
            
          </div>

          {/* IMAGE RIGHT */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-xl"></div>
            <img
              src="/icons/inventory-banner.svg"
              alt="Productivity Interface"
              className="relative rounded-xl shadow-2xl"
            />
            {/* <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Timer className="text-green-500 w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Response Time</div>
                  <div className="text-xl font-bold text-green-500">&lt; 90ms</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHeader;
