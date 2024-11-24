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
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Social */}
          <div className="space-y-4 text-center md:text-left">
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
          <nav className="flex gap-8">
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

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            {new Date().getFullYear()} MVPDesignLabs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}