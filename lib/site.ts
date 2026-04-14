export const siteConfig = {
  name: "Brew Haven",
  description:
    "Brew Haven is a modern neighborhood cafe serving specialty coffee, fresh meals, and warm community vibes.",
  url: "https://brewhaven.example",
  keywords: [
    "Brew Haven",
    "cafe",
    "coffee shop",
    "specialty coffee",
    "brunch",
    "fresh ingredients",
    "Bengaluru cafe",
  ],
  phone: "+91 63632 56821",
  address: {
    streetAddress: "24 Maple Street",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560001",
    addressCountry: "IN",
  },
} as const;

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path}`;
}
