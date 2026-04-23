"use client"

import Link from "next/link"
import { Instagram, Twitter, Facebook, Youtube, Linkedin, Github } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { motion } from "framer-motion"
import useDisableRightClick from './useDisableRightClick'; // Adjust the import path as necessary

export default function Footer() {
  useDisableRightClick(); // Apply the hook to disable right-click on images

  return (
    <motion.footer
      className="bg-secondary/30 border-t border-border py-16 px-4 md:px-8 mt-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Link href="/" className="font-old-london text-4xl tracking-widest font-bold inline-block text-foreground">
              JFH
            </Link>
          </div>
          <p className="text-muted-foreground max-w-sm mb-8 text-lg leading-relaxed">
            The perfect one-stop destination for exceptional event planning and management. Making every grand wedding and intimate gathering flawless.
          </p>
          <div className="flex space-x-4 items-center">
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background rounded-full border border-border text-foreground hover:text-accent hover:border-accent transition-colors shadow-soft"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background rounded-full border border-border text-foreground hover:text-accent hover:border-accent transition-colors shadow-soft"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background rounded-full border border-border text-foreground hover:text-accent hover:border-accent transition-colors shadow-soft"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Youtube size={20} />
                <span className="sr-only">Youtube</span>
            </motion.a>
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-old-london text-2xl mb-6 text-foreground tracking-wider">Quick Links</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/showcase" className="text-muted-foreground hover:text-accent transition-colors">
                Event Galleries
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                About The Venue
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                Bookings & Inquiries
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="font-old-london text-2xl mb-6 text-foreground tracking-wider">Contact</h3>
          <ul className="space-y-4 text-muted-foreground">
            <div>
              <h4 className="text-accent text-sm uppercase tracking-widest mb-1">Email</h4>
              <a href="mailto:bookings@jauhrifarmhouse.com" className="hover:text-foreground transition-colors">bookings@jauhrifarmhouse.com</a> 
            </div>
            <div>
              <h4 className="text-accent text-sm uppercase tracking-widest mb-1">Location</h4>
              <li className="leading-relaxed">Khushhalpur, Civil Lines,<br/>Moradabad-244001, U.P.</li>
            </div>
          </ul>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <motion.p
          className="text-muted-foreground text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Jauhri Farm House. All rights reserved.
        </motion.p>
        <motion.p
           className="text-muted-foreground text-sm"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
        >
          Developed by <Link href="https://travislord.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors font-medium">Travis Lord</Link> 🕸️
        </motion.p>
      </div>
    </motion.footer>
  )
}