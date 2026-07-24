/* ----------------------------------------------------------------------------
   All site content + images live here.
   To use your OWN yacht photos: drop them in /public and replace the URLs
   below with e.g. "/images/hero.jpg". Then you can delete the picsum entry
   in next.config.ts.
---------------------------------------------------------------------------- */

// Placeholder image helper. Replace with your real image paths.
const img = (seed: string, w = 800, h = 600) =>
  `/images/Background.png`;

export const nav = {
  brand: "HarborMedia",
  links: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Feature", href: "#features", dropdown: true },
    { label: "Testimonials", href: "#testimonials", dropdown: true },
    { label: "Price", href: "#price" },
  ],
  cta: "LOGIN",
};

export const hero = {
  image: img("harbor-hero", 1600, 1000),
  eyebrow: "Lorem Ipsum is",
  title: "LUXURY",
  description:
    "Experience world-class yacht charters with breathtaking views, premium comfort, and personalized service for unforgettable journeys.",
  stats: [
    { value: "150+", label: "Homes Served" },
    { value: "98%", label: "Guest Satisfaction" },
    { value: "20+", label: "Premium Yacht Models" },
    { value: "12+", label: "Global Destinations" },
  ],
};

export const about = {
  badgeNumber: "15+",
  badgeLabel: "Years in luxury marine services",
  imageMain: img("about-marina", 700, 800),
  imageSecondary: img("about-yacht", 800, 460),
  title: "Lorem Ipsum is simply dummy text of the printing",
  body: "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing",
  cta: "DISCOVER OUR STORY",
};

export const features = [
  {
    title: "Lorem Ipsum is simply dummy text",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit eu justo non pretium.",
    highlight: false,
  },
  {
    title: "Lorem Ipsum is simply dummy text",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit eu justo non pretium.",
    highlight: true,
  },
  {
    title: "Lorem Ipsum is simply dummy text",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit eu justo non pretium.",
    highlight: false,
  },
];

export const yachts = {
  title: "Lorem Ipsum is simply dummy text",
  intro: "Hand-selected yachts engineered for comfort, performance, and elegance on the open sea.",
  cards: [
    {
      name: "Presidential Yacht 80 ft",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat venenatis luctus. Fusce non imperdiet lacus. Integer non enim ut mauris varius facilisis.",
      image: img("yacht-presidential", 800, 700),
    },
    {
      name: "Family Leisure Catamaran",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat venenatis luctus. Fusce non imperdiet lacus. Integer non enim ut mauris varius facilisis.",
      image: img("yacht-catamaran", 800, 560),
    },
    {
      name: "Ocean Dream SuperYacht",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat venenatis luctus. Fusce non imperdiet lacus. Integer non enim ut mauris varius facilisis.",
      image: img("yacht-superyacht", 800, 500),
    },
  ],
  cta: "VIEW ALL YACHTS",
};

export const amenities = {
  title: "Lorem Ipsum is simply dummy text",
  intro: "Our yachts are fully equipped with world-class amenities for an extraordinary sailing experience.",
  strips: [
    img("amenity-1", 300, 700),
    img("amenity-2", 300, 700),
    img("amenity-3", 300, 700),
  ],
  featured: {
    image: img("amenity-featured", 700, 800),
    title: "Luxury suites & cabins",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit eu justo non pretium.",
    cta: "VIEW ALL YACHTS",
  },
  cta: "VIEW FULL AMENITIES",
};

export const whyChoose = {
  title: "Lorem Ipsum is simply dummy text",
  intro: "We combine luxury hospitality with maritime expertise to deliver the highest charter experience.",
  image: img("why-marina", 800, 800),
  steps: [
    {
      title: "Fully customizable routes",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit eu justo non pretium.",
    },
    {
      title: "Top-tier marine maintenance",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit eu justo non pretium.",
    },
    {
      title: "24/7 customer support",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit eu justo non pretium.",
    },
    {
      title: "VIP welcome & concierge service",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit eu justo non pretium.",
    },
  ],
};

export const testimonials = {
  heading: "WHAT OUR GUEST SAY",
  items: [
    {
      rating: "5.0",
      quote: "From the lounge to the cabins, everything felt luxurious. It exceeded anything we expected from a private yacht experience.",
      name: "Daniel Paw",
      role: "Travel Enthusiast",
      highlight: false,
    },
    {
      rating: "5.0",
      quote: "From the lounge to the cabins, everything felt luxurious. It exceeded anything we expected from a private yacht experience.",
      name: "Daniel Piw",
      role: "Travel Enthusiast",
      highlight: true,
    },
    {
      rating: "5.0",
      quote: "From the lounge to the cabins, everything felt luxurious. It exceeded anything we expected from a private yacht experience.",
      name: "Daniel Puw",
      role: "Travel Enthusiast",
      highlight: false,
    },
    {
      rating: "5.0",
      quote: "From the lounge to the cabins, everything felt luxurious. It exceeded anything we expected from a private yacht experience.",
      name: "Daniel Pew",
      role: "Travel Enthusiast",
      highlight: false,
    },
  ],
};

export const footer = {
  brand: "HarborMedia",
  emailPlaceholder: "Enter Your Email...",
  cta: "SUBSCRIBE",
  columns: [
    {
      title: "Quick links",
      links: ["About", "Service", "Benefits", "Pricing", "Testimonials"],
    },
    {
      title: "Payment",
      links: ["Bank", "Paypal", "Qris"],
    },
    {
      title: "Follow Us",
      links: ["Instagram", "Facebook", "Discord", "X"],
    },
    {
      title: "Our Partners",
      links: ["Instagram", "Facebook", "Discord", "X"],
    },
    {
      title: "Service",
      links: ["Bank", "Paypal", "Qris"],
    },
  ],
};
