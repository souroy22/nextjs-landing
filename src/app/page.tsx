import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="bg-white text-black font-sans">
    <HeroSection />
    <FeatureSection />
    <Testimonials />
    <Footer />
  </div>
  );
}
