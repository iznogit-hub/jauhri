"use client"

import Image from "next/image"
import { Mail, MapPin, Phone, Instagram, Twitter, Facebook, Youtube } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"
import FeaturedCollections from "@/components/featured-collections"
import AnimatedButton from "@/components/animated-button"
import { ArrowRight } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Spacer for header */}
      <div className="header-height"></div>

       {/* Hero Section - Matching Home with Dark Brown Overlay */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/1.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Brown Overlay at 50% Opacity */}
        <div className="absolute inset-0 bg-[#241405]/50 z-0" />

        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-accent font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
            Moradabad
          </h4>
          <h1 className="text-5xl md:text-7xl text-white mb-4 font-impact uppercase">Inquire Now</h1>
          <p className="text-white/90 text-lg max-w-2xl font-light">Let our skilled professionals bring your vision to life</p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-16 mt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl mb-6 font-impact uppercase">Get in Touch</h1>
            <p className="text-muted-foreground mb-8 max-w-md text-lg leading-relaxed">
              Jauhri Farm House is Moradabad's premier event destination. Our team ensures every aspect of your celebration is flawlessly executed.
            </p>

            <motion.div
              className="space-y-8 mb-12"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.3 },
                },
              }}
            >
              {[
                {
                  icon: <Mail className="text-accent mt-1" size={24} />,
                  title: "Email Us",
                  content: "praveerkumar1389@gmail.com",
                  href: "mailto:praveerkumar1389@gmail.com"
                },
                {
                  icon: <MapPin className="text-accent mt-1" size={24} />,
                  title: "Our Location",
                  content: "Khushhalpur, Civil Lines, Moradabad-244001, Uttar Pradesh",
                  href: "https://www.google.com/maps/place/Jauhri+Farm+house"
                },
                {
                  icon: <Phone className="text-accent mt-1" size={24} />,
                  title: "Call Us (Open 24 Hrs)",
                  content: "+91 8130184516",
                  href: "tel:+918130184516"
                },
              ].map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  className="flex items-start gap-4 group"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {item.icon}
                  <div>
                    <h3 className="font-impact uppercase tracking-wide text-foreground text-xl group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-lg">{item.content}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-2xl mb-4 font-impact uppercase tracking-wider">Social Channels</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: <Instagram size={24} />, label: "Instagram", href: "https://www.instagram.com/jauhrifarmhouse?igsh=enR3eGU0OGRvdnA2" },
                  { icon: <Twitter size={24} />, label: "Twitter", href: "#" },
                  { icon: <Facebook size={24} />, label: "Facebook", href: "#" },
                  { icon: <Youtube size={24} />, label: "Youtube", href: "#" },
                ].map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-secondary/50 rounded-full border border-border text-foreground hover:text-accent transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Inquiry Form Card */}
          <motion.div
            className="bg-card p-8 md:p-12 rounded-[2rem] shadow-soft border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl mb-6 font-impact uppercase">Inquiry Form</h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and our team will contact you to discuss packages tailored to your budget and needs.
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Google Maps Visual Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="w-full h-[450px] rounded-[2.5rem] overflow-hidden border border-border shadow-soft"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.433246377717!2d78.7565457755002!3d28.84132047551061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afbb168050965%3A0xc07a3c3e66487e4!2sJauhri%20Farm%20house!5e0!3m2!1sen!2sin!4v1714900000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jauhri Farm House Location"
          ></iframe>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="min-w-[90%] justify-self-center mx-4 py-24 my-20 px-4 md:px-8 rounded-[2.5rem] border border-border bg-secondary/20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h4 className="text-accent font-medium tracking-widest uppercase mb-3 text-sm">
            Inquiry Help
          </motion.h4>
          <motion.h2 className="text-4xl md:text-6xl mb-16 font-impact uppercase">
            Frequently Asked Questions
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 text-left">
            {[
              {
                question: "What are the venue's operating hours?",
                answer: "Jauhri Farm House is open 24 hours a day, 7 days a week for bookings and event management."
              },
              {
                question: "Do you offer customizable event themes?",
                answer: "Yes, our team provides full customization from decor to catering to match your vision."
              },
              {
                question: "Are there specific packages for weddings?",
                answer: "We offer tailored packages for haldi, mehndi, and grand receptions based on your guest count."
              },
              {
                question: "Is Jauhri Farm House a one-stop destination?",
                answer: "Absolutely. We handle everything from high-end decor and AC rooms to professional labor and security."
              }
            ].map((item, index) => (
              <motion.div key={index}>
                <h3 className="font-impact uppercase text-xl mb-3 text-foreground tracking-wide">{item.question}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer-end Gallery Link */}
      <section className="mb-32 px-4 md:px-8 text-center">
        <h2 className="text-4xl md:text-6xl mb-12 font-impact uppercase">Event Galleries</h2>
        <FeaturedCollections />
        <div className="mt-16">
          <AnimatedButton href="/showcase" variant="primary" icon={<ArrowRight size={18} />}>
            View All Collections
          </AnimatedButton>
        </div>
      </section>
    </div>
  )
}