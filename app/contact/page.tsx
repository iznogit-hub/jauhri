"use client"

import Image from "next/image"
import { Mail, MapPin, Phone, Instagram, Twitter, Facebook, Youtube, Linkedin, Github } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"
import FeaturedCollections from "@/components/featured-collections"
import AnimatedButton from "@/components/animated-button"
import { ArrowRight } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Spacer for header
      <div className="header-height"></div> */}

       {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/images/collections/Farmhouse/cover.jpg"
          alt="Contact Jauhri Farm House"
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
          <h1 className="text-4xl md:text-5xl text-white mb-4">Contact Us</h1>
          <p className="text-white/90 text-lg max-w-2xl">Let's bring your vision to life</p>
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
            <h1 className="text-4xl md:text-5xl mb-6">Get in Touch</h1>
            <p className="text-primary/60 mb-8 max-w-md">
              We are a one-stop destination for exceptional event planning and management. Contact our skilled professionals today to discuss your grand wedding or intimate gathering.
            </p>

            <motion.div
              className="space-y-6 mb-8"
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
                  icon: <Mail className="text-primary mt-1" size={20} />,
                  title: "Email",
                  content: "bookings@jauhrifarmhouse.com",
                },
                {
                  icon: <MapPin className="text-primary mt-1" size={20} />,
                  title: "Location",
                  content: "Khushhalpur, Civil Lines, Moradabad-244001, Uttar Pradesh",
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
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-primary/60">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl mb-4">Keep Up To Date</h3>
              <div className="flex flex-wrap gap-1">
                {[
                  { icon: <Instagram size={26} />, label: "Instagram", href: "https://github.com/lilxyzz" },
                  { icon: <Twitter size={26} />, label: "Twitter", href: "https://github.com/lilxyzz" },
                  { icon: <Facebook size={26} />, label: "Facebook", href: "https://github.com/lilxyzz" },
                  { icon: <Youtube size={26} />, label: "Youtube", href: "https://github.com/lilxyzz" },
                  // { icon: <Linkedin size={20} />, label: "Linkedin", href: "https://linkedin.com" },
                  { icon: <Github size={26} />, label: "Github", href: "https://github.com/lilxyzz" },
                ].map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-secondary rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon}
                    {/* <span className="text-primary-foreground dark:text-primary-foreground">{item.label}</span> */}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-primary dark:bg-primary-foreground p-8 rounded-2xl shadow-sm border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl mb-6">Send a Message</h2>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="min-w-[90%] justify-self-center mr-4 ml-4 py-20 my-20 px-4 md:px-8 rounded-3xl border-[1px] border-border">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                question: "What are your operating hours?",
                answer:
                  "We are open 24 hours a day, 7 days a week. Our team is always accessible and available to answer any queries or concerns you may have.",
              },
              {
                question: "Do you offer customizable event packages?",
                answer:
                  "Yes, we offer a variety of packages tailored to meet different needs and budgets. Our team provides customizable options to match any event's theme and style.",
              },
              {
                question: "Do you provide event planners and wedding organizers?",
                answer:
                  "Absolutely. We have a dedicated team of skilled professionals, including expert Wedding Organisers, to ensure every aspect of your event is flawlessly executed.",
              },
              {
                question: "What types of events do you host?",
                answer:
                  "We cater to a comprehensive range of events, whether you are planning a grand wedding celebration or an intimate private gathering.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-medium text-xl mb-2">{item.question}</h3>
                <p className="text-primary/60">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* Featured Collections */}
      <section className="mt-20 mb-20 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">Event Galleries</h2>
            <p className="text-primary max-w-2xl mx-auto">
              Explore some of our most memorable weddings and corporate events hosted at our venue.
            </p>
          </motion.div>
          <FeaturedCollections />
          <motion.div
            className="text-center mt-12"
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