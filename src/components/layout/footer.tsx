'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/mvpdesignlabs',
    icon: Twitter,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/mvpdesignlabs',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/mvpdesignlabs',
    icon: Github,
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
      <div className="container py-8 md:py-12">
        <div className="flex flex-col gap-8">
          {/* Logo & Social */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="text-xl font-bold">
              MVPDesignLabs
            </Link>
            <div className="flex items-center gap-4">
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
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer px-2 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center md:text-left">
            {new Date().getFullYear()} MVPDesignLabs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}