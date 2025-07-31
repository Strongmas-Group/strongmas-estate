
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal";

const DiscoverProperties = () => {
  const { onOpen } = useModal();
  return (
    <section className="relative w-full h-[360px] flex items-center justify-center">
      <Image
        src="https://res.cloudinary.com/dbczzmftw/image/upload/v1753017068/hciwh8gaajm8y9zk5dnh.png"
        alt="Cityscape"
        fill
        className="absolute inset-0 object-cover brightness-50"
        data-ai-hint="city building sunset"
      />
      <div className="relative z-10 text-center text-white container mx-auto px-4">
        <p className="text-sm tracking-widest text-white/80 mb-2">
          Powered By STRONGMAS GROUP
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8 max-w-4xl mx-auto">
          DISCOVER THE FINEST MODERN PROPERTIES
        </h2>
        <Button onClick={() => onOpen('bookInspection')} size="lg" className="bg-[#EFC59D] hover:bg-accent/90 text-accent-foreground rounded-sm font-bold px-8 md:px-10 py-5 md:py-6">
          BOOK A TOUR
        </Button>
      </div>
    </section>
  );
};

export default DiscoverProperties;
