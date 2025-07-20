import Header from "@/components/custom/header";
import Hero from "@/components/custom/hero";
import Stats from "@/components/custom/stats";
import AboutUs from "@/components/custom/about-us";
import Locations from "@/components/custom/locations";
import Footer from "@/components/custom/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="w-screen -translate-x-1/2 left-1/2 relative">
          <Header />
          <Hero />
        </div>
        <div className="w-screen -translate-x-1/2 left-1/2 relative bg-white">
          <Stats />
        </div>
        <AboutUs />
        <Locations />
      </div>
       <div className="w-screen -translate-x-1/2 left-1/2 relative">
        <Footer />
      </div>
    </div>
  );
}
