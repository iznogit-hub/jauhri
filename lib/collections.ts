import type { Collection, Photo } from "./types"

// Collection format mapping
const collectionFormats: Record<string, string> = {
  'grand-weddings': 'jpg',
  'haldi-mehndi': 'jpg',
  'corporate-events': 'jpg',
  'premium-catering': 'jpg',
  'venue-decor': 'jpg',
  'outdoor-lawns': 'jpg'
} as const

// Collection folder name mapping (for case sensitivity)
const collectionFolders: Record<string, string> = {
  'grand-weddings': 'Weddings',
  'haldi-mehndi': 'Haldi',
  'corporate-events': 'Corporate',
  'premium-catering': 'Catering',
  'venue-decor': 'Decor',
  'outdoor-lawns': 'Lawns'
} as const

// Collection image counts and formats
const collectionImages: Record<string, { count: number; formats: string[] }> = {
  'grand-weddings': { 
    count: 15,
    formats: ['jpg']
  },
  'haldi-mehndi': { 
    count: 12,
    formats: ['jpg']
  },
  'corporate-events': { 
    count: 10,
    formats: ['jpg']
  },
  'premium-catering': { 
    count: 14,
    formats: ['jpg']
  },
  'venue-decor': { 
    count: 16,
    formats: ['jpg']
  },
  'outdoor-lawns': { 
    count: 12,
    formats: ['jpg']
  }
} as const

// Common metadata for event photos
const defaultMetadata = {
  camera: "Sony Alpha A7 IV",
  lens: "35mm f/1.4 G Master",
  aperture: "f/1.8",
  shutterSpeed: "1/200",
  iso: "400",
  focalLength: "35mm",
  takenAt: new Date().toISOString().split("T")[0],
} as const

// Aspect ratios for different image types
const aspectRatios = [
  { width: 1800, height: 1200 }, // 3:2
  { width: 1800, height: 1350 }, // 4:3
  { width: 1800, height: 1080 }, // 16:9
  { width: 1200, height: 1800 }, // 2:3 (portrait)
] as const

// Function to get images for a collection
function getCollectionImages(collectionSlug: string): Photo[] {
  // Get the proper folder name from our mapping instead of generating it
  const folderName = collectionFolders[collectionSlug]
  if (!folderName) return []

  const collectionInfo = collectionImages[collectionSlug]
  if (!collectionInfo) return []
  
  return Array.from({ length: collectionInfo.count }, (_, i) => {
    const index = i + 1
    const format = collectionFormats[collectionSlug] || 'jpg'
    const imagePath = `/images/collections/${folderName}/${collectionSlug}-${index}.${format}`
    const dimensions = aspectRatios[index % aspectRatios.length]

    return {
      id: `${collectionSlug}-${index}`,
      src: imagePath,
      width: dimensions.width,
      height: dimensions.height,
      alt: `Jauhri Farm House ${collectionSlug.replace('-', ' ')} image ${index}`,
      metadata: defaultMetadata,
    }
  })
}

// Function to get cover image path
function getCoverImagePath(folderName: string): string {
  // Using the new folder structure logic
  return `/images/collections/${folderName}/cover.jpg`
}

// Collections data
const collections: Collection[] = [
  {
    id: "1",
    slug: "grand-weddings",
    title: "Grand Weddings",
    description: "Royal wedding ceremonies and majestic receptions",
    fullDescription:
      "Experience the pinnacle of luxury with our grand wedding setups. From the sweeping entrance decor to the intricately designed stage backdrops in our banquet hall, we ensure every moment of your special day is framed in absolute elegance.",
    coverImage: getCoverImagePath("Weddings"),
    tags: ["Weddings", "Reception", "Banquet"],
    featured: true,
    photos: getCollectionImages("grand-weddings"),
  },
  {
    id: "2",
    slug: "haldi-mehndi",
    title: "Vibrant Haldi & Mehndi",
    description: "Colorful daytime rituals and intimate celebrations",
    fullDescription:
      "Our sprawling lawns provide the perfect canvas for vibrant, sunlit pre-wedding ceremonies. We craft intimate canopy setups with vivid floral arrangements to perfectly complement the joyous energy of Haldi and Mehndi rituals.",
    coverImage: getCoverImagePath("Haldi"),
    tags: ["Haldi", "Mehndi", "Daytime"],
    featured: true,
    photos: getCollectionImages("haldi-mehndi"),
  },
  {
    id: "3",
    slug: "outdoor-lawns",
    title: "Outdoor Lawn Canopies",
    description: "Sweeping outdoor setups under the stars",
    fullDescription:
      "Transform your evening into a magical experience. Our expansive green lawns accommodate stunning overhead canopies, twinkling fairy lights, and spacious seating arrangements for massive gatherings and elite private parties.",
    coverImage: getCoverImagePath("Lawns"),
    tags: ["Outdoor", "Lawn", "Canopy"],
    featured: true,
    photos: getCollectionImages("outdoor-lawns"),
  },
  {
    id: "4",
    slug: "premium-catering",
    title: "Premium Catering Setups",
    description: "Exquisite culinary displays and mocktail bars",
    fullDescription:
      "A feast for the eyes and the palate. Browse our sophisticated buffet arrangements, featuring polished gold-accented chafing dishes, live-station zones, and beautifully illuminated mocktail bars designed for seamless service.",
    coverImage: getCoverImagePath("Catering"),
    tags: ["Catering", "Food", "Bar"],
    featured: false,
    photos: getCollectionImages("premium-catering"),
  },
  {
    id: "5",
    slug: "venue-decor",
    title: "Bespoke Venue Decor",
    description: "Meticulously crafted floral and lighting designs",
    fullDescription:
      "It is all in the details. Explore our meticulously styled venue elements, from dazzling geometric light tunnels and majestic floral entrances to premium plush seating and thematic color palettes tailored to your vision.",
    coverImage: getCoverImagePath("Decor"),
    tags: ["Decor", "Lighting", "Floral"],
    featured: false,
    photos: getCollectionImages("venue-decor"),
  },
  {
    id: "6",
    slug: "corporate-events",
    title: "Corporate & Private Events",
    description: "Sophisticated setups for professional gatherings",
    fullDescription:
      "Jauhri Farm House offers a distinguished setting for corporate retreats, annual galas, and private elite gatherings. We provide versatile layouts that balance professional sophistication with premium hospitality.",
    coverImage: getCoverImagePath("Corporate"),
    tags: ["Corporate", "Private", "Events"],
    featured: false,
    photos: getCollectionImages("corporate-events"),
  },
]

// Export functions
export const getAllCollections = (): Collection[] => collections
export const getFeaturedCollections = (): Collection[] => collections.filter(collection => collection.featured)
export const getCollection = (slug: string): Collection | undefined => collections.find(collection => collection.slug === slug)
export const getAllTags = (): string[] => Array.from(new Set(collections.flatMap(collection => collection.tags)))