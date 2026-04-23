"use client"

import { ArrowRight, Trees, Building, UtensilsCrossed, Sparkles } from "lucide-react"
import FeaturedCollections from "@/components/featured-collections"
import AnimatedButton from "@/components/animated-button"
import { motion } from "framer-motion"
import Image from "next/image"
import { HeroGalleryScroll } from "@/components/hero-gallery-scroll"
import { LayoutGridDemo } from "@/components/layout-image-grid"

export default function Home() {
  const venueFeatures = [
    {
      icon: <Building size={32} className="text-accent mb-4" />,
      title: "Grand Banquet Hall",
      description: "A sprawling, elegantly illuminated indoor space featuring premium plush seating and customizable stage backdrops for royal ceremonies."
    },
    {
      icon: <Trees size={32} className="text-accent mb-4" />,
      title: "Lush Outdoor Lawns",
      description: "Expansive green lawns equipped with stunning canopy setups, perfect for daytime haldi rituals or magical star-lit evening receptions."
    },
    {
      icon: <UtensilsCrossed size={32} className="text-accent mb-4" />,
      title: "Premium Catering Setups",
      description: "Sophisticated buffet and mocktail bar arrangements featuring exquisite gold-accented chafing dishes and dedicated live-station zones."
    },
    {
      icon: <Sparkles size={32} className="text-accent mb-4" />,
      title: "Bespoke Decor",
      description: "From dazzling geometric light tunnels to majestic floral entrances, every corner is meticulously styled to elevate your celebration."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Spacer for header */}
      <div className="header-height"></div>

      {/* Hero Section with Scroll Gallery */}
      <HeroGalleryScroll />

      {/* Introduction */}
      <section id="introduction" className="mt-32 mb-20 sm:py-0 py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-accent font-medium tracking-widest uppercase mb-3 text-sm">Welcome to JFH</h4>
            <h2 className="text-3xl md:text-5xl mb-6 text-foreground font-old-london">
              Experience Luxury at Jauhri Farm House
            </h2>
            <div className="h-1 w-20 bg-accent mb-6 rounded-full"></div>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Located in the heart of Khushhalpur, Civil Lines, Moradabad, Jauhri Farm House offers a breathtaking backdrop for your most cherished moments. We specialize in transforming weddings, corporate events, and private celebrations into royal visual masterpieces.
            </p>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Whether you are exchanging vows under our sweeping outdoor canopies or hosting a grand reception in our majestic banquet hall, every detail is crafted to capture the essence of your story.
            </p>
            <AnimatedButton href="/about" variant="outline" icon={<ArrowRight size={16} />}>
              Explore the Venue
            </AnimatedButton>
          </motion.div>
          
          <motion.div
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-border"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/20260212_193439.jpg (2).jpeg" 
              alt="Jauhri Farm House Event Setting"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-2xl font-old-london tracking-wider">JFH</h3>
              <p className="text-white/80">Moradabad</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Venue Spaces & Services */}
      <section className="py-24 px-4 md:px-8 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-accent font-medium tracking-widest uppercase mb-3 text-sm">Our Spaces</h4>
            <h2 className="text-3xl md:text-4xl text-foreground font-old-london">A Canvas for Every Celebration</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {venueFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-accent/50 transition-colors shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {feature.icon}
                <h3 className="text-xl mb-3 text-foreground font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <div className="py-20">
        <motion.div
          className="text-center mb-8 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-accent font-medium tracking-widest uppercase mb-3 text-sm">Gallery</h4>
          <h2 className="text-3xl md:text-4xl text-foreground font-old-london">Moments Frozen in Time</h2>
        </motion.div>
        <LayoutGridDemo />
      </div>

       {/* Call to Action */}
      <section className="z-10 min-w-[90%] justify-self-center mr-4 ml-4 py-24 lg:my-20 sm:mt-0 sm:mb-20 px-4 md:px-8 rounded-[2.5rem] border border-accent/20 bg-card/80 backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl"></div>

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-foreground text-4xl md:text-5xl mb-6 font-old-london">Plan Your Dream Event</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-2 text-lg">
            Khushhalpur, Civil Lines, Moradabad, Uttar Pradesh 244001
          </p>
          <p className="text-foreground max-w-2xl mx-auto mb-10 text-xl font-light">
            Ready to host an unforgettable celebration? Contact our team for personalized packages, catering options, and venue tours.
          </p>
          <AnimatedButton href="/contact" variant="primary" icon={<ArrowRight size={18} />}>
            Check Availability
          </AnimatedButton>
        </motion.div>
      </section>

      {/* Featured Collections */}
      <section className="lg:mt-10 mb-32 px-4 md:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-accent font-medium tracking-widest uppercase mb-3 text-sm">Portfolios</h4>
            <h2 className="text-foreground text-3xl md:text-4xl mb-4 font-old-london">Event Galleries</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A glimpse into the grand weddings, vibrant haldi ceremonies, and elite corporate gatherings hosted at Jauhri Farm House.
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
            <AnimatedButton href="/showcase" variant="outline" icon={<ArrowRight size={18} />}>
              View All Moments
            </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}