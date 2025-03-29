import BlogSection from "@/components/BlogSection";
import CommonHeader from "@/components/CommonHeader";
import EquipmentSection from "@/components/EquipmentSection";
import Footer from "@/components/Footer";
import JoinNowBusiness from "@/components/JoinNowBusiness";
import Navbar from "@/components/Navbar";
import SpecificIndustryCard from "@/components/SpecificIndustryCard";
import SpecificSolutionCard from "@/components/SpecificSolutionCard";
import IndustryLayout from "@/Layouts/IndustryLayout";
import React from "react";

const Solution = () => {
  const industries = new Array(12).fill({
    title: "Antiques",
    description: "Track, organize and manage all your business's inventory",
    linkText: "Antiques Inventory Management",
  });

  return (
    <div>
      <Navbar />
      <CommonHeader />
      <EquipmentSection />
      {/* Specific Industry Cards */}
      <div className="p-6 md:p-12 bg-white flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          A business toolkit for every business
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {industries.map((solution: any, index: number) => (
            <SpecificSolutionCard solution={solution} key={index} />
          ))}
        </div>
      </div>

      <div className="flex w-full justify-center">
        <BlogSection />
      </div>
      <JoinNowBusiness />
      <Footer />
    </div>
  );
};
Solution.Layout = IndustryLayout;
export default Solution;
