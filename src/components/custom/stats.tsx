const stats = [
  { value: "1,200+", label: "Satisfied Clients" },
  { value: "250+", label: "In Planning & Progress" },
  { value: "950+", label: "Homes Delivered" },
  { value: "40+", label: "Locations" },
];

const Stats = () => {
  return (
    <section className="py-24 sm:py-32 mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-accent font-headline">
                {stat.value}
              </p>
              <p className="mt-2 text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
