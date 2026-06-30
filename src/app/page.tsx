import Header from "@/components/custom/header";
import Hero from "@/components/custom/hero";
import AurumScroll from "@/components/custom/aurum-scroll";
import PropertySearchFilter from "@/components/custom/property-search-filter";
import Stats from "@/components/custom/stats";
import FeaturedProperties from "@/components/custom/featured-properties";
import AboutUs from "@/components/custom/about-us";
import Locations from "@/components/custom/locations";
import Footer from "@/components/custom/footer";
import DiscoverProperties from "@/components/custom/discover-properties";
import FeaturedPopup from "@/components/custom/featured-popup";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-clip">
      <Header />
      <main className="flex-grow">
        {/* Parallax group: Elysian pins, Aurum scrolls over, search bar
            stays pinned to the viewport bottom across both. */}
        <div className="relative">
          <Hero />
          <AurumScroll />
          {/* Sticky search bar — Aurum video shows through its translucent
              background as you scroll past the hero. */}
          <div className="sticky bottom-2 z-20 -mt-24">
            <PropertySearchFilter />
          </div>
        </div>
        <FeaturedProperties />
        <AboutUs />
        <Locations />
        <div className="w-full bg-white flex items-center justify-center">
          <Stats />
        </div>
        <DiscoverProperties />
      </main>
      <Footer />
      <FeaturedPopup />
    </div>
  );
}
