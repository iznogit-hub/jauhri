"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Galleries", href: "/showcase" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isMobile = window.innerWidth < 768 // Check if device is mobile
      
      // Update scrolled state
      if (currentScrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Handle header visibility - only hide after 20px scroll on mobile
      if (isMobile) {
        if (currentScrollY > 20 && currentScrollY > lastScrollY) {
          // Scrolling down and past 20px
          setIsVisible(false)
        } else {
          // Scrolling up or before 20px
          setIsVisible(true)
        }
      } else {
        // Desktop behavior
        if (currentScrollY > lastScrollY) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-2 left-2 right-2 z-50 transition-all duration-300 header-height ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm border border-border/50" : "bg-transparent"
      } ${!isVisible ? "-translate-y-[80px]" : "translate-y-0"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link
              href="/"
              className={`font-old-london p-3 text-3xl tracking-widest flex items-center justify-center rounded-full transition-colors ${
                isScrolled || pathname !== "/" ? "text-foreground" : "text-foreground drop-shadow-md"
              }`}
            >
              JFH
            </Link>
          </div>
        

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 items-center p-3 h-10 rounded-full bg-background/90 border border-border shadow-soft transition-colors">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  pathname === item.href ? "text-accent font-medium border-b-[1px] border-accent" : "hover:text-accent/80"
                } text-foreground px-2 py-1 text-sm tracking-wider uppercase transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle at the end of the header */}
          <div className="flex-shrink-0 md:block toggle-container">
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center justify-center rounded-full bg-background/90 border border-border shadow-soft transition-colors">
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="button"
              className={`text-foreground p-2`}
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-lg flex flex-col min-h-screen rounded-3xl border-border border-[1px] "
          >
            <div className="p-4 flex justify-end">
              <motion.button
                whileTap={{ scale: 0.95 }}
                type="button"
                className="text-foreground p-2 bg-secondary rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </motion.button>
            </div>
            <nav className="flex-1 flex flex-col items-center pt-24 space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 text-4xl font-old-london tracking-wider ${
                    pathname === item.href ? "text-accent font-medium" : "text-foreground hover:text-accent"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-8">
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}