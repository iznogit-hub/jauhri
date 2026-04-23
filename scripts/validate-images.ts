const fs = require('fs');
const path = require('path');

// Updated categories for Jauhri Farm House
const collectionSlugs = [
  'grand-weddings',
  'haldi-mehndi',
  'outdoor-lawns',
  'premium-catering',
  'venue-decor',
  'corporate-events'
];

// The exact filenames mapping used in your lib/collections.ts
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
};

// Cover images assigned to each collection
const collectionCovers: Record<string, string> = {
  'grand-weddings': 'WhatsApp Image 2026-04-05 at 1.43.01 PM.jpeg',
  'haldi-mehndi': 'WhatsApp Image 2026-04-05 at 1.44.25 PM.jpeg',
  'outdoor-lawns': '20260212_195610.jpg (1).jpeg',
  'premium-catering': '20260212_193339.jpg (1).jpeg',
  'venue-decor': '20260212_193509.jpg.jpeg',
  'corporate-events': 'X100-cover.webp'
};

interface ValidationResult {
  hasErrors: boolean
  totalImages: number
  validatedImages: number
  errors: string[]
}

function validateImages(dryRun: boolean = false): ValidationResult {
  const publicDir = path.join(process.cwd(), 'public')
  const result: ValidationResult = {
    hasErrors: false,
    totalImages: 0,
    validatedImages: 0,
    errors: [],
  }

  console.log('🔍 Starting Jauhri Farm House image validation...')
  if (dryRun) {
    console.log('⚠️  Running in dry-run mode - will not fail the build\n')
  }

  collectionSlugs.forEach((slug) => {
    console.log(`\n📁 Validating Gallery: ${slug}`)
    
    // 1. Validate Cover
    const coverFile = collectionCovers[slug];
    const coverPath = path.join(publicDir, coverFile);
    result.totalImages++;

    if (!fs.existsSync(coverPath)) {
      const error = `Cover image missing in /public: ${coverFile}`;
      result.errors.push(error);
      console.error(`❌ ${error}`);
      result.hasErrors = true;
    } else {
      console.log(`✅ Cover found: ${coverFile}`);
      result.validatedImages++;
    }

    // 2. Validate Photos
    const photos = imageMap[slug] || [];
    photos.forEach((filename) => {
      result.totalImages++;
      const photoPath = path.join(publicDir, filename);

      if (!fs.existsSync(photoPath)) {
        const error = `Gallery image missing in /public: ${filename}`;
        result.errors.push(error);
        console.error(`❌ ${error}`);
        result.hasErrors = true;
      } else {
        result.validatedImages++;
      }
    });
  });

  // Print summary
  console.log('\n📊 Validation Summary:')
  console.log(`Total images checked: ${result.totalImages}`)
  console.log(`Images validated: ${result.validatedImages}`)
  console.log(`Missing images: ${result.totalImages - result.validatedImages}`)
  
  if (result.hasErrors) {
    console.log(`\n❌ Errors: ${result.errors.length}`)
    result.errors.forEach(error => console.log(`  - ${error}`))
    
    if (!dryRun) {
      console.error('\n❌ Image validation failed. Please ensure all WhatsApp and JFH images are in the root of the /public folder.')
      process.exit(1)
    } else {
      console.log('\n⚠️  Dry run completed with errors. Build will continue.')
    }
  } else {
    console.log('\n✅ All JFH event images validated successfully!')
  }

  return result
}

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')

validateImages(dryRun)