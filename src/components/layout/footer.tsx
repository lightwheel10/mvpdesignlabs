'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Add props interface for the XIcon
interface XIconProps {
  className?: string;
}

// Update XIcon to accept className prop
const XIcon = ({ className }: XIconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  {
    name: 'X (Twitter)',
    href: 'https://twitter.com/parastiwaari',
    icon: XIcon,
  },
];

const footerLinks = [
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Process',
    href: '#process',
  },
  {
    label: 'Portfolio',
    href: '#portfolio',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
];

export const Footer = () => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    } else {
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <footer className="border-t">
      <div className="container py-4">
        <div className="grid grid-cols-3 items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xl font-bold">
              MVPDesignLabs
            </Link>
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
                <span className="sr-only">{social.name}</span>
              </motion.a>
            ))}
          </div>
          
          <nav className="flex items-center justify-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-sm text-muted-foreground text-right">
            {new Date().getFullYear()} MVPDesignLabs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}