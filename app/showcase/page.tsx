"use client"

import { Suspense } from "react"
import Image from "next/image"
import CollectionGrid from "@/components/collection-grid"
import TagFilters from "@/components/tag-filters"
import Loading from "@/components/loading"
import { motion } from "framer-motion"

export default function ShowcasePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/WhatsApp Image 2026-04-05 at 1.43.01 PM.jpeg"
          alt="Jauhri Farm House Weddings and Events Showcase in Moradabad"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-accent font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
            The Gallery
          </h4>
          <h1 className="text-4xl md:text-6xl text-white mb-4 font-impact tracking-wider">Event Galleries</h1>
          <p className="text-white/90 text-lg max-w-2xl font-light">
            Explore our curated collections of grand weddings, vibrant ceremonies, and elite celebrations hosted at Jauhri Farm House.
          </p>
        </motion.div>
      </section>

      {/* Tags - Centered */}
      <motion.section
        className="py-12 px-4 md:px-8 max-w-7xl mx-auto mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-impact mb-6 text-foreground">Filter by Event Type</h2>
          <TagFilters />
        </div>
      </motion.section>

      {/* Collections Grid */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto pb-20">
        <Suspense fallback={<Loading />}>
          <CollectionGrid />
        </Suspense>
      </section>
    </div>
  )
}