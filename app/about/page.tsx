"use client"

import Image from "next/image"
import { ArrowRight, MapPin, Clock, Star, Users } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedButton from "@/components/animated-button"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/WhatsApp Image 2026-04-05 at 1.43.01 PM.jpeg"
          alt="About Jauhri Farm House"
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
          <h4 className="text-accent font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base drop-shadow-md">
            Our Story
          </h4>
          <h1 className="text-4xl md:text-6xl text-white mb-4 font-impact tracking-wider">About The Venue</h1>
          <p className="text-white/90 text-lg max-w-2xl font-light">Crafting unforgettable moments in Moradabad</p>
        </motion.div>
      </section>
      <div className="header-height"></div>

      {/* Bio / Venue Overview Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto mt-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative h-[600px] rounded-2xl overflow-hidden border border-border shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/20260212_193512.jpg (1).jpeg"
              alt="Jauhri Farm House Venue Decor"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl mb-6 font-impact">The JFH Legacy</h2>
            <div className="h-1 w-20 bg-accent mb-6 rounded-full"></div>
            <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
              Jauhri Farm House is Moradabad's premier one-stop destination for exceptional event planning and management. We believe that every celebration deserves a breathtaking backdrop and flawless execution.
            </p>
            <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
              With a dedicated team of skilled professionals, including expert Wedding Organisers, we provide customizable options tailored to match any event's unique theme and style—whether it is a grand royal wedding or an intimate private gathering.
            </p>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Our attention to detail ensures that every aspect of your event is meticulously handled, allowing you and your guests to simply relax, celebrate, and create memories that will last a lifetime.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <MapPin size={24} className="text-accent" />
                <span className="text-foreground font-medium">Civil Lines, Moradabad</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={24} className="text-accent" />
                <span className="text-foreground font-medium">Open 24 Hours</span>
              </div>
              <div className="flex items-center gap-3">
                <Star size={24} className="text-accent" />
                <span className="text-foreground font-medium">Premium Services</span>
              </div>
              <div className="flex items-center gap-3">
                <Users size={24} className="text-accent" />
                <span className="text-foreground font-medium">Expert Organisers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy / Core Values */}
      <section className="py-24 px-4 md:px-8 bg-secondary/30 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-accent font-medium tracking-widest uppercase mb-3 text-sm">Our Commitment</h4>
            <h2 className="text-4xl md:text-5xl font-impact">The JFH Standard</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Flawless Execution",
                description:
                  "From the moment your first guest arrives to the final farewell, our experienced team ensures every timeline, detail, and transition happens seamlessly.",
              },
              {
                title: "Bespoke Customization",
                description:
                  "No two events are the same. We offer highly tailored packages, adapting our spaces, decor, and catering to perfectly reflect your personal style and vision.",
              },
              {
                title: "Premium Hospitality",
                description:
                  "We provide more than just a venue; we provide peace of mind. Our dedicated staff is committed to delivering top-tier service and warmth to every guest.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-card p-10 rounded-2xl border border-border hover:border-accent/50 shadow-soft transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-foreground text-2xl mb-4 font-semibold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Highlights */}
      <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="text-accent font-medium tracking-widest uppercase mb-3 text-sm">Experience</h4>
          <h2 className="text-4xl md:text-5xl font-impact">Venue Highlights</h2>
        </motion.div>
        
        <div className="space-y-12">
          {[
            {
              category: "01",
              title: "Grand Wedding Celebrations",
              description:
                "Host the royal wedding of your dreams in our sprawling, elegantly illuminated indoor spaces, complete with customizable stage backdrops and premium plush seating.",
            },
            {
              category: "02",
              title: "Vibrant Pre-Wedding Rituals",
              description:
                "Our expansive green lawns are perfect for daytime Haldi and Mehndi ceremonies, featuring stunning canopy setups and vivid floral arrangements.",
            },
            {
              category: "03",
              title: "Premium Catering & Bars",
              description:
                "Treat your guests to sophisticated buffet arrangements, featuring polished gold-accented chafing dishes, live-station zones, and beautifully illuminated mocktail bars.",
            },
            {
              category: "04",
              title: "Bespoke Venue Decor",
              description:
                "Transform your event with meticulously styled elements, from dazzling geometric light tunnels to majestic floral entrances tailored to your specific color palette.",
            },
            {
              category: "05",
              title: "Corporate & Elite Events",
              description:
                "Beyond weddings, our versatile layouts provide a distinguished setting for corporate retreats, annual galas, and private elite gatherings requiring professional sophistication.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.category}
              className="flex flex-col md:flex-row gap-6 md:gap-12 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/6">
                <h3 className="text-4xl font-impact text-accent">{item.category}</h3>
              </div>
              <div className="md:w-5/6 pb-12 border-b border-border/50">
                <h4 className="font-semibold text-2xl mb-3 text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

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
          <h2 className="text-foreground text-4xl md:text-5xl mb-6 font-impact">Ready to Celebrate?</h2>
          <p className="text-foreground max-w-2xl mx-auto mb-10 text-xl font-light">
            Whether you are planning a grand wedding or an intimate private gathering, our team is ready to bring your vision to life.
          </p>
          <AnimatedButton href="/contact" variant="primary" icon={<ArrowRight size={18} />}>
            Check Availability
          </AnimatedButton>
        </motion.div>
      </section>
    </div>
  )
}