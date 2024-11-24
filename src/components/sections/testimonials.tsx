'use client';

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "David Chen",
    role: "CEO, Tech Startup",
    content: "MVPDesignLabs didn't just build our product; they transformed our vision into reality. Their approach to development and attention to user experience helped us secure our first round of funding within weeks of launch.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=90",
    company: "InnovateTech",
  },
  {
    name: "Emma Rodriguez",
    role: "Founder, Digital Agency",
    content: "What sets MVPDesignLabs apart is their strategic thinking. They challenged our assumptions, refined our concept, and delivered a product that exceeded market expectations. The ROI has been exceptional.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=90",
    company: "DigitalCraft",
  },
  {
    name: "James Wilson",
    role: "Product Director",
    content: "Working with MVPDesignLabs felt like having a technical co-founder. Their expertise in both business and technology helped us pivot quickly when needed and scale efficiently as we grew.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=90",
    company: "ScaleUp Solutions",
  },
  {
    name: "Sophia Patel",
    role: "CTO, HealthTech Platform",
    content: "In the highly regulated healthcare space, MVPDesignLabs's attention to security and compliance while maintaining rapid development pace was impressive. They helped us launch our platform 2 months ahead of schedule.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=90",
    company: "MedConnect Health",
  },
  {
    name: "Marcus Thompson",
    role: "Head of Innovation",
    content: "The team's expertise in AI and machine learning was crucial for our project. They didn't just implement our requirements - they brought innovative solutions that made our product stand out in a crowded market.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=90",
    company: "FutureTech AI",
  }
];
export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const paginate = (newDirection: number) => {
    setCurrentIndex((prevIndex) => (
      prevIndex + newDirection < 0 
        ? testimonials.length - 1 
        : prevIndex + newDirection >= testimonials.length 
          ? 0 
          : prevIndex + newDirection
    ));
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        <div 
          className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left Column - Content - adjusted for mobile */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-center lg:text-left">
                Client Success Stories
              </h2>
              <p className="text-muted-foreground text-base md:text-lg text-center lg:text-left">
                Real experiences from businesses we&apos;ve helped transform
              </p>
            </motion.div>

            <div className="relative h-[250px] md:h-[300px]">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <blockquote className="space-y-6 md:space-y-8">
                    <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-center lg:text-left">
                      &ldquo;{testimonials[currentIndex].content}&rdquo;
                    </p>
                    <footer className="flex items-center gap-4 justify-center lg:justify-start">
                      <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border border-border">
                        <Image
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-base md:text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-muted-foreground text-sm md:text-base">
                          {testimonials[currentIndex].role}
                        </div>
                        <div className="text-primary text-xs md:text-sm">
                          {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation - adjusted for mobile */}
            <div className="flex items-center gap-4 px-4 md:px-0">
              <button
                onClick={() => {
                  paginate(-1);
                  setIsAutoPlaying(false);
                }}
                className="p-1.5 md:p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <div className="flex-1 flex items-center gap-1.5 md:gap-2">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                      i === currentIndex ? 'bg-primary' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => {
                  paginate(1);
                  setIsAutoPlaying(false);
                }}
                className="p-1.5 md:p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>

          {/* Right Column - Featured Image - adjusted for mobile */}
          <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] lg:h-[600px]">
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden bg-background/5">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={false}
                  animate={{
                    scale: i === currentIndex ? 1 : 0.95,
                    opacity: i === currentIndex ? 1 : 0,
                    zIndex: i === currentIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={t.image}
                    alt=""
                    fill
                    className="object-cover rounded-2xl md:rounded-3xl"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 