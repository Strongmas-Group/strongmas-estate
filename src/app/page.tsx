import Header from "@/components/custom/header";
import Hero from "@/components/custom/hero";
import Stats from "@/components/custom/stats";
import FeaturedProperties from "@/components/custom/featured-properties";
import Locations from "@/components/custom/locations";
import Footer from "@/components/custom/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <FeaturedProperties />
        <Locations />
      </main>
      <Footer />
    </div>
  );
}
