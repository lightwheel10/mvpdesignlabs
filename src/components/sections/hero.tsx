'use client';

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code, Rocket, Layout } from "lucide-react";
import { useState, useEffect } from "react";
import { BookingModal } from "@/components/booking-modal";

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
      <section className="min-h-screen relative overflow-hidden flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-full blur-3xl opacity-20 animate-pulse delay-300" />
        </div>

        {/* Floating Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute inset-0 pointer-events-none"
        >
          <motion.div
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-[15%]"
          >
            <div className="bg-pink-500/10 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-pink-500/20">
              <Code className="w-8 h-8 text-pink-500" />
            </div>
          </motion.div>
          <motion.div
            animate={{
              y: [20, -20, 20],
              x: [10, -10, 10],
              rotate: [0, -10, 0],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-[15%]"
          >
            <div className="bg-purple-500/10 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-purple-500/20">
              <Rocket className="w-8 h-8 text-purple-500" />
            </div>
          </motion.div>
          <motion.div
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 left-[20%]"
          >
            <div className="bg-blue-500/10 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-blue-500/20">
              <Layout className="w-8 h-8 text-blue-500" />
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium border relative">
                {/* Glow effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary to-secondary rounded-full opacity-20" />
                
                {/* Content */}
                <div className="relative flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Transforming Ideas into Reality</span>
                </div>
              </div>
            </motion.div>

            {/* Heading with rotating text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative mb-8"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-plus-jakarta leading-[1.1] mb-6">
                <div className="text-foreground mb-2">We Craft Products That</div>
                <div className="text-foreground flex items-center justify-center">
                  Drive&nbsp;
                  <div className="inline-block relative" style={{ width: '300px' }}>
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
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From MVPs to enterprise solutions, we transform your vision into
                exceptional digital experiences that users love.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="group h-14 px-8 text-lg" onClick={() => setIsModalOpen(true)}>
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 text-lg"
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
