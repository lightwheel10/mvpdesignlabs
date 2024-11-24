'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BookingModal } from "@/components/booking-modal";

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

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">MVPDesignLabs</span>
          </Link>
          
          <nav className="flex-1 flex items-center justify-center">
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

          <Button 
            size="sm"
            className="bg-primary hover:bg-primary/90"
            onClick={() => setIsModalOpen(true)}
          >
            Contact Us
          </Button>
        </div>
      </header>
      
      <BookingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
