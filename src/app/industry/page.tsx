import BlogSection from "@/components/BlogSection";
import CommonHeader from "@/components/CommonHeader";
import Footer from "@/components/Footer";
import JoinNowBusiness from "@/components/JoinNowBusiness";
import Navbar from "@/components/Navbar";
import SpecificIndustryCard from "@/components/SpecificIndustryCard";
import IndustryLayout from "@/Layouts/IndustryLayout";
import React from "react";

const Industry = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <CommonHeader />
      {/* Specific Industry Cards */}
      <div className="flex flex-col items-center">
        <div className="w-[90%] sm:w-[80%]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[32px] font-bold mb-2">
            Stay on top of your business’s valuable assets.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6">
            Browse Sortly’s asset tracking solutions
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {[23, 32, 23, 3, 2, 32].map((industry, index) => (
              <SpecificIndustryCard key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="min-h-screen flex w-full justify-center items-center">
        <BlogSection />
      </div>
      <JoinNowBusiness />
      <Footer />
    </div>
  );
};
Industry.Layout = IndustryLayout;
export default Industry;
