import BlogSection from "@/components/BlogSection";
import BusinessToolkitCard from "@/components/BusinessToolKitCard";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InventorySolutions from "@/components/InventorySolutionCard";
import JoinNowBusiness from "@/components/JoinNowBusiness";
import ManageToolkitCard from "@/components/ManageToolkitCard";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="bg-white text-black font-sans">
      <HeroSection />
      <BlogSection />
      <JoinNowBusiness />
      <ManageToolkitCard />
      <BusinessToolkitCard />
      <InventorySolutions />
      <FeatureSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
