import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bed, Bath, Car } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Azure Villa",
    location: "Malibu, California",
    price: "4,500,000",
    image: "https://placehold.co/600x400",
    hint: "luxury villa",
    beds: 5,
    baths: 6,
    parking: 3,
    badge: "Featured",
  },
  {
    id: 2,
    title: "The Metropolitan",
    location: "Manhattan, New York",
    price: "2,800,000",
    image: "https://placehold.co/600x400",
    hint: "city penthouse",
    beds: 3,
    baths: 3,
    parking: 1,
    badge: "New",
  },
  {
    id: 3,
    title: "Evergreen Estate",
    location: "Aspen, Colorado",
    price: "6,200,000",
    image: "https://placehold.co/600x400",
    hint: "mountain estate",
    beds: 6,
    baths: 7,
    parking: 4,
    badge: "Hot Deal",
  },
];

const FeaturedProperties = () => {
  return (
    <section id="featured" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">
            Featured Properties
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked selection of our finest properties.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop) => (
            <Card
              key={prop.id}
              className="overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl hover:shadow-accent/10"
            >
              <CardHeader className="p-0 relative">
                <Badge
                  variant="default"
                  className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground"
                >
                  {prop.badge}
                </Badge>
                <Image
                  src={prop.image}
                  alt={prop.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                  data-ai-hint={prop.hint}
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-2xl mb-2">
                  {prop.title}
                </CardTitle>
                <p className="text-muted-foreground mb-4">{prop.location}</p>
                <div className="flex items-center gap-4 text-muted-foreground border-t pt-4">
                  <span className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-accent" /> {prop.beds} Beds
                  </span>
                  <span className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-accent" /> {prop.baths} Baths
                  </span>
                  <span className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-accent" /> {prop.parking}{" "}
                    Parking
                  </span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-6 bg-card-foreground/5 mt-auto">
                <p className="text-2xl font-bold text-accent font-headline">
                  ${prop.price}
                </p>
                <Button asChild variant="outline">
                  <Link href={`/property/${prop.id}`}>
                    Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
