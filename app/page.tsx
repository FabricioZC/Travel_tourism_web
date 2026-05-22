import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import AttractionSection from "@/app/components/AttractionSection";
import MarqueeBanner from "@/app/components/MarqueeBanner";
import FeaturedSection from "@/app/components/FeaturedSection";
import HotspotSection from "@/app/components/HotspotSection";
import DestinationsSection from "@/app/components/DestinationsSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <Navbar />
      <HeroSection />
      <section className="relative z-10 -mt-10 bg-white rounded-t-[40px] md:rounded-t-[64px] min-h-[500px] px-4 sm:px-8 md:px-12 xl:px-20 py-16">
        <AttractionSection />
      </section>
      <MarqueeBanner />
      <FeaturedSection />
      <HotspotSection />
      <div className="mt-10 md:mt-20">
        <DestinationsSection />
      </div>
      <Footer />
    </div>
  );
}
