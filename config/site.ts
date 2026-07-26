export const siteConfig = {
  name: "MBMC HackFest 2026",
  description: "Join the ultimate hackathon experience at MBMC HackFest 2026.",
  keywords: ["hackathon", "mbmc", "coding", "event", "2026"],
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  socialLinks: {
    twitter: "https://twitter.com/mbmchackfest",
    github: "https://github.com/mbmchackfest",
    instagram: "https://instagram.com/mbmchackfest",
  },
  contact: {
    email: "contact@mbmchackfest.com",
  },
  eventDate: "2026-10-15T00:00:00Z",
  navigation: [
    { name: "About", href: "#about" },
    { name: "Tracks", href: "#tracks" },
    { name: "Timeline", href: "#timeline" },
    { name: "Judges", href: "#judges" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "FAQ", href: "#faq" },
  ],
};

export type SiteConfig = typeof siteConfig;
