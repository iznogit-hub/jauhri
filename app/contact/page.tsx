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

       {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/WhatsApp Image 2026-04-05 at 1.43.01 PM.jpeg"
          alt="Contact Jauhri Farm House Moradabad"
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
            Moradabad
          </h4>
          <h1 className="text-4xl md:text-6xl text-white mb-4 font-old-london">Inquire Now</h1>
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
            <h1 className="text-4xl md:text-5xl mb-6 font-old-london">Get in Touch</h1>
            <p className="text-muted-foreground mb-8 max-w-md text-lg leading-relaxed">
              Jauhri Farm House is a highly-rated event planning and management company. Our attention to detail ensures that every aspect of your event is flawlessly executed.
            </p>

            <motion.div
              className="space-y-8 mb-12"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              {[
                {
                  icon: <Mail className="text-accent mt-1" size={24} />,
                  title: "Email Us",
                  content: "praveerkumar1389@gmail.com",
                },
                {
                  icon: <MapPin className="text-accent mt-1" size={24} />,
                  title: "Our Location",
                  content: "Khushhalpur, Civil Lines, Moradabad-244001, Uttar Pradesh",
                },
                {
                  icon: <Phone className="text-accent mt-1" size={24} />,
                  title: "Call Us (Open 24 Hrs)",
                  content: "+91 94122 44341", // Place your primary contact number here
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {item.icon}
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                    <p className="text-muted-foreground text-lg">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl mb-4 font-old-london tracking-wider">Social Channels</h3>
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

          <motion.div
            className="bg-card p-8 md:p-12 rounded-[2rem] shadow-soft border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl mb-6 font-old-london">Inquiry Form</h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and our team will contact you to discuss packages tailored to your budget and needs.
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="min-w-[90%] justify-self-center mr-4 ml-4 py-24 my-20 px-4 md:px-8 rounded-[2.5rem] border border-border bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <motion.h4
            className="text-accent text-center font-medium tracking-widest uppercase mb-3 text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Inquiry Help
          </motion.h4>
          <motion.h2
            className="text-4xl md:text-5xl text-center mb-16 font-old-london"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            {[
              {
                question: "What are the venue's operating hours?",
                answer:
                  "Jauhri Farm House is open 24 hours a day, 7 days a week. Our team is always accessible to answer any queries or concerns clients may have.",
              },
              {
                question: "Do you offer customizable event themes?",
                answer:
                  "Yes. We have a team of skilled professionals that provide customizable options to match any event's theme and style, ensuring every detail is flawlessly executed.",
              },
              {
                question: "Are there specific packages for weddings?",
                answer:
                  "We offer a variety of packages tailored to meet different needs and budgets. Detailed pricing and package information can be found in our service catalogue.",
              },
              {
                question: "Is Jauhri Farm House a one-stop destination?",
                answer:
                  "Absolutely. For those looking for exceptional event planning and management, we are the perfect one-stop destination in Moradabad, from catering to decor.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-xl mb-3 text-foreground">{item.question}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* Featured Collections */}
      <section className="mb-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl mb-4 font-old-london">Event Galleries</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Experience the grandeur of weddings and corporate gatherings hosted at Jauhri Farm House.
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
              View All Collections
            </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}