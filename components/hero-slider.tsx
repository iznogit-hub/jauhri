"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Slide {
  image: string
}

export default function HeroSlider() {
  const slides: Slide[] = [
    {
      image: "/images/collections/Farmhouse/cover.jpg",
    },
    {
      // Note: Update with a photo of the banquet hall
      image: "/images/collections/Farmhouse/banquet.jpg",
    },
    {
      // Note: Update with a photo of the outdoor lawn canopy
      image: "/images/collections/Farmhouse/lawn.jpg",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [slides.length])

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [slides.length])

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("introduction")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Reset autoplay timer when slide changes manually
  useEffect(() => {
    if (isAutoPlaying) {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current)
      }
      autoPlayRef.current = setTimeout(goToNextSlide, 5000)
    }
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current)
      }
    }
  }, [currentSlide, isAutoPlaying, goToNextSlide])

  // Pause autoplay on hover
  const pauseAutoPlay = () => setIsAutoPlaying(false)
  const resumeAutoPlay = () => setIsAutoPlaying(true)

  return (
    <div
      ref={sliderRef}
      className="relative h-[90vh] w-full overflow-hidden"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      {/* Slides - Only the images change */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }} // Faster transition
        >
          <div className="relative h-full w-full">
            <Image
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt="Jauhri Farm House Venue"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Static text content that doesn't change with slides */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10">
        <h4 className="text-accent font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base drop-shadow-md">
          Est. Moradabad
        </h4>
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 font-old-london drop-shadow-lg">
          Jauhri Farm House
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8 font-light drop-shadow-md">
          Moradabad's premier destination for grand weddings, luxury receptions, and unforgettable celebrations.
        </p>
      </div>

      {/* Navigation arrows - No background, with shadow/glow for visibility */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full transition-all z-10 hover:scale-110 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={36} strokeWidth={1.5} className="filter drop-shadow-[0_0_3px_rgba(0,0,0,0.8)]" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full transition-all z-10 hover:scale-110 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={36} strokeWidth={1.5} className="filter drop-shadow-[0_0_3px_rgba(0,0,0,0.8)]" />
      </button>

      {/* Scroll down button */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white p-3 rounded-full transition-all z-10 hover:scale-110 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]"
        onClick={scrollToNextSection}
        aria-label="Scroll to next section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ y: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronDown size={36} strokeWidth={1.5} className="filter drop-shadow-[0_0_3px_rgba(0,0,0,0.8)]" />
      </motion.button>
    </div>
  )
}