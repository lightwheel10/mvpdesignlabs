'use client';

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code, Rocket, Layout } from "lucide-react";
import { useState, useEffect } from "react";
import { BookingModal } from "@/components/booking-modal";
import { useAnalytics } from '@/hooks/useAnalytics';

const rotatingWords = [
  { text: "Innovation", color: "text-blue-500" },
  { text: "Excellence", color: "text-purple-500" },
  { text: "Success", color: "text-emerald-500" },
  { text: "Growth", color: "text-pink-500" },
  { text: "Impact", color: "text-indigo-500" },
];

export const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 3500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <section className="min-h-screen relative overflow-hidden flex items-center py-20 md:py-0">
        {/* Background Elements - adjusted for mobile */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-1/4 -right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-full blur-3xl opacity-20 animate-pulse delay-300" />
        </div>

        {/* Floating Icons - now with an additional bottom right icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Top left icon */}
          <motion.div
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] md:top-1/4 left-[15%]"
          >
            <div className="bg-pink-500/10 backdrop-blur-sm p-2 md:p-4 rounded-2xl shadow-lg border border-pink-500/20">
              <Code className="w-5 h-5 md:w-8 md:h-8 text-pink-500" />
            </div>
          </motion.div>

          {/* Top right icon */}
          <motion.div
            animate={{
              y: [20, -20, 20],
              x: [10, -10, 10],
              rotate: [0, -10, 0],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] md:top-1/3 right-[15%]"
          >
            <div className="bg-purple-500/10 backdrop-blur-sm p-2 md:p-4 rounded-2xl shadow-lg border border-purple-500/20">
              <Rocket className="w-5 h-5 md:w-8 md:h-8 text-purple-500" />
            </div>
          </motion.div>

          {/* Bottom left icon */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[10%] md:bottom-1/3 left-[20%]"
          >
            <div className="bg-blue-500/10 backdrop-blur-sm p-2 md:p-4 rounded-2xl shadow-lg border border-blue-500/20">
              <Layout className="w-5 h-5 md:w-8 md:h-8 text-blue-500" />
            </div>
          </motion.div>

          {/* New bottom right icon */}
          <motion.div
            animate={{
              y: [15, -15, 15],
              x: [8, -8, 8],
              rotate: [0, -8, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[10%] md:bottom-1/3 right-[20%]"
          >
            <div className="bg-emerald-500/10 backdrop-blur-sm p-2 md:p-4 rounded-2xl shadow-lg border border-emerald-500/20">
              <Sparkles className="w-5 h-5 md:w-8 md:h-8 text-emerald-500" />
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge - adjusted padding for mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 md:mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium border relative">
                {/* Glow effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary to-secondary rounded-full opacity-20" />
                
                {/* Content */}
                <div className="relative flex items-center gap-1 md:gap-2">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                  <span className="text-foreground">Transforming Ideas into Reality</span>
                </div>
              </div>
            </motion.div>

            {/* Heading with rotating text - adjusted for mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative mb-6 md:mb-8"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-plus-jakarta leading-[1.1] mb-4 md:mb-6">
                <div className="text-foreground mb-2">We Craft Products That</div>
                <div className="text-foreground flex items-center justify-center">
                  Drive&nbsp;
                  <div className="inline-block relative w-[200px] md:w-[300px]">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={rotatingWords[wordIndex].text}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{
                          y: { type: "spring", stiffness: 100, damping: 20 },
                          opacity: { duration: 0.2 }
                        }}
                        className={`absolute left-0 ${rotatingWords[wordIndex].color} font-bold`}
                      >
                        {rotatingWords[wordIndex].text}
                      </motion.span>
                    </AnimatePresence>
                    <span className="invisible font-bold">{rotatingWords[0].text}</span>
                  </div>
                </div>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 md:px-0">
                From MVPs to enterprise solutions, we transform your vision into
                exceptional digital experiences that users love.
              </p>
            </motion.div>

            {/* CTA Buttons - adjusted for mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4 md:px-0"
            >
              <Button 
                size="lg" 
                className="group h-12 md:h-14 px-6 md:px-8 text-base md:text-lg w-full sm:w-auto" 
                onClick={() => {
                  trackEvent('CTA', 'click', 'Hero - Start Your Project');
                  setIsModalOpen(true);
                }}
              >
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-12 md:h-14 px-6 md:px-8 text-base md:text-lg w-full sm:w-auto"
                onClick={() => {
                  document.getElementById('portfolio')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                View Our Work
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
