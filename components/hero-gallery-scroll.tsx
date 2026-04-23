"use client"

import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "@/components/hero-gallery-scroll-animation"
import { Button } from "@/components/ui/button"
import AnimatedButton from "@/components/animated-button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

const IMAGES = [
  "/WhatsApp Image 2026-04-05 at 1.44.16 PM.jpeg",
  "/20260212_193854.jpg (1).jpeg",
  "/20260212_193239.jpg.jpeg",
  "/WhatsApp Image 2026-04-05 at 1.44.32 PM.jpeg",
  "/20260212_195537.jpg (1).jpeg",
]

export function HeroGalleryScroll() {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {IMAGES.map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-3xl shadow-xl border border-border/50"
          >
            <img
              className="size-full object-cover object-center"
              src={imageUrl}
              alt="Jauhri Farm House Event Space"
            />
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale className="relative z-10 text-center flex flex-col items-center">
        <motion.h4
          className="text-accent font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Est. Moradabad
        </motion.h4>
        <motion.h1
          className="max-w-2xl text-6xl md:text-8xl tracking-wider text-foreground font-old-london drop-shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          JFH
        </motion.h1>
        <motion.p
          className="my-6 max-w-xl text-muted-foreground text-lg md:text-xl drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Moradabad's premier destination for grand weddings, luxury receptions, and unforgettable celebrations.
        </motion.p>
        <div className="flex items-center flex-col md:flex-row justify-center gap-4 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <AnimatedButton href="/showcase" variant="primary" icon={<ArrowRight size={16} />}>
              View Galleries
            </AnimatedButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <AnimatedButton href="/contact" variant="outline" icon={<ArrowRight size={16} />}>
              Contact Us
            </AnimatedButton>
          </motion.div>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}

export function HeroDemo1() {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {IMAGES.map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-3xl shadow-xl border border-border/50"
          >
            <img
              className="size-full object-cover object-center"
              src={imageUrl}
              alt="Jauhri Farm House Event Space"
            />
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale className="relative z-10 text-center flex flex-col items-center">
        <h1 className="max-w-2xl text-6xl md:text-8xl tracking-wider text-foreground font-old-london">
          A Canvas for Every Celebration
        </h1>
        <p className="my-6 max-w-xl text-lg text-muted-foreground">
          Discover our sprawling lawns and majestic banquet spaces designed to bring your dream event to life.
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <AnimatedButton href="/showcase" variant="primary" icon={<ArrowRight size={16} />}>
            Explore Spaces
          </AnimatedButton>
          <Button
            variant="link"
            className="bg-transparent px-4 py-2 font-medium text-foreground hover:text-accent"
          >
            Inquire Now
          </Button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}

export function HeroDemo2() {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid
        variant="fourCells"
        className="sticky left-0 top-0 h-svh w-full p-4"
      >
        {IMAGES.filter((_, index) => index <= 3).map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-3xl shadow-xl border border-border/50"
          >
            <img
              className="size-full object-cover object-center"
              width="100%"
              height="100%"
              src={imageUrl}
              alt="Jauhri Farm House Event Space"
            />
          </BentoCell>
        ))}
      </BentoGrid>
      <ContainerScale className="text-center flex flex-col items-center">
        <h1 className="max-w-2xl text-6xl md:text-8xl tracking-wider text-foreground font-old-london">
          Jauhri Farm House
        </h1>
        <p className="my-6 max-w-xl text-lg text-muted-foreground">
          Transforming your cherished moments into royal visual masterpieces in the heart of Moradabad.
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <AnimatedButton href="/contact" variant="primary" icon={<ArrowRight size={16} />}>
            Check Availability
          </AnimatedButton>
          <Button
            variant="link"
            className="bg-transparent px-4 py-2 font-medium text-foreground hover:text-accent"
          >
            View Galleries
          </Button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}

export function HeroDemo3() {
  return (
    <ContainerScroll className="h-[350vh] bg-background text-foreground">
      <BentoGrid
        variant="threeCells"
        className="sticky left-0 top-0 h-svh w-full p-4"
      >
        {IMAGES.filter((_, index) => index <= 2).map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-3xl shadow-xl border border-border/50"
          >
            <img
              className="size-full object-cover object-center"
              width="100%"
              height="100%"
              src={imageUrl}
              alt="Jauhri Farm House Event Space"
            />
          </BentoCell>
        ))}
      </BentoGrid>
      <ContainerScale className="text-center flex flex-col items-center">
        <h4 className="text-accent font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
          Est. Moradabad
        </h4>
        <h1 className="max-w-2xl text-6xl md:text-8xl tracking-wider text-foreground font-old-london">
          JFH
        </h1>
        <p className="my-6 max-w-xl text-lg text-muted-foreground">
          Premium catering, bespoke decor, and expansive venue spaces for your next grand event.
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <Button className="bg-accent text-accent-foreground px-6 py-2 font-medium hover:bg-accent/90 rounded-full">
            Book Now
          </Button>
          <Button
            variant="link"
            className="bg-transparent px-4 py-2 font-medium text-foreground hover:text-accent"
          >
            Learn more
          </Button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}