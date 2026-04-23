"use client"

import Image from "next/image"
import { PhotoGallery } from "@/components/photo-gallery"
import TagList from "@/components/tag-list"
import { motion } from "framer-motion"
import type { Collection } from "@/lib/types"
import { useEffect } from "react"
import FeaturedCollections from "@/components/featured-collections"
import AnimatedButton from "@/components/animated-button"
import { ArrowRight } from "lucide-react"

interface Props {
  collection: Collection
}

export function CollectionContent({ collection }: Props) {
  useEffect(() => {
    console.log("Collection:", collection)
  }, [collection])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src={collection.coverImage || "/WhatsApp Image 2026-04-05 at 1.43.01 PM.jpeg"}
          alt={collection.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-accent font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base drop-shadow-md">
            The Gallery
          </h4>
          <h1 className="text-4xl md:text-6xl text-white mb-4 font-old-london tracking-wider drop-shadow-xl">
            {collection.title}
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mb-8 font-light italic">
            {collection.description}
          </p>
          <TagList tags={collection.tags} variant="light" />
        </motion.div>
      </section>

      {/* Collection Info */}
      <motion.section
        className="py-16 px-4 md:px-8 max-w-5xl mx-auto mb-10 mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="prose max-w-none dark:prose-invert">
          <div className="h-1 w-20 bg-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed">
            {collection.fullDescription || collection.description}
          </p>
        </div>
      </motion.section>

      {/* Photo Gallery */}
      <section className="py-8 px-4 md:px-8 max-w-[95%] mx-auto mb-20">
        <PhotoGallery photos={collection.photos} />
      </section>

      {/* Featured Collections */}
      <section className="mt-20 mb-20 py-24 px-4 md:px-8 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-accent font-medium tracking-widest uppercase mb-3 text-sm">Explore More</h4>
            <h2 className="text-4xl md:text-5xl mb-4 font-old-london text-foreground">Venue Portfolios</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Discover more grand weddings, vibrant ceremonies, and elite catering setups hosted at Jauhri Farm House, Moradabad.
            </p>
          </motion.div>
          
          <FeaturedCollections />
          
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AnimatedButton href="/showcase" variant="primary" icon={<ArrowRight size={18} />}>
              View All Portfolios
            </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}