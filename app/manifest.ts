import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jauhri Farm House',
    short_name: 'Jauhri Farm',
    description: 'Best shaadi and event venue in Khushhalpur, Moradabad. Book Jauhri Farm House for weddings, parties, aur grand celebrations.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff', // Update to match your site's background
    theme_color: '#ffffff',      // Update to match your primary brand color
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      // Adding these larger icons helps with Mobile SEO and PWA installation
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}