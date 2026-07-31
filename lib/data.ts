/* ----------------------------------------------------------------------------
   All site content + images live here.
   To use your OWN photos: drop them in /public/images and replace the URLs
   below with e.g. "/images/hero.jpg". Then you can delete the picsum entry
   in next.config.ts.
---------------------------------------------------------------------------- */

// Placeholder image helper. Replace with your real image paths.
const img = (seed: string, w = 800, h = 600) =>
  `/images/Background.png`;

type NavLink = { label: string; href: string; dropdown?: boolean };

export const nav = {
  brand: "HarborMedia.ai",
  links: [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    // { label: "Platform", href: "/#platform", dropdown: true },
    // { label: "Channels", href: "/#channels", dropdown: true },
    { label: "Contact", href: "/contact" },
  ] as NavLink[],
  cta: "WATCH LIVE",
};

export const hero = {
  image: img("harbor-hero", 1600, 1000),
  eyebrow: "Authentic Places,",
  title: "CAPTURED",
  description:
    "HarborMedia.ai is an AI powered media platform that automatically captures, curates and publishes authentic visual stories from some of the world's most beautiful waterfront locations.",
  stats: [
    { value: "365", label: "Days Per Year" },
    { value: "4K", label: "Ultra HD" },
    { value: "100%", label: "Authentic Footage" },
    { value: "24/7", label: "Automated Platform" },
  ],
};

export const about = {
  badgeNumber: "AI",
  badgeLabel: "Powered capture, curation and publishing",
  imageMain: "/images/section_1.png",
  imageSecondary: "/images/Section_2.png",
  title: "We build living media channels for the world's waterfronts",
  body: "HarborMedia.ai combines intelligent automation with authentic cinematography. Using professional cameras, AI workflows and cloud publishing, our platform captures moments that would otherwise disappear forever, from breathtaking sunrises to iconic waterfront destinations. Every image, every sunrise, every tide, every day, automatically.",
  cta: "DISCOVER OUR STORY",
};

export const features = [
  {
    title: "We capture real moments",
    body: "Unlike stock footage, every frame we publish is filmed on location in real time. No staging and no recycled clips, just the water, the light and the weather exactly as they happened.",
    highlight: false,
  },
  {
    title: "We never miss a sunrise",
    body: "Unlike influencers, our cameras are always in position. Every morning is captured, edited and published automatically, whether the sky turns gold or the fog rolls in.",
    highlight: true,
  },
  {
    title: "Our platform never sleeps",
    body: "Unlike traditional media, HarborMedia.ai runs around the clock. Capture, curation and distribution happen without a crew, a studio or a shooting schedule.",
    highlight: false,
  },
];

export const yachts = {
  title: "One network, every waterfront worth watching",
  intro: "Each channel is built around a place rather than a personality, so the audience grows with the destination itself.",
  cards: [
    {
      name: "Sunrises in the Hamptons",
      body: "Our flagship channel films from the historic Shinnecock Canal in Hampton Bays, New York, where Peconic Bay meets Shinnecock Bay. Changing weather, passing boats, wildlife, reflections and golden light mean no two mornings are ever the same.",
      image: "/images/first.png",
    },
    {
      name: "Great South Bay Sunrises",
      body: "Coming soon. First light across the barrier islands and shallow flats of Long Island's Great South Bay, captured every morning from the moment the horizon begins to warm.",
      image: "/images/Second.png",
    },
    {
      name: "Miami Waterfront",
      body: "Coming soon. Around the clock coverage of one of the busiest and most photogenic harbors in the world, from sunrise over Biscayne Bay to the city skyline long after dark.",
      image: "/images/third.png",
    },
  ],
  cta: "EXPLORE ALL CHANNELS",
};

export const amenities = {
  title: "Built on a fully automated media stack",
  intro: "Professional camera systems, computer vision and cloud publishing work together so that every location effectively runs itself.",
  strips: [
    img("amenity-1", 300, 700),
    img("amenity-2", 300, 700),
    img("amenity-3", 300, 700),
  ],
  featured: {
    image: "/images/blaer.png",
    title: "Professional 4K camera systems",
    body: "Weather sealed cameras hold a fixed cinematic frame at every location and feed a continuous ultra HD stream into our AI pipeline for selection, editing and delivery.",
    cta: "SEE THE TECHNOLOGY",
  },
  cta: "EXPLORE THE PLATFORM",
};

export const whyChoose = {
  title: "How the HarborMedia.ai platform works",
  intro: "Four automated stages take a location from a live camera feed to a published story, every single day.",
  image: "/images/data.png",
  steps: [
    {
      title: "Capture",
      body: "Professional 4K cameras are positioned at iconic waterfront locations and record continuously, through every season and every condition.",
    },
    {
      title: "Create",
      body: "Artificial intelligence reviews the footage and selects the strongest moments, color and pacing while preserving the authenticity of the original scene.",
    },
    {
      title: "Publish",
      body: "Finished content is delivered automatically to YouTube, Instagram, Facebook, TikTok and the platforms that come next.",
    },
    {
      title: "Grow",
      body: "Every channel builds a community around a location rather than an influencer, so the audience belongs to the destination.",
    },
  ],
};

/* PLACEHOLDER: these quotes are written copy, not real viewer feedback.
   Replace with genuine, attributable comments before the site goes live. */
export const testimonials = {
  heading: "WHAT VIEWERS SAY",
  items: [
    {
      rating: "5.0",
      quote: "I open the channel with my coffee every morning before the rest of the house is awake. It has quietly become part of my routine.",
      name: "Placeholder Name",
      role: "Daily Viewer",
      highlight: false,
    },
    {
      rating: "5.0",
      quote: "We were married on the canal fifteen years ago. Seeing that exact water at first light, every single day, means more than I can explain.",
      name: "Placeholder Name",
      role: "Hampton Bays Resident",
      highlight: true,
    },
    {
      rating: "5.0",
      quote: "The footage is never staged and never repeated. You can tell you are watching a real morning rather than a cut from a stock library.",
      name: "Placeholder Name",
      role: "Landscape Photographer",
      highlight: false,
    },
    {
      rating: "5.0",
      quote: "As a destination marketer I have watched plenty of promotional reels. An honest, unedited sunrise still sells the place better than any of them.",
      name: "Placeholder Name",
      role: "Destination Marketing",
      highlight: false,
    },
  ],
};

export const contact = {
  title: "Get in touch",
  intro:
    "Whether you want to license our footage, partner with us on a location, or simply tell us what you see from your window in the morning, we would like to hear from you.",
  formTitle: "Send us a message",
  formNote:
    "Choose a topic and your message will be addressed to the right inbox.",
  submit: "SEND MESSAGE",
  departmentsTitle: "Or email us directly",
  departments: [
    {
      name: "Advertising and sponsorship",
      email: "partnerships@harbormedia.ai",
      body: "Sponsored content, brand partnerships and media collaborations.",
    },
  ],
};

export const footer = {
  brand: "HarborMedia.ai",
  tagline: "Authentic AI powered storytelling. Capturing the world's waterfronts.",
  emailPlaceholder: "Enter Your Email...",
  cta: "SUBSCRIBE",
  rights: "All rights reserved.",
  columns: [
    {
      title: "",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Cookie Policy", href: "/cookie-policy" },
      ],
    },
  ],
};
