import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedContent from "@/components/FeaturedContent";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedContent />
      <StatsSection />
    </div>
  );
};

export default Index;
