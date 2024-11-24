'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BookingModal } from "@/components/booking-modal";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    label: 'Services',
    href: '/#services',
  },
  {
    label: 'Process',
    href: '/#process',
  },
  {
    label: 'Portfolio',
    href: '/#portfolio',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
];

export const Header = () => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">MVPDesignLabs</span>
          </Link>
          
          <nav className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-center space-x-6 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || 
                  (pathname.startsWith('/blog') && link.href === '/blog') ||
                  (pathname === '/' && link.href.startsWith('/#'));

                return (
                  <motion.div
                    key={link.href}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <Link
                      href={link.href}
                      className={`transition-colors hover:text-foreground/80 ${
                        isActive ? 'text-foreground' : 'text-foreground/60'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </nav>

          <div className="hidden md:block">
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90"
              onClick={() => setIsModalOpen(true)}
            >
              Contact Us
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t bg-background"
          >
            <nav className="container py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || 
                    (pathname.startsWith('/blog') && link.href === '/blog') ||
                    (pathname === '/' && link.href.startsWith('/#'));

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-4 py-2 text-sm font-medium transition-colors hover:text-foreground/80 ${
                        isActive ? 'text-foreground bg-accent' : 'text-foreground/60'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="pt-2 px-4">
                  <Button 
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsModalOpen(true);
                    }}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </header>
      
      <BookingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
