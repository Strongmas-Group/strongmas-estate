/**
 * Single source of truth for News & Insights.
 *
 * The listing page, the article route, the sitemap and the "related reading"
 * blocks on project pages all read from here, add an article once and it
 * appears everywhere.
 */

export type Section = {
  heading?: string;
  /** Paragraphs. Inline HTML (links, <strong>) is allowed and rendered as-is. */
  body: string[];
  image?: string;
  imageAlt?: string;
};

export type Post = {
  slug: string;
  title: string;
  /** Card summary on the listing page. */
  excerpt: string;
  /** <meta name="description">, keep under ~160 characters. */
  metaDescription: string;
  author: string;
  /** ISO date, used for schema.org and sorting. */
  date: string;
  displayDate: string;
  heroImage: string;
  heroAlt: string;
  tags: string[];
  sections: Section[];
  /**
   * Project slugs this article supports, matching the /properties/[slug] route.
   * Project pages render every article that names them here, so tagging an
   * article is all it takes to wire it into the ecosystem.
   */
  projects?: string[];
  /** Slugs of other posts to surface at the foot of the article. */
  related?: string[];
  /** Project this article should drive traffic to. */
  cta?: { label: string; href: string; blurb: string };
};

/** An outlet feature that lives off-site; shown on the listing, not routable. */
export type ExternalFeature = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  displayDate: string;
  date: string;
  author: string;
  badge: string;
  externalUrl: string;
};

const AURUM_CTA = {
  label: "Explore Aurum",
  href: "/properties/aurum",
  blurb:
    "Aurum is a private collection of 18 luxury residences on Adekola Balogun Street, adjacent Pinnacle Filling Station, Lekki Phase 1: 16 two-bedroom apartments and 2 three-bedroom penthouses, from ₦320,000,000.",
};

const IMG = {
  aurumExterior: "/WhatsApp%20Image%202026-06-25%20at%203.45.33%20PM.jpeg",
  aurumStreet: "/WhatsApp%20Image%202026-06-25%20at%203.22.43%20PM%20(3).jpeg",
  aurumTwoBed:
    "https://res.cloudinary.com/dbtqditjh/image/upload/v1782393700/ChatGPT_Image_Jun_5_2026_03_44_53_PM_eiidb5.png",
  aurumPenthouse:
    "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736253/3_Bed_6_c8k5ab.png",
  elysian:
    "https://res.cloudinary.com/dbtqditjh/image/upload/v1761658131/ely2_t3kf0b.jpg",
  elysianRooftop:
    "https://res.cloudinary.com/dbtqditjh/image/upload/v1761665070/living_Scene_1.Denoiser_copy_ueza51.jpg",
  elysianNight:
    "https://res.cloudinary.com/dbtqditjh/image/upload/v1761658137/rooftop_kc1unb.png",
  elysianTower:
    "https://res.cloudinary.com/dbczzmftw/image/upload/v1753218466/wysvt6xz5bgajthpppw9.jpg",
  avions:
    "https://res.cloudinary.com/dbczzmftw/image/upload/v1753218426/meknlmuj93frd5d54pys.jpg",
  avionsOne:
    "https://res.cloudinary.com/dbczzmftw/image/upload/v1753386645/dykwrq7mfymf7miogbn1.jpg",
  strongmasResidence:
    "https://res.cloudinary.com/dbczzmftw/image/upload/v1753026421/gyg79oiyshhrpsdrztxt.jpg",
  strongmasInterior:
    "https://res.cloudinary.com/dbczzmftw/image/upload/v1753850576/sx9rjn23frkgfjxtxdrj.jpg",
  omini:
    "https://res.cloudinary.com/dbczzmftw/image/upload/v1753218706/blpm4hgkijma5ywj611f.jpg",
  ominiInterior:
    "https://res.cloudinary.com/dbczzmftw/image/upload/v1753027544/fidzpkzef7eoigoonzc1.jpg",
  kesbel:
    "https://res.cloudinary.com/dbczzmftw/image/upload/v1753218667/xrejwu3vdhtmo3zy5gdj.jpg",
  kesbelInterior:
    "https://res.cloudinary.com/dbczzmftw/image/upload/v1753055829/nmhclllutnwnghxem3xj.jpg",
  oliveMall:
    "https://res.cloudinary.com/dbczzmftw/image/upload/v1753848624/foosncctwowrhve9e6aj.jpg",
};

export const posts: Post[] = [
  /* ─────────────────────────────────────────────────────────────
     Pillar article, targets "luxury apartments in Lekki Phase 1"
     ───────────────────────────────────────────────────────────── */
  {
    slug: "luxury-apartments-in-lekki-phase-1",
    title: "Luxury Apartments in Lekki Phase 1: What Buyers Should Consider",
    excerpt:
      "Lekki Phase 1 remains one of Lagos' most established premium residential markets. Here is what defines a genuinely luxury apartment there, and the questions worth asking before you commit.",
    metaDescription:
      "A practical buyer's guide to luxury apartments in Lekki Phase 1, Lagos: what defines the market, how to assess a development, and what to ask before you buy.",
    author: "Strongmas Development",
    date: "2025-12-04",
    displayDate: "December 2025",
    heroImage: IMG.aurumExterior,
    heroAlt: "Aurum, luxury apartments in Lekki Phase 1, Lagos",
    tags: [
      "Luxury Apartments in Lekki Phase 1",
      "Lekki Phase 1 Real Estate",
      "Lagos Property Investment",
      "Aurum",
      "Strongmas Development",
    ],
    sections: [
      {
        body: [
          "Lekki Phase 1 occupies an unusual position in the Lagos property market. It is old enough to be fully serviced and legibly planned, yet close enough to Victoria Island and Ikoyi to stay in constant demand from professionals, expatriates and returning diaspora buyers. For anyone weighing <strong>luxury apartments in Lekki Phase 1</strong>, that combination, established infrastructure plus proximity to the commercial core, is the single most important thing to understand.",
          "This guide sets out what actually separates a premium development from one that simply markets itself as premium, and the questions worth putting to any developer before money changes hands.",
        ],
      },
      {
        heading: "1. Location is measured in minutes, not adjectives",
        body: [
          "Every listing in Lagos claims a prime address. The useful test is drive time to the places you will actually go: the office, the school run, the airport, the supermarket.",
          "Aurum, for example, sits on Adekola Balogun Street, adjacent Pinnacle Filling Station in Lekki Phase 1, placing Eko Atlantic City, the Canadian Embassy and Upbeat Recreation Centre each within roughly eight to ten minutes, Prince Ebeano Supermarket within five to ten, and Murtala Muhammed International Airport within thirty-five to forty-five. Ask for that same breakdown from any developer, then verify a few of them yourself at the hour you would normally travel.",
        ],
        image: IMG.kesbel,
        imageAlt: "A premium residential building in Lekki Phase 1, Lagos",
      },
      {
        heading: "2. Density tells you what daily life will feel like",
        body: [
          "Unit count is one of the most revealing numbers in a brochure and one of the least discussed. A tower of two hundred apartments and a building of eighteen offer fundamentally different experiences of lifts, parking, pool access and noise, regardless of how similar the finishes look.",
          "Boutique developments trade shared amenity scale for privacy and lower service contention. Aurum comprises just 18 residences across five floors: ground-floor secure parking, four residential floors, 16 two-bedroom apartments and 2 three-bedroom duplex penthouses. Whichever end of the spectrum you prefer, decide deliberately rather than discovering it after handover.",
        ],
      },
      {
        heading: "3. Interrogate the specification, not the render",
        body: [
          "Renders are marketing. Specifications are contractual. Ask what is included at handover and get it in writing: fitted kitchens, wardrobes, sanitaryware, flooring, air conditioning, and whether the unit arrives furnished or shell.",
          "At Aurum, published amenities include smart home automation, a rooftop pool and gym, a children's play area, dedicated concierge, high-speed elevators, 24-hour CCTV and access control, standby power, a treated water system, en-suite bedrooms and dedicated resident parking, with a private foyer entrance for the penthouses. Use a list like that as a checklist against every competing development you are considering.",
        ],
        image: IMG.aurumTwoBed,
        imageAlt: "Interior of a two-bedroom luxury apartment in Lekki Phase 1",
      },
      {
        heading: "4. Understand the payment structure before you fall in love with the unit",
        body: [
          "Off-plan purchases in Lagos are usually structured around an initial deposit with the balance spread across the construction period. The deposit percentage, the spread, and what happens if the schedule slips are all negotiable points that buyers often skip.",
          "Aurum's published structure offers 100% outright payment, a 20% or 40% initial deposit, a flexible construction payment plan, and bespoke options, with the balance spread across 12 or 18 months. Two-bedroom residences start at ₦320,000,000 outright. Ask any developer to walk you through the same four points: deposit, spread, milestones, and remedies.",
        ],
      },
      {
        heading: "5. Delivery record matters more than the pitch",
        body: [
          "A developer's completed portfolio is the only evidence that survives contact with reality. Ask what has been delivered, when, and whether you can speak to existing residents or visit a finished building.",
          "Strongmas Development' portfolio includes Strongmas Residence, Avions Court I & II, The Omini and Kesbel Court, with Elysian Rise in Victoria Island currently under construction and now at eighth-floor slab. Completion for Aurum is scheduled for Q4 2028, with handover immediately upon completion.",
        ],
      },
      {
        heading: "Where to start",
        body: [
          "If you are actively comparing <strong>luxury apartments in Lekki Phase 1</strong>, the most efficient next step is to see a specification and payment plan side by side with the drive times and delivery record behind it.",
        ],
      },
    ],
    projects: ["aurum", "kesbel-court", "the-omini", "strongmas-residence"],
    related: ["2-bedroom-apartments-in-lekki-phase-1", "smart-homes-in-lagos", "lekki-phase-1-vs-victoria-island"],
    cta: AURUM_CTA,
  },

  /* ─────────────────────────────────────────────────────────────
     Targets "2-bedroom apartments in Lekki Phase 1"
     ───────────────────────────────────────────────────────────── */
  {
    slug: "2-bedroom-apartments-in-lekki-phase-1",
    title: "What to Look for When Buying a Luxury 2-Bedroom Apartment in Lagos",
    excerpt:
      "The two-bedroom apartment is the most liquid format in premium Lagos residential property. Here is why it stays in demand, and how to tell a well-planned one from a merely large one.",
    metaDescription:
      "Why 2-bedroom apartments in Lekki Phase 1 remain the most in-demand format in premium Lagos property, and how to assess layout, light and storage before buying.",
    author: "Strongmas Development",
    date: "2026-01-22",
    displayDate: "January 2026",
    heroImage: IMG.aurumTwoBed,
    heroAlt: "Living area of a two-bedroom luxury apartment in Lekki Phase 1, Lagos",
    tags: [
      "2-Bedroom Apartments in Lekki Phase 1",
      "Lekki Phase 1",
      "Lagos Apartments",
      "Aurum",
      "Strongmas Development",
    ],
    sections: [
      {
        body: [
          "Across premium Lagos residential stock, the two-bedroom apartment is consistently the most requested configuration. It suits the widest range of occupants: young professionals, couples, small families, executives on assignment and owners who intend to let, which is precisely what makes it the easiest format to resell or re-let when circumstances change.",
          "That breadth of demand is the practical argument for the format. But not all <strong>2-bedroom apartments in Lekki Phase 1</strong> are planned equally well, and the differences show up in daily use long before they show up in valuation.",
        ],
      },
      {
        heading: "Layout beats floor area",
        body: [
          "A well-planned two-bedroom will separate the private and social halves of the apartment so that a bedroom door does not open onto the living room, and so that guests never need to pass a bedroom to reach a bathroom. Circulation space that exists only to connect rooms is space you have paid for and cannot use.",
          "Look for en-suite bedrooms, a clearly defined master suite, and a kitchen that relates sensibly to the dining area rather than being wedged into leftover space.",
        ],
      },
      {
        heading: "Outdoor space is not a luxury in Lagos",
        body: [
          "A balcony changes how an apartment functions in this climate: it provides cross-ventilation, a place to dry laundry out of sight, and usable outdoor space during harmattan and the drier months.",
          "It is worth confirming that every unit has one rather than assuming from the marketing images. At Aurum, all 18 residences include a balcony.",
        ],
        image: IMG.aurumPenthouse,
        imageAlt: "Penthouse interior at Aurum, Lekki Phase 1, Lagos",
      },
      {
        heading: "Storage, services and the things nobody photographs",
        body: [
          "Fitted wardrobes, a functioning laundry position, adequate water storage and genuinely reliable backup power determine whether an apartment is pleasant to live in. They are rarely the focus of a brochure and almost always the focus of complaints afterwards.",
          "Ask specifically about water treatment, power redundancy, and how service charges are calculated and reviewed.",
        ],
      },
      {
        heading: "Scarcity within a building",
        body: [
          "In a boutique development, the number of units in your specific configuration affects how often a directly comparable apartment comes to market. Aurum's two-bedroom residences number 16 of the building's 18 homes, starting at ₦320,000,000 outright, with 20% or 40% initial deposit options and the balance spread across 12 or 18 months.",
          "Fewer near-identical units means fewer direct competitors when you eventually sell or let, though it also means fewer comparable transactions to price against.",
        ],
      },
    ],
    projects: ["aurum", "kesbel-court", "the-omini"],
    related: ["luxury-apartments-in-lekki-phase-1", "smart-homes-in-lagos", "buying-off-plan-in-lagos"],
    cta: AURUM_CTA,
  },

  /* ─────────────────────────────────────────────────────────────
     Targets "smart homes in Lagos"
     ───────────────────────────────────────────────────────────── */
  {
    slug: "smart-homes-in-lagos",
    title: "How Smart Home Technology Is Changing Luxury Living in Lagos",
    excerpt:
      "\"Smart home\" is the most overused phrase in Nigerian property marketing. Here is what the technology genuinely does in a Lagos apartment, and the questions that separate real systems from a label.",
    metaDescription:
      "What smart homes in Lagos actually offer: which automation genuinely matters in a Nigerian apartment, and the questions to ask a developer before you buy.",
    author: "Strongmas Development",
    date: "2026-06-11",
    displayDate: "June 2026",
    heroImage: IMG.strongmasResidence,
    heroAlt: "Smart terrace duplexes by Strongmas Development in Lekki Phase 1, Lagos",
    tags: [
      "Smart Homes in Lagos",
      "Home Automation Nigeria",
      "Luxury Apartments Lagos",
      "Aurum",
      "Strongmas Development",
    ],
    sections: [
      {
        body: [
          "Few phrases appear more often in Lagos property listings than \"smart home\", and few are defined less precisely. In practice the term covers everything from a building with app-controlled lighting to a genuinely integrated system that manages access, power and security together.",
          "For buyers comparing <strong>smart homes in Lagos</strong>, the useful exercise is not asking whether a development is smart, but asking exactly which functions are automated, who controls them, and what happens when the internet or the grid goes down.",
        ],
      },
      {
        heading: "The automation that earns its place in a Lagos apartment",
        body: [
          "Power management is the clearest case. In a market where buildings run on a mix of grid supply and standby generation, a system that monitors consumption and manages the transition between sources has an obvious daily value that a smart speaker does not.",
          "Access control is the second. Digital keys, visitor authorisation and a log of who entered and when do more for practical security than an additional camera. Climate and lighting control follow, useful, and genuinely energy-saving over time, but rarely the reason someone buys.",
        ],
      },
      {
        heading: "Five questions worth asking any developer",
        body: [
          "<strong>1. Which specific functions are automated?</strong> Ask for a list, not a category. Lighting, climate, access, power monitoring, water level, leak detection and surveillance are all distinct systems.",
          "<strong>2. What still works offline?</strong> A system that fails closed when connectivity drops is a liability. Ask what happens to your front door during an outage.",
          "<strong>3. Who owns the platform?</strong> Proprietary systems tie you to one vendor for support and parts. Ask whether components can be serviced or replaced locally.",
          "<strong>4. Is it per-unit or building-wide?</strong> Apartment-level automation and building management systems are different purchases and often confused in marketing.",
          "<strong>5. Who maintains it, and at what cost?</strong> Confirm whether maintenance sits inside the service charge or is billed separately.",
        ],
        image: IMG.aurumTwoBed,
        imageAlt: "Interior of a smart-home enabled apartment in Lekki Phase 1, Lagos",
      },
      {
        heading: "Security is where integration pays off",
        body: [
          "Individually, cameras, access control and alarms are commodity products. The value of an integrated system is that they inform each other and present a single view to the resident and to building management.",
          "Aurum's smart home system integrates intelligent lighting control, smart climate control, AI-enabled security monitoring, smart access control, and automated safety alerts with integrated smoke, gas and flood detection. That is the kind of itemised list worth asking any developer for.",
        ],
      },
      {
        heading: "The honest summary",
        body: [
          "Automation is a genuine quality-of-life improvement in a Lagos apartment, particularly around power and access. It is not, on its own, a reason to choose one development over another: location, layout, build quality and the developer's delivery record all matter more.",
          "Treat a smart-home claim the way you would treat any other specification: ask for the list, and check it against what is actually installed.",
        ],
      },
    ],
    projects: ["aurum", "the-elysian-rise", "strongmas-residence", "the-omini"],
    related: ["luxury-apartments-in-lekki-phase-1", "2-bedroom-apartments-in-lekki-phase-1", "what-a-delivered-portfolio-tells-you"],
    cta: AURUM_CTA,
  },

  /* ── Client topic 1 ── */
  {
    slug: "why-lekki-phase-1-remains-sought-after",
    title:
      "Why Lekki Phase 1 Remains One of Lagos' Most Sought-After Residential Locations",
    excerpt:
      "Lekki Phase 1 has held its position through two decades of Lagos expansion. The reasons are structural, planning, servicing and proximity, rather than fashion.",
    metaDescription:
      "Why Lekki Phase 1 remains one of Lagos' most sought-after residential locations: planning, infrastructure, proximity and a mature property market.",
    author: "Strongmas Development",
    date: "2025-06-17",
    displayDate: "June 2025",
    heroImage: IMG.kesbel,
    heroAlt: "Kesbel Court, a residential development in Lekki Phase 1, Lagos",
    tags: [
      "Lekki Phase 1",
      "Luxury Apartments in Lekki Phase 1",
      "Lagos Property Investment",
      "Aurum",
      "Strongmas Development",
    ],
    sections: [
      {
        body: [
          "Lagos has expanded outward continuously for two decades, and neighbourhoods have moved in and out of favour with it. Lekki Phase 1 has not moved. It remains one of the city's benchmark residential districts, and the reasons are structural rather than fashionable.",
          "For buyers considering <strong>luxury apartments in Lekki Phase 1</strong>, understanding why the district holds its position is more useful than any single listing.",
        ],
      },
      {
        heading: "It was planned, and the plan held",
        body: [
          "Lekki Phase 1 was laid out as a residential scheme with a road grid, plot sizes and setbacks defined in advance. That planning discipline is visible today in street widths, drainage and the general legibility of the district.",
          "Areas that grew without that framework carry the consequences permanently: irregular access, drainage problems and unpredictable neighbouring development. Planning is difficult to retrofit, which is why districts that had it from the start tend to keep their advantage.",
        ],
      },
      {
        heading: "Infrastructure has had time to mature",
        body: [
          "Power distribution, water, road surfacing, retail, schools, clinics and restaurants have accumulated in Lekki Phase 1 over years. A newer district may offer better prices, but it is usually still waiting for some of that.",
          "Practically, this is the difference between a supermarket ten minutes away and a supermarket promised in a masterplan.",
        ],
        image: IMG.aurumTwoBed,
        imageAlt: "Interior of premium apartments in Lekki Phase 1, Lagos",
      },
      {
        heading: "Proximity without being in the commercial core",
        body: [
          "Lekki Phase 1 sits immediately beyond Victoria Island, which puts the Island's offices, embassies and hotels within a short drive while keeping residential density and land costs lower than VI itself.",
          "That position, close to the core, but not in it, is the district's single most durable advantage, and it is not replicable further along the axis.",
        ],
      },
      {
        heading: "A deep and liquid market",
        body: [
          "Because the district has been established for years, there is a substantial base of completed stock, a continuous flow of transactions, and a wide pool of tenants and buyers. That depth matters when you want to sell or let.",
          "Thin markets with few comparable transactions are harder to price and slower to exit. Lekki Phase 1 is the opposite of thin.",
        ],
      },
      {
        heading: "Constrained supply at the premium end",
        body: [
          "The district is largely built out. New premium developments are generally infill on individual plots rather than large schemes, which keeps the supply of genuinely new <strong>luxury homes in Lekki</strong> limited.",
          "Aurum is an example of that pattern, a private collection of 18 residences on Adekola Balogun Street, adjacent Pinnacle Filling Station, rather than a large-scale development.",
        ],
      },
    ],
    projects: ["aurum", "kesbel-court", "the-omini", "strongmas-residence"],
    related: ["living-in-lekki-phase-1", "what-influences-property-value-in-lekki-phase-1"],
    cta: AURUM_CTA,
  },

  /* ── Client topic 2 ── */
  {
    slug: "living-in-lekki-phase-1",
    title: "Living in Lekki Phase 1: Lifestyle, Connectivity and Convenience",
    excerpt:
      "What daily life in Lekki Phase 1 actually looks like: the commute, the errands, the weekends, and the trade-offs worth knowing before you move.",
    metaDescription:
      "Living in Lekki Phase 1: a practical look at lifestyle, connectivity, schools, retail, dining and the daily realities of one of Lagos' premier districts.",
    author: "Strongmas Development",
    date: "2025-07-10",
    displayDate: "July 2025",
    heroImage: IMG.omini,
    heroAlt: "The Omini apartments on Akin Leigh Crescent, Lekki Phase 1, Lagos",
    tags: [
      "Lekki Phase 1",
      "Living in Lagos",
      "Luxury Apartments in Lekki",
      "Aurum",
      "Strongmas Development",
    ],
    sections: [
      {
        body: [
          "Buyers research price, floor area and finishes exhaustively, then move in and discover that the things shaping daily life are the commute, the school run and how long it takes to buy groceries.",
          "This is what living in Lekki Phase 1 actually involves.",
        ],
      },
      {
        heading: "Connectivity",
        body: [
          "The district's defining practical feature is its position at the start of the Lekki–Epe axis, immediately beyond Victoria Island. For Island-based professionals that means a genuinely short commute by Lagos standards.",
          "From Aurum's location on Adekola Balogun Street, Eko Atlantic City is roughly eight to ten minutes, the Lagos–Calabar Coastal Highway about eight, the Civic Centre about six, and Murtala Muhammed International Airport thirty-five to forty-five. Traffic varies by hour and by season, worth testing at the times you would actually travel.",
        ],
      },
      {
        heading: "Everyday convenience",
        body: [
          "Retail, dining and services are established rather than promised. Prince Ebeano Supermarket is within five to ten minutes of the Adekola Balogun corridor, with EbonyLife Cinema around ten and Upbeat Recreation Centre eight to ten.",
          "International schools, premium healthcare, fine dining and luxury retail are all present in the district, one of the clearer advantages of a mature area over a developing one.",
        ],
        image: IMG.aurumExterior,
        imageAlt: "Street view of a luxury residential development in Lekki Phase 1, Lagos",
      },
      {
        heading: "The residential texture",
        body: [
          "Lekki Phase 1 is not a tower district. Its streets carry a mix of detached houses, terraces, low-rise apartment buildings and boutique developments, which keeps density and street-level noise lower than the Island.",
          "For families in particular this is often the deciding factor: space and quiet within a short drive of the commercial core.",
        ],
      },
      {
        heading: "The honest trade-offs",
        body: [
          "Traffic on the main arteries at peak hours is real, and worsens as the axis develops further east. Prices are high relative to districts further out. And as an established district, availability of new premium stock is limited.",
          "Set against that: infrastructure that works today, a deep resale and rental market, and proximity that newer areas cannot match.",
        ],
      },
    ],
    projects: ["aurum", "kesbel-court", "the-omini", "strongmas-residence"],
    related: ["why-lekki-phase-1-remains-sought-after", "luxury-apartments-in-lekki-phase-1"],
    cta: AURUM_CTA,
  },

  /* ── Client topic 6 ── */
  {
    slug: "understanding-rental-yield-in-lagos",
    title: "Understanding Rental Yield When Buying Property in Lagos",
    excerpt:
      "Rental yield is the most quoted and least understood number in Nigerian property marketing. How it is calculated, what published data actually shows, and how to sanity-check a claim.",
    metaDescription:
      "How rental yield works when buying property in Lagos: gross vs net, how to calculate it, and what published 2026 market data reports for Nigeria and Lekki.",
    author: "Strongmas Development",
    date: "2025-11-13",
    displayDate: "November 2025",
    heroImage: IMG.kesbelInterior,
    heroAlt: "Interior of a premium apartment in Lekki Phase 1, Lagos",
    tags: [
      "Rental Yield",
      "Lagos Property Investment",
      "Property Investment Nigeria",
      "Strongmas Development",
    ],
    sections: [
      {
        body: [
          "Almost every property investment pitch in Lagos quotes a rental yield. Very few explain how it was calculated, whether it is gross or net, or where the underlying data came from.",
          "Since the number frequently drives the decision, it is worth understanding properly.",
        ],
      },
      {
        heading: "The calculation",
        body: [
          "<strong>Gross rental yield</strong> is annual rental income divided by purchase price, expressed as a percentage. A property bought at ₦320,000,000 and let at ₦22,400,000 a year produces a 7% gross yield.",
          "<strong>Net rental yield</strong> subtracts the costs of ownership first: service charge, agency and management fees, maintenance, insurance, void periods when the property sits empty, and applicable taxes. Net is always lower than gross, often materially so.",
          "When a marketing document quotes a yield without saying which it is, assume gross.",
        ],
      },
      {
        heading: "What published data reports for 2026",
        body: [
          "Independent sources give a range rather than a single figure, and they measure different things:",
          "<strong>Knight Frank's Africa Report 2026/27</strong> reports a 5.5% residential yield for Nigeria in 2026, a national figure rather than a Lagos or Lekki one.",
          "<strong>Nigeria Property Centre's Q3 2026 market report</strong> puts Lagos 3-bedroom properties at 6.8% gross rental yield.",
          "<strong>GoTerra's 2026 Lagos dataset</strong> gives Lekki, covering Phase 1 and the wider axis, a gross rental yield range of 7% to 9%.",
          "The spread between these is not an error: they cover different geographies, property types and methodologies. That is exactly why a single quoted percentage deserves scrutiny.",
        ],
      },
      {
        heading: "How to sanity-check a yield claim",
        body: [
          "<strong>Ask gross or net.</strong> If nobody can tell you, the number was not calculated carefully.",
          "<strong>Ask for the rental comparable.</strong> A yield is only as good as the assumed rent. Ask what similar units in the same area actually let for, and verify independently.",
          "<strong>Ask about voids.</strong> A yield calculated on twelve months of occupancy is optimistic; premium units can sit empty between tenancies.",
          "<strong>Ask about the service charge.</strong> In amenity-rich buildings this is the single largest deduction between gross and net.",
          "<strong>Check the source and the date.</strong> A yield figure without a source and a year is marketing, not data.",
        ],
      },
      {
        heading: "A note on how we talk about this",
        body: [
          "We do not publish a projected rental yield for our developments. Yields depend on the unit, the rent achieved, the costs incurred and the period, none of which a developer controls.",
          "What can be said accurately is that Lekki Phase 1 is an established premium residential market with rental demand from residents seeking well-connected, amenity-rich homes. Anyone modelling returns should use the published sources above, apply their own costs, and reach their own number.",
        ],
      },
    ],
    projects: ["aurum", "the-elysian-rise", "kesbel-court"],
    related: ["what-influences-property-value-in-lekki-phase-1", "buying-off-plan-in-lagos"],
    cta: AURUM_CTA,
  },

  /* ── Client topic 7 ── */
  {
    slug: "what-influences-property-value-in-lekki-phase-1",
    title: "What Influences Property Value in Lekki Phase 1?",
    excerpt:
      "Two apartments on the same street can differ substantially in value. The factors that drive the gap are mostly knowable in advance.",
    metaDescription:
      "What influences property value in Lekki Phase 1: street position, title, building quality, unit mix, service charge and infrastructure explained for buyers.",
    author: "Strongmas Development",
    date: "2025-09-16",
    displayDate: "September 2025",
    heroImage: IMG.strongmasInterior,
    heroAlt: "Interior of a delivered Strongmas Development home in Lekki Phase 1, Lagos",
    tags: [
      "Lekki Phase 1",
      "Property Value",
      "Lagos Property Investment",
      "Aurum",
      "Strongmas Development",
    ],
    sections: [
      {
        body: [
          "Buyers often assume the district sets the price. It sets the range; the specifics set the position within it. Two apartments a few hundred metres apart in Lekki Phase 1 can differ substantially, and the reasons are mostly identifiable before you buy.",
        ],
      },
      {
        heading: "Title, before anything else",
        body: [
          "A clean, registered title is the foundation of value in the Nigerian market. Defective or contested title reduces a property's value to whatever a buyer will risk, regardless of how well it is built.",
          "This is the first question to ask and the one to resolve with your own lawyer rather than the seller's.",
        ],
      },
      {
        heading: "Street position and access",
        body: [
          "Proximity to a main artery cuts both ways: convenient for access, less desirable for noise and traffic. Interior streets typically command a premium for quiet, provided access to the arteries remains easy.",
          "Drainage matters more than buyers expect. Streets that flood in heavy rain carry a persistent discount, and the pattern is well known locally. Ask.",
        ],
        image: IMG.aurumTwoBed,
        imageAlt: "Interior of a luxury 2-bedroom apartment in Lekki Phase 1, Lagos",
      },
      {
        heading: "Building quality and specification",
        body: [
          "Structure, finishes, fittings and building services separate comparable floor areas. So do the things that only become apparent in use: water treatment, power redundancy, lift reliability and the quality of the building's management.",
          "Intelligent home technology is increasingly part of this. Systems covering lighting, climate, security monitoring, access control and automated safety alerts are becoming an expectation at the premium end rather than a differentiator.",
        ],
      },
      {
        heading: "Density and unit mix",
        body: [
          "A building's unit count shapes the resident experience and the resale dynamic. Lower-density developments contend less for lifts, parking and amenities, and produce fewer directly comparable units competing on the market at once.",
          "Aurum, for instance, comprises 18 residences across five floors: 16 two-bedroom apartments and 2 three-bedroom penthouses, each with a balcony.",
        ],
      },
      {
        heading: "Service charge and building management",
        body: [
          "A high service charge suppresses net yield and narrows the buyer pool on resale. A service charge that is too low to maintain the building properly is worse, because the consequences show up in the fabric within a few years.",
          "Ask what the charge covers, how it is reviewed, and who manages the building.",
        ],
      },
      {
        heading: "Infrastructure trajectory",
        body: [
          "Value responds to committed infrastructure. In this corridor the Lagos–Calabar Coastal Highway is the most significant current project, alongside continued commercial development along the axis.",
          "Weigh committed and funded projects; treat announced ones with more caution.",
        ],
      },
    ],
    projects: ["aurum", "kesbel-court", "the-omini", "strongmas-residence"],
    related: ["understanding-rental-yield-in-lagos", "why-lekki-phase-1-remains-sought-after"],
    cta: AURUM_CTA,
  },

  /* ── Client topic 8 ── */
  {
    slug: "introducing-aurum-lekki-phase-1",
    title: "Introducing AURUM: The New Standard in Lekki Phase 1",
    excerpt:
      "A private collection of 18 luxury residences on Adekola Balogun Street: the facts, the configuration, the pricing and the payment structure.",
    metaDescription:
      "Introducing Aurum, a luxury residential development in Lekki Phase 1: 18 residences, 2-bedroom apartments and 3-bedroom penthouses from ₦320,000,000.",
    author: "Strongmas Development",
    date: "2026-07-07",
    displayDate: "July 2026",
    heroImage: IMG.aurumStreet,
    heroAlt: "Aurum on Adekola Balogun Street, Lekki Phase 1, Lagos",
    tags: [
      "Aurum",
      "Luxury Apartments in Lekki Phase 1",
      "Apartments for Sale in Lekki Phase 1",
      "Luxury Residential Development in Lagos",
      "Strongmas Development",
    ],
    sections: [
      {
        body: [
          "Aurum is a private collection of luxury residences in Lekki Phase 1, Lagos, designed around contemporary architecture, intelligent home technology, premium amenities and effortless urban living.",
          "The name derives from the Latin for gold. What follows are the facts of the development, in the order buyers usually want them.",
        ],
      },
      {
        heading: "The address",
        body: [
          "Adekola Balogun Street, adjacent Pinnacle Filling Station, Lekki Phase 1, Lagos. The development is conveniently located within easy reach of key diplomatic, commercial and lifestyle destinations in Lekki Phase 1.",
          "Indicative drive times: Eko Atlantic City eight to ten minutes, Upbeat Recreation Centre eight to ten, Prince Ebeano Supermarket five to ten, Nok by Alara eight to ten, and Murtala Muhammed International Airport thirty-five to forty-five.",
        ],
        image: IMG.aurumExterior,
        imageAlt: "Exterior of Aurum, a luxury residential development in Lekki Phase 1, Lagos",
      },
      {
        heading: "The configuration",
        body: [
          "Eighteen residences across five floors: ground-floor secure parking and circulation, then four residential floors served by high-speed elevators.",
          "The mix is 16 two-bedroom apartments and 2 three-bedroom duplex penthouses. Every residence has a balcony. The penthouses occupy the pent floor with private foyer entrances, beneath a curated rooftop level housing the gym and swimming pool.",
        ],
        image: IMG.aurumPenthouse,
        imageAlt: "Three-bedroom penthouse interior at Aurum, Lekki Phase 1, Lagos",
      },
      {
        heading: "Pricing and payment",
        body: [
          "Two-bedroom apartments are priced at ₦320,000,000 outright. Two structured plans are available:",
          "<strong>Plan A:</strong> 20% initial deposit of ₦64,000,000, with the ₦256,000,000 balance across either 10 instalments of ₦25,600,000 or 13 of ₦19,692,308.",
          "<strong>Plan B:</strong> 40% initial deposit of ₦128,000,000, with the ₦192,000,000 balance across either 10 instalments of ₦19,200,000 or 13 of ₦14,769,231.",
          "Pricing for the three-bedroom penthouses is to be announced. Completion is scheduled for Q4 2028, with handover immediately upon completion.",
        ],
      },
      {
        heading: "What is included",
        body: [
          "AI-enabled smart living, a rooftop swimming pool and fully equipped gym, a children's play area, dedicated concierge, high-speed elevators, 24-hour CCTV and access control, standby power, a treated water system, fully fitted kitchens, en-suite bedrooms and dedicated resident parking.",
        ],
      },
      {
        heading: "The developer",
        body: [
          "Strongmas Development is a premium real estate development company focused on creating thoughtfully designed residential properties in Lagos, with 70+ satisfied clients.",
          "Its portfolio includes Strongmas Residence, Avions Court I & II, The Omini and Kesbel Court, with Elysian Rise in Victoria Island currently under construction.",
        ],
      },
    ],
    projects: ["aurum"],
    related: ["inside-aurum-smart-home-experience", "aurum-amenities-modern-lagos-living"],
    cta: AURUM_CTA,
  },

  /* ── Client topic 9 ── */
  {
    slug: "inside-aurum-smart-home-experience",
    title: "Inside AURUM's Smart Home Experience",
    excerpt:
      "What the intelligent home technology at Aurum actually does: five integrated systems, and what each one changes about daily life.",
    metaDescription:
      "Inside Aurum's smart home system: intelligent lighting, climate control, AI-enabled security monitoring, smart access control and automated safety alerts.",
    author: "Strongmas Development",
    date: "2026-09-10",
    displayDate: "September 2026",
    heroImage: IMG.ominiInterior,
    heroAlt: "Smart home enabled apartment interior in Lekki Phase 1, Lagos",
    tags: [
      "Aurum",
      "Smart Homes in Lagos",
      "Luxury Apartments in Lekki Phase 1",
      "Home Automation Nigeria",
      "Strongmas Development",
    ],
    sections: [
      {
        body: [
          "Aurum integrates intelligent home technology designed to make everyday living more convenient, secure and responsive. Rather than describe that in the abstract, here is what the system actually integrates and what each part changes in practice.",
        ],
      },
      {
        heading: "Intelligent lighting control",
        body: [
          "Automate and control lighting throughout the home. Beyond convenience, scheduled and zoned lighting reduces consumption, which matters in a market where households run on a mix of grid supply and standby generation.",
        ],
      },
      {
        heading: "Smart climate control",
        body: [
          "Manage your indoor environment for greater comfort and efficiency. In the Lagos climate, cooling is typically the largest single load in a home, so control over when and where it runs has a direct effect on running costs.",
        ],
        image: IMG.aurumTwoBed,
        imageAlt: "Climate-controlled living space at Aurum, Lekki Phase 1",
      },
      {
        heading: "AI-enabled security monitoring",
        body: [
          "Integrated surveillance and security features for enhanced protection. The value of integration is that monitoring, access and alerting inform one another and present a single view, rather than operating as separate products.",
        ],
      },
      {
        heading: "Smart access control",
        body: [
          "Secure and convenient entry management. Digital entry, visitor authorisation and an access record are more useful in daily life than additional hardware, particularly for residents who travel or let their property.",
        ],
      },
      {
        heading: "Automated safety alerts",
        body: [
          "Integrated smoke, gas and flood detection with real-time alerts. This is the least discussed element of a smart home and arguably the most consequential: detection that reaches you wherever you are, rather than sounding in an empty apartment.",
        ],
      },
      {
        heading: "Why itemising matters",
        body: [
          "\"Smart home\" appears in most premium Lagos listings and means different things in each. The useful question for any development is which specific functions are automated, what continues to work when connectivity drops, and who maintains the system.",
          "The five systems above are what Aurum integrates. Ask any developer for the same list.",
        ],
      },
    ],
    projects: ["aurum"],
    related: ["smart-homes-in-lagos", "introducing-aurum-lekki-phase-1"],
    cta: AURUM_CTA,
  },

  /* ── Client topic 10 ── */
  {
    slug: "aurum-amenities-modern-lagos-living",
    title: "AURUM Amenities: Designed Around Modern Lagos Living",
    excerpt:
      "Amenity lists are easy to write and harder to justify. A look at what Aurum includes, and why each item earns its place in a Lagos apartment.",
    metaDescription:
      "Aurum's amenities in Lekki Phase 1: rooftop pool and gym, concierge, standby power, treated water, secure parking and 24-hour access control explained.",
    author: "Strongmas Development",
    date: "2026-08-20",
    displayDate: "August 2026",
    heroImage: IMG.aurumPenthouse,
    heroAlt: "Penthouse level at Aurum, Lekki Phase 1, Lagos",
    tags: [
      "Aurum",
      "Luxury Apartments in Lekki Phase 1",
      "Premium Apartments in Lekki Phase 1",
      "Luxury Homes in Lekki",
      "Strongmas Development",
    ],
    sections: [
      {
        body: [
          "Every premium development publishes an amenity list, and most of them look similar. What distinguishes a considered list from a generic one is whether each item responds to how people actually live in Lagos.",
          "Here is what Aurum includes, grouped by what it solves.",
        ],
      },
      {
        heading: "The essentials that are not optional in Lagos",
        body: [
          "<strong>Standby power supply.</strong> Continuity of supply is the single most important service in a Lagos building, and the one residents notice immediately when it is inadequate.",
          "<strong>Treated water system.</strong> Water treatment at building level rather than per-apartment is more reliable and removes a recurring household problem.",
          "<strong>Dedicated resident parking.</strong> Ground-floor secure parking with controlled access and circulation, allocated to residents.",
        ],
      },
      {
        heading: "Security, layered",
        body: [
          "24-hour CCTV and access control, combined with smart access management and AI-enabled security monitoring, so that entry, surveillance and alerting operate as one system rather than three.",
          "A dedicated concierge adds the human layer: deliveries, visitors and day-to-day building matters handled at the door.",
        ],
        image: IMG.aurumExterior,
        imageAlt: "Secure entrance and parking level at Aurum, Lekki Phase 1, Lagos",
      },
      {
        heading: "The rooftop level",
        body: [
          "Above the residences sits a curated rooftop experience housing a swimming pool and a fully equipped gym.",
          "Placing these at roof level rather than ground level is a deliberate choice in a boutique building: it keeps the footprint for parking and circulation, and gives the amenity space the elevated views the site affords.",
        ],
        image: IMG.aurumTwoBed,
        imageAlt: "Rooftop pool and gym level at Aurum, Lekki Phase 1, Lagos",
      },
      {
        heading: "Family and everyday living",
        body: [
          "A children's play area, high-speed elevators, fully fitted kitchens, en-suite bedrooms, an elegant master suite and a balcony to every one of the 18 residences.",
          "The three-bedroom penthouses add private foyer entrances, a meaningful distinction in a building where arrival is otherwise shared.",
        ],
      },
      {
        heading: "Why the count matters",
        body: [
          "With only 18 residences, amenity contention is low by design. A rooftop pool shared across eighteen homes functions differently from the same pool shared across two hundred.",
          "That is the practical argument for a smaller building, and it applies to lifts, parking and concierge attention as much as to the pool.",
        ],
      },
    ],
    projects: ["aurum"],
    related: ["introducing-aurum-lekki-phase-1", "luxury-apartments-in-lekki-phase-1"],
    cta: AURUM_CTA,
  },

  /* ─────────────────────────────────────────────────────────────
     Existing Elysian Rise article, migrated into the new system
     ───────────────────────────────────────────────────────────── */
  {
    slug: "elysian-rise-victoria-island",
    title: "Elysian Rise in Victoria Island: Why Off-Plan Buyers Stand to Gain the Most",
    excerpt:
      "Invest early in Elysian Rise by Strongmas Development, Victoria Island's signature high-rise, with flexible payment options and construction-stage value growth.",
    metaDescription:
      "Elysian Rise, Victoria Island: why buying off-plan in Lagos' premium market offers construction-stage value growth and flexible payment leverage.",
    author: "Strongmas Development",
    date: "2025-10-28",
    displayDate: "October 2025",
    heroImage: IMG.elysian,
    heroAlt: "Elysian Rise high-rise facade, Victoria Island, Lagos",
    tags: [
      "Elysian Rise",
      "Victoria Island Real Estate",
      "Off-plan Property Lagos",
      "Strongmas Development",
    ],
    sections: [
      {
        body: [
          "In Lagos' competitive luxury real estate market, good timing determines returns. The most successful investors understand that maximum ROI lies not in waiting for property completion, but in identifying value before the market does. Rising prominently on 3A Musa Yar'Adua Street, Victoria Island, <strong>Elysian Rise</strong> by Strongmas Development stands as a 12-floor architectural masterpiece, a seamless blend of smart innovation, modern design, and wealth-building potential.",
        ],
      },
      {
        heading: "Appreciation that Outperforms the Market",
        body: [
          "Positioned in one of Lagos' most exclusive districts, Elysian Rise enjoys the advantage of Victoria Island's limited land availability and enduring demand. Properties in this location record a <a href=\"https://theafricanvestor.com/blogs/news/lagos-property-investment-still-profitable\" target=\"_blank\" rel=\"noopener noreferrer\">10–15% location-driven ROI annually</a>, driven by the area's dual reputation as a corporate hub and lifestyle destination.",
          "By buying in at the off-plan stage, investors benefit from today's pricing while capturing additional value gain during construction, before handover.",
        ],
        image: IMG.elysianRooftop,
        imageAlt: "Rooftop living space at Elysian Rise, Victoria Island",
      },
      {
        heading: "Crafted for Luxury, Designed for Longevity",
        body: [
          "Elysian Rise integrates AI-powered smart automation, EV charging stations, rooftop infinity pools, private cinemas, children's play zones, clubhouse lounges, concierge and spa facilities, and hazard detection systems, all within a fully powered, secure environment.",
          "Available units include 2-bedroom apartments, 3-bedroom apartments, 4-bedroom maisonettes, and a 5-bedroom penthouse.",
        ],
        image: IMG.elysianNight,
        imageAlt: "Night view of Elysian Rise, Victoria Island, Lagos",
      },
      {
        heading: "Flexible Payment. Lasting Leverage.",
        body: [
          "With an initial 40% deposit and balance spread across 12–18 months, buyers secure high-value assets without overextending liquidity. Compared to ready-to-move properties demanding full payment upfront, off-plan ownership creates a hedge against price escalation in Victoria Island.",
        ],
      },
      {
        heading: "Now Selling, Few Units Available",
        body: [
          "Construction is advancing rapidly, with the project now at eighth-floor slab, and limited units remain.",
          "Call <a href=\"tel:+2348028940857\">+234 802 894 0857</a> or <a href=\"tel:+2349010777777\">+234 901 077 7777</a> to book a private or virtual property tour.",
        ],
      },
    ],
    projects: ["the-elysian-rise"],
    related: ["buying-off-plan-in-lagos", "lekki-phase-1-vs-victoria-island"],
    cta: {
      label: "Explore Elysian Rise",
      href: "/properties/the-elysian-rise",
      blurb:
        "Elysian Rise is Strongmas Development's flagship 12-floor high-rise on Musa Yar'Adua Street, Victoria Island, currently at eighth-floor slab.",
    },
  },

  /* ─────────────────────────────────────────────────────────────
     Portfolio-wide, off-plan buying, supports every ongoing project
     ───────────────────────────────────────────────────────────── */
  {
    slug: "buying-off-plan-in-lagos",
    title: "Buying Off-Plan in Lagos: How Construction-Stage Purchases Actually Work",
    excerpt:
      "Off-plan is how most premium Lagos property is sold, yet the mechanics are rarely explained. Here is how deposits, milestones and handover really work, and where buyers get caught.",
    metaDescription:
      "How buying off-plan property in Lagos works: deposit structures, payment milestones, construction risk, and the questions to ask before committing.",
    author: "Strongmas Development",
    date: "2026-04-09",
    displayDate: "April 2026",
    heroImage: IMG.elysianTower,
    heroAlt: "High-rise residential development under construction in Lagos",
    tags: [
      "Off-plan Property Lagos",
      "Lagos Property Investment",
      "Buying Property in Nigeria",
      "Strongmas Development",
    ],
    sections: [
      {
        body: [
          "Most premium residential property in Lagos is sold before it is finished. Buyers commit during construction, pay across a schedule, and take handover on completion. The arrangement is normal and, handled properly, advantageous: you buy at today's price and pay progressively rather than in one lump.",
          "It also carries real obligations on both sides that brochures tend to skip. This is what <strong>buying off-plan in Lagos</strong> involves in practice.",
        ],
      },
      {
        heading: "The deposit sets the terms",
        body: [
          "Almost every off-plan purchase begins with an initial deposit, typically expressed as a percentage of the purchase price, with the balance spread across the construction period. A larger deposit usually buys a shorter spread or a better price; a smaller one preserves liquidity.",
          "Across Strongmas Development the structures are published rather than negotiated case by case. Aurum, in Lekki Phase 1, prices 2-bedroom apartments at ₦320,000,000 outright, with Plan A at a 20% deposit of ₦64,000,000 and a ₦256,000,000 balance across 10 or 13 instalments, or Plan B at a 40% deposit of ₦128,000,000 and a ₦192,000,000 balance across 10 or 13 instalments. Elysian Rise, in Victoria Island, is structured around a 40% initial deposit with the balance across 12 to 18 months.",
        ],
      },
      {
        heading: "Milestones matter more than dates",
        body: [
          "A completion date on its own tells you very little. What tells you something is the current construction stage, and whether progress can be independently observed.",
          "Elysian Rise is at eighth-floor slab. Kesbel Court, on Fatai Idowu Arobieke Street off Admiralty Road, is at roofing stage. Avions Court 2 in Ikota G.R.A. is approximately 90% complete. Aurum is scheduled for completion in Q4 2028. Ask for the stage, not just the date, and ask whether you can visit the site.",
        ],
        image: IMG.elysianRooftop,
        imageAlt: "Interior of a completed luxury residence in Lagos",
      },
      {
        heading: "What to confirm before you sign",
        body: [
          "<strong>Title.</strong> Confirm the land title and that it is clean and registered. This is the single most important check in the Nigerian market and the one most often deferred.",
          "<strong>Payment schedule.</strong> Get the deposit, the instalment amounts and the dates in writing, along with what happens if you pay late.",
          "<strong>Delay remedies.</strong> Ask what you are entitled to if handover slips, and whether that is written into the agreement.",
          "<strong>Specification at handover.</strong> Establish exactly what is fitted on delivery, kitchen, wardrobes, flooring, sanitaryware, air conditioning.",
          "<strong>Track record.</strong> Ask what the developer has already completed and delivered, and go and look at one.",
        ],
      },
      {
        heading: "The case for buying early",
        body: [
          "The reason off-plan persists is straightforward: you fix a price at the start of a construction period and pay it over that period. In a market where premium stock is limited and construction costs move, that is meaningful leverage, provided the developer completes.",
          "Which is why every question above ultimately reduces to the last one. The payment structure only matters if the building gets finished.",
        ],
      },
    ],
    projects: ["aurum", "the-elysian-rise", "kesbel-court", "avions-court-2"],
    related: ["what-a-delivered-portfolio-tells-you", "lekki-phase-1-vs-victoria-island"],
    cta: {
      label: "View All Developments",
      href: "/properties",
      blurb:
        "Strongmas Development has ongoing developments in Lekki Phase 1, Victoria Island and Ikota G.R.A., alongside a delivered portfolio across Lagos.",
    },
  },

  /* ─────────────────────────────────────────────────────────────
     Location comparison, connects the Lekki and VI project sets
     ───────────────────────────────────────────────────────────── */
  {
    slug: "lekki-phase-1-vs-victoria-island",
    title: "Lekki Phase 1 vs Victoria Island: Choosing Between Lagos' Two Premium Addresses",
    excerpt:
      "Both are established, both are expensive, and they suit different buyers. A practical comparison of Lagos' two benchmark residential districts.",
    metaDescription:
      "Lekki Phase 1 vs Victoria Island: a practical comparison of Lagos' two premium residential districts on price, space, access and who each one suits.",
    author: "Strongmas Development",
    date: "2025-08-21",
    displayDate: "August 2025",
    heroImage: IMG.elysianNight,
    heroAlt: "Elysian Rise at night, Victoria Island, Lagos",
    tags: [
      "Lekki Phase 1",
      "Victoria Island Real Estate",
      "Luxury Apartments Lagos",
      "Lagos Property Investment",
      "Strongmas Development",
    ],
    sections: [
      {
        body: [
          "For buyers at the premium end of the Lagos market, the shortlist usually comes down to two districts. Victoria Island is the commercial core, corporate headquarters, diplomatic missions, hotels and the highest land values in the city. Lekki Phase 1 is the established residential counterpart immediately across the Lekki–Epe axis, planned, serviced and mature.",
          "Neither is objectively better. They suit different priorities, and the honest comparison is about trade-offs.",
        ],
      },
      {
        heading: "Victoria Island: proximity at a premium",
        body: [
          "If your working life is on the Island, VI removes the commute entirely. That convenience is priced in, and land scarcity means new residential stock is almost always vertical, high-rise apartments rather than houses.",
          "Elysian Rise, on Musa Yar'Adua Street, is a 12-floor high-rise offering 2-bedroom apartments, 3-bedroom apartments, 4-bedroom maisonettes and a 5-bedroom penthouse. That range within a single tower is characteristic of how VI resolves scarcity: build upward, and vary the units.",
        ],
        image: IMG.elysianRooftop,
        imageAlt: "Elysian Rise interior, Victoria Island, Lagos",
      },
      {
        heading: "Lekki Phase 1: space, planning and a shorter hop than people assume",
        body: [
          "Lekki Phase 1 was laid out as a residential district and still reads like one, gridded streets, lower density, and a mix of apartments, terraces and duplexes rather than towers alone.",
          "The Strongmas portfolio in Lekki Phase 1 illustrates the range: Strongmas Development on Dele Adedeji is 4-bedroom smart terrace duplexes; The Omini on Akin Leigh Crescent offers 1-bed, 2-bed and 3-bed penthouse apartments; Kesbel Court off Admiralty Road mixes 2-bedroom and 3-bedroom residences with a 4-bedroom penthouse on private lift access; and Aurum on Adekola Balogun Street is a private collection of 16 two-bedroom apartments and 2 three-bedroom penthouses.",
        ],
        image: IMG.aurumTwoBed,
        imageAlt: "Interior of a luxury apartment in Lekki Phase 1, Lagos",
      },
      {
        heading: "How to decide",
        body: [
          "<strong>Choose Victoria Island if</strong> your work or client base is on the Island, you want a high-rise with full building amenities, and you value being inside the commercial core more than square metres.",
          "<strong>Choose Lekki Phase 1 if</strong> you want more space for the money, prefer lower-density living, are buying for a family, or want the option of a terrace or duplex rather than an apartment.",
          "For buyers letting the property rather than occupying it, both districts draw from the same tenant pool of professionals, expatriates and diaspora owners, so the decision rests more on the specific building than on the postcode.",
        ],
      },
    ],
    projects: [
      "aurum",
      "the-elysian-rise",
      "strongmas-residence",
      "the-omini",
      "kesbel-court",
    ],
    related: ["luxury-apartments-in-lekki-phase-1", "buying-off-plan-in-lagos"],
    cta: {
      label: "Compare Developments",
      href: "/properties",
      blurb:
        "Strongmas Development develops in both districts, Aurum, Kesbel Court, The Omini and Strongmas Development in Lekki Phase 1, and Elysian Rise in Victoria Island.",
    },
  },

  /* ─────────────────────────────────────────────────────────────
     Emerging corridors, supports the Avions Court projects
     ───────────────────────────────────────────────────────────── */
  {
    slug: "ikota-and-abraham-adesanya-property-guide",
    title: "Ikota and Abraham Adesanya: Lagos' Value Corridors Along the Lekki–Epe Axis",
    excerpt:
      "Not every good Lagos address is a Lekki Phase 1 address. A look at two corridors where buyers get materially more space for the money.",
    metaDescription:
      "A property guide to Ikota G.R.A. and Abraham Adesanya on the Lekki-Epe axis, why these Lagos corridors offer more space per naira than the premium core.",
    author: "Strongmas Development",
    date: "2026-02-11",
    displayDate: "February 2026",
    heroImage: IMG.avions,
    heroAlt: "Terrace duplex development in Ikota G.R.A., Lagos",
    tags: [
      "Ikota GRA",
      "Abraham Adesanya",
      "Lekki Epe Expressway",
      "Lagos Property Investment",
      "Strongmas Development",
    ],
    sections: [
      {
        body: [
          "The Lekki–Epe axis has been extending outward for two decades, and the corridors beyond the established core now carry much of the city's new residential supply. Ikota G.R.A. and Abraham Adesanya are two of them.",
          "The trade is simple and worth stating plainly: you are further from Victoria Island, and you get materially more built space for the same money. For families and for buyers who do not commute to the Island daily, that trade is often the right one.",
        ],
      },
      {
        heading: "What the format looks like out here",
        body: [
          "Land economics change the product. Where the premium core builds apartments upward, these corridors build outward, terrace duplexes, semi-detached houses and low-rise developments with private parking per unit.",
          "Avions Court 2, at Block 16, Plot 7 & 8 in Ikota G.R.A., is a mixed development of terrace duplexes, semi-detached units and pent apartments with two car spaces per unit, currently around 90% complete. Avions Court 1, at Abraham Adesanya, is a delivered scheme in the same family.",
        ],
        image: IMG.avionsOne,
        imageAlt: "Completed residential development at Abraham Adesanya, Lagos",
      },
      {
        heading: "What to check in an outer corridor",
        body: [
          "<strong>Road access.</strong> Confirm the condition of the access road off the expressway, not just the estate road. This is the most common source of regret.",
          "<strong>Estate infrastructure.</strong> Ask about power, water, drainage and refuse, outer developments carry more of this themselves rather than relying on public provision.",
          "<strong>Security arrangement.</strong> Establish whether it is gated, who provides security, and how it is funded.",
          "<strong>Title.</strong> As everywhere in Lagos, confirm the land title is clean and registered before anything else.",
        ],
      },
      {
        heading: "Who these corridors suit",
        body: [
          "Buyers wanting a house rather than an apartment, families needing more bedrooms and outdoor space, and investors targeting the large and growing tenant base along the axis who work locally rather than on the Island.",
          "They suit daily Island commuters considerably less well. Be honest about which you are before you buy.",
        ],
      },
    ],
    projects: ["avions-court-2", "avions-court-1"],
    related: ["buying-off-plan-in-lagos", "lekki-phase-1-vs-victoria-island"],
    cta: {
      label: "View All Developments",
      href: "/properties",
      blurb:
        "Avions Court 1 at Abraham Adesanya is delivered; Avions Court 2 in Ikota G.R.A. is approximately 90% complete with limited units available.",
    },
  },

  /* ─────────────────────────────────────────────────────────────
     Track record, supports the completed portfolio, incl. Olive Mall
     ───────────────────────────────────────────────────────────── */
  {
    slug: "what-a-delivered-portfolio-tells-you",
    title: "What a Delivered Portfolio Tells You About a Developer",
    excerpt:
      "In a market where anyone can publish a render, completed buildings are the only evidence that counts. How to read a developer's track record before you commit.",
    metaDescription:
      "How to assess a Lagos property developer: what a delivered portfolio proves, which questions to ask, and why completed buildings matter more than renders.",
    author: "Strongmas Development",
    date: "2026-03-24",
    displayDate: "March 2026",
    heroImage: IMG.oliveMall,
    heroAlt: "Olive Mall on Adeniji Road, Lagos Island",
    tags: [
      "Lagos Property Developers",
      "Property Investment Nigeria",
      "Due Diligence",
      "Strongmas Development",
    ],
    sections: [
      {
        body: [
          "Anyone can commission a render. Very few organisations can point at a finished building, name the year it was delivered, and let you walk through it. In the Lagos market that distinction is the most reliable filter a buyer has.",
          "Here is what to actually look for when assessing a developer's record.",
        ],
      },
      {
        heading: "Completed, not announced",
        body: [
          "Distinguish between projects a developer has delivered and projects it has launched. Both appear in marketing; only the first proves capability. Ask for the delivered list specifically, with dates.",
          "Strongmas Development's delivered portfolio includes Strongmas Residence on Dele Adedeji, Lekki Phase 1, 4-bedroom smart terrace duplexes, sold out and handed over; The Omini on Akin Leigh Crescent, Lekki Phase 1, 1-bed, 2-bed and 3-bed penthouse apartments, sold out; Avions Court 1 at Abraham Adesanya; and Olive Mall on Adeniji Road, Lagos Island.",
        ],
        image: IMG.strongmasResidence,
        imageAlt: "Delivered residential development by Strongmas Development, Lekki Phase 1",
      },
      {
        heading: "Range is a form of evidence",
        body: [
          "A developer that has delivered only one building type has proved one competence. A portfolio spanning terrace duplexes, apartment buildings, mixed-use schemes and commercial property has been tested against more conditions.",
          "Olive Mall is a useful example of range, a three-floor, 715 sqm commercial building on Adeniji Road opposite Massey Children's Hospital, which is a materially different discipline from residential delivery.",
        ],
      },
      {
        heading: "Ask to speak to someone who lives there",
        body: [
          "The most informative conversation available to a prospective buyer is with an existing owner in a completed development. They will tell you about handover delays, snagging, service charges and building management, none of which appears in a brochure.",
          "A developer confident in its delivery will facilitate that conversation. Treat reluctance as information.",
        ],
      },
      {
        heading: "Watch what is under construction now",
        body: [
          "Current sites show you present capability rather than past. Elysian Rise in Victoria Island is at eighth-floor slab, Kesbel Court in Lekki Phase 1 is at roofing stage, and Avions Court 2 in Ikota G.R.A. is approximately 90% complete.",
          "Visit one. Fifteen minutes on an active site tells you more about a developer than an afternoon with the marketing material.",
        ],
      },
    ],
    projects: [
      "strongmas-residence",
      "the-omini",
      "avions-court-1",
      "olive-mall",
      "kesbel-court",
    ],
    related: ["buying-off-plan-in-lagos", "smart-homes-in-lagos"],
    cta: {
      label: "View All Developments",
      href: "/properties",
      blurb:
        "Explore the full Strongmas Development portfolio, delivered developments across Lagos alongside current projects in Lekki Phase 1, Victoria Island and Ikota G.R.A.",
    },
  },
];

export const externalFeatures: ExternalFeature[] = [
  {
    slug: "guardian-50-distinguished-nigerians",
    title: "Steering Strongmas Group Toward Modern Real Estate Excellence",
    excerpt:
      "\"Your home should be a joy to live in and a pleasure to own.\" Michael Shobukola is recognised among 50 Distinguished Nigerians of Merit by The Guardian for redefining residential experiences through smart technology and thoughtful design.",
    image: "/mdp.jpeg",
    displayDate: "May 2026",
    date: "2026-05-01",
    author: "The Guardian Nigeria",
    badge: "As Featured In The Guardian",
    externalUrl:
      "https://guardian.ng/specials/special-focus-on-50-distinguished-nigerians-of-merit-micheal-shobukola-steering-strongmas-group-toward-modern-real-estate-excellence/",
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

/** Articles supporting a given project slug, newest first. */
export const postsForProject = (projectSlug: string) =>
  posts
    .filter((p) => p.projects?.includes(projectSlug))
    .sort((a, b) => b.date.localeCompare(a.date));
