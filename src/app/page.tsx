import BlogSection from "@/components/BlogSection";
import BusinessToolkitCard from "@/components/BusinessToolKitCard";
import CommonNavBar from "@/components/CommonNavBar";
import CommonSectionEllipse from "@/components/CommonSectionEllipse";
import CommonSectionRectangle from "@/components/CommonSectionRectangle";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InventorySection from "@/components/InventorySection";
import InventorySolutions from "@/components/InventorySolutionCard";
import JoinNowBusiness from "@/components/JoinNowBusiness";
import ManageToolkitCard from "@/components/ManageToolkitCard";
import SectionHalfRectangle from "@/components/SectionHalfRectangle";
import SectionHalfRrectangleLeft from "@/components/SectionHalfRectangleft";
import SectionHalfRectangleRight from "@/components/SectionHalfRectangleRight";
import Testimonials from "@/components/Testimonials";
import TextDisplay from "@/components/Textdisplay";

export default function Home() {
  return (
    <div className="bg-white text-black font-sans">
      <CommonNavBar/>
      <HeroSection />
      <TextDisplay 
        title="Visualize all your construction supplies and equipment on your Sortly dashboard"
        subtitle="Sortly helps businesses of all sizes track the inventory and assets that make their company run—saving them time, money, and stress."
      />
      <CommonSectionRectangle/>
      <TextDisplay 
        title="Visualize all your construction supplies and equipment on your Sortly dashboard"
        subtitle="Sortly helps businesses of all sizes track the inventory and assets that make their company run—saving them time, money, and stress."
      />
      <CommonSectionEllipse/>
      <SectionHalfRectangle/>
      <SectionHalfRrectangleLeft/>
      <SectionHalfRectangleRight/>
      <InventorySection/>
      <BlogSection />
      <JoinNowBusiness />
      {/* <ManageToolkitCard />
      <BusinessToolkitCard />
      <InventorySolutions />
      <FeatureSection />
      <Testimonials /> */}
      <Footer />
    </div>
  );
}
