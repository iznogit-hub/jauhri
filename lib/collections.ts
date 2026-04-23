import type { Collection, Photo } from "./types"

// Randomly assigned provided filenames to event categories
const imageMap: Record<string, string[]> = {
  'grand-weddings': [
    'WhatsApp Image 2026-04-05 at 1.44.16 PM.jpeg',
    'WhatsApp Image 2026-04-05 at 1.44.18 PM.jpeg',
    'WhatsApp Image 2026-04-05 at 1.44.19 PM.jpeg',
    'WhatsApp Image 2026-04-05 at 1.44.22 PM.jpeg',
    'WhatsApp Image 2026-04-05 at 1.44.33 PM.jpeg',
    'WhatsApp Image 2026-04-05 at 1.44.35 PM.jpeg',
    'WhatsApp Image 2026-04-05 at 1.44.37 PM.jpeg',
    '20260212_193439.jpg (1).jpeg'
  ],
  'haldi-mehndi': [
    'WhatsApp Image 2026-04-05 at 1.44.25 PM.jpeg',
    'WhatsApp Image 2026-04-05 at 1.44.26 PM.jpeg',
    'WhatsApp Image 2026-04-05 at 1.44.29 PM.jpeg',
    'WhatsApp Image 2026-04-05 at 1.44.32 PM.jpeg',
    'WhatsApp Image 2026-04-05 at 1.44.39 PM.jpeg',
    'WhatsApp Image 2026-04-05 at 1.44.40 PM.jpeg',
    'WhatsApp Image 2026-04-05 at 1.44.41 PM.jpeg'
  ],
  'outdoor-lawns': [
    '20260212_193059.jpg.jpeg',
    '20260212_193213.jpg.jpeg',
    '20260212_193229.jpg.jpeg',
    '20260212_193239.jpg.jpeg',
    '20260212_195010.jpg (1).jpeg',
    '20260212_195017.jpg (1).jpeg',
    '20260212_195023.jpg.jpeg',
    '20260212_195537.jpg (1).jpeg'
  ],
  'premium-catering': [
    '20260212_193255.jpg (1).jpeg',
    '20260212_193258.jpg (1).jpeg',
    '20260212_193313.jpg (1).jpeg',
    '20260212_193337.jpg (1).jpeg',
    '20260212_193339.jpg (1).jpeg',
    '20260212_193350.jpg (1).jpeg',
    '20260212_193859.jpg (1).jpeg'
  ],
  'venue-decor': [
    '20260212_193509.jpg.jpeg',
    '20260212_193512.jpg (1).jpeg',
    '20260212_193512.jpg (2).jpeg',
    '20260212_193526.jpg.jpeg',
    '20260212_193528.jpg.jpeg',
    '20260212_193610.jpg.jpeg',
    '20260212_193854.jpg (1).jpeg',
    '20260212_193854.jpg (2).jpeg'
  ],
  'corporate-events': [
    '20260212_193818.jpg (1).jpeg',
    '20260212_193826.jpg (1).jpeg',
    '20260212_193830.jpg (1).jpeg',
    '20260212_193837.jpg (1).jpeg',
    '20260212_193845.jpg (1).jpeg',
    'asd.jpeg',
    'X100-cover.webp'
  ]
}

const defaultMetadata = {
  camera: "Sony Alpha A7 IV",
  lens: "35mm f/1.4 G Master",
  aperture: "f/1.8",
  shutterSpeed: "1/200",
  iso: "400",
  focalLength: "35mm",
  takenAt: new Date().toISOString().split("T")[0],
}

const aspectRatios = [
  { width: 1800, height: 1200 },
  { width: 1800, height: 1350 },
  { width: 1800, height: 1080 },
  { width: 1200, height: 1800 },
]

function getCollectionImages(collectionSlug: string): Photo[] {
  const filenames = imageMap[collectionSlug] || []
  return filenames.map((filename, index) => {
    const dimensions = aspectRatios[index % aspectRatios.length]
    return {
      id: `${collectionSlug}-${index}`,
      src: `/${filename}`, // Files are in the root of public
      width: dimensions.width,
      height: dimensions.height,
      alt: `Jauhri Farm House ${collectionSlug.replace('-', ' ')} image`,
      metadata: defaultMetadata,
    }
  })
}

export const collections: Collection[] = [
  {
    id: "1",
    slug: "grand-weddings",
    title: "Grand Weddings",
    description: "Royal wedding ceremonies and majestic receptions",
    fullDescription: "Experience luxury in the heart of Moradabad[cite: 4]. We transform weddings into visual masterpieces.",
    coverImage: "/WhatsApp Image 2026-04-05 at 1.43.01 PM.jpeg",
    tags: ["Weddings", "Reception", "Banquet"],
    featured: true,
    photos: getCollectionImages("grand-weddings"),
  },
  {
    id: "2",
    slug: "haldi-mehndi",
    title: "Vibrant Haldi & Mehndi",
    description: "Colorful daytime rituals and intimate celebrations",
    fullDescription: "Intimate and vibrant celebrations held at Khushhalpur, Civil Lines[cite: 4].",
    coverImage: "/WhatsApp Image 2026-04-05 at 1.44.25 PM.jpeg",
    tags: ["Haldi", "Mehndi", "Daytime"],
    featured: true,
    photos: getCollectionImages("haldi-mehndi"),
  },
  {
    id: "3",
    slug: "outdoor-lawns",
    title: "Outdoor Lawn Canopies",
    description: "Sweeping outdoor setups under the stars",
    fullDescription: "Our expansive green lawns in Moradabad offer the perfect starlit venue[cite: 4].",
    coverImage: "/20260212_195610.jpg (1).jpeg",
    tags: ["Outdoor", "Lawn", "Canopy"],
    featured: true,
    photos: getCollectionImages("outdoor-lawns"),
  },
  {
    id: "4",
    slug: "premium-catering",
    title: "Premium Catering Setups",
    description: "Exquisite culinary displays and mocktail bars",
    fullDescription: "Sophisticated buffet and mocktail arrangements tailored to your event theme.",
    coverImage: "/20260212_193339.jpg (1).jpeg",
    tags: ["Catering", "Food", "Bar"],
    featured: false,
    photos: getCollectionImages("premium-catering"),
  },
  {
    id: "5",
    slug: "venue-decor",
    title: "Bespoke Venue Decor",
    description: "Meticulously crafted floral and lighting designs",
    fullDescription: "Meticulous styling from geometric light tunnels to majestic floral entrances.",
    coverImage: "/20260212_193509.jpg.jpeg",
    tags: ["Decor", "Lighting", "Floral"],
    featured: false,
    photos: getCollectionImages("venue-decor"),
  },
  {
    id: "6",
    slug: "corporate-events",
    title: "Corporate & Private Events",
    description: "Sophisticated setups for professional gatherings",
    fullDescription: "Distinguished settings for annual galas and private elite gatherings in Moradabad[cite: 4].",
    coverImage: "/X100-cover.webp",
    tags: ["Corporate", "Private", "Events"],
    featured: false,
    photos: getCollectionImages("corporate-events"),
  },
]

export const getAllCollections = (): Collection[] => collections
export const getFeaturedCollections = (): Collection[] => collections.filter(collection => collection.featured)
export const getCollection = (slug: string): Collection | undefined => collections.find(collection => collection.slug === slug)
export const getAllTags = (): string[] => Array.from(new Set(collections.flatMap(collection => collection.tags)))