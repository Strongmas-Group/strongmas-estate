import Header from "@/components/custom/header";
import Hero from "@/components/custom/hero";
import Stats from "@/components/custom/stats";
import FeaturedProperties from "@/components/custom/featured-properties";
import AboutUs from "@/components/custom/about-us";
import Locations from "@/components/custom/locations";
import Footer from "@/components/custom/footer";
import DiscoverProperties from "@/components/custom/discover-properties";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedProperties />
        <AboutUs />
        <Locations />
        <div className="w-full bg-white flex items-center justify-center">
          <Stats />
        </div>
        <DiscoverProperties />
      </main>
      <Footer />
    </div>
  );
}

