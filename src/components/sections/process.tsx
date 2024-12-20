'use client';

import { motion } from "framer-motion";
import { Calendar, Code2, Rocket, Search, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery Call",
    duration: "Day 1",
    description: "Quick 30-minute call to understand your vision and requirements.",
    highlight: "Same-day scheduling",
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-500",
  },
  {
    icon: Sparkles,
    title: "Proposal & Setup",
    duration: "Day 2-3",
    description: "Receive detailed proposal, timeline, and project setup.",
    highlight: "24-hour turnaround",
    color: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-500",
  },
  {
    icon: Code2,
    title: "Rapid Development",
    duration: "Week 1-2",
    description: "Fast-paced development with daily updates and iterations.",
    highlight: "See progress daily",
    color: "from-pink-500/20 to-pink-600/20",
    iconColor: "text-pink-500",
  },
  {
    icon: Rocket,
    title: "Launch",
    duration: "Week 3",
    description: "Final testing, deployment, and go-live preparation.",
    highlight: "Ready for market",
    color: "from-orange-500/20 to-orange-600/20",
    iconColor: "text-orange-500",
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-16 md:py-24 relative">
      <div className="container px-4 md:px-6">
        {/* Header - adjusted spacing for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            A Process{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-500">
              Designed for Speed
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg px-4 md:px-0">
            We&apos;ve streamlined every step to deliver exceptional results in record time.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 hidden lg:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          <div className="space-y-12 md:space-y-20 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2,
                  ease: [0.21, 1.11, 0.81, 0.99]
                }}
                className={`relative flex flex-col lg:flex-row items-center gap-4 lg:gap-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Side - adjusted for mobile */}
                <motion.div 
                  className={`flex-1 text-center lg:text-left ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className={`inline-flex items-center gap-2 text-xs md:text-sm font-medium mb-3 md:mb-4 px-3 py-1 rounded-full
                    bg-gradient-to-r ${step.color}`}
                  >
                    <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                    {step.duration}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-3 md:mb-4 text-base md:text-lg max-w-md mx-auto lg:mx-0">
                    {step.description}
                  </p>
                  <p className={`font-medium ${step.iconColor} text-sm md:text-base`}>
                    {step.highlight}
                  </p>
                </motion.div>

                {/* Icon Circle - adjusted for mobile */}
                <motion.div 
                  className="relative order-first lg:order-none"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${step.color} 
                    flex items-center justify-center relative z-10`}
                  >
                    <step.icon className={`w-6 h-6 md:w-8 md:h-8 ${step.iconColor}`} />
                  </div>
                  {/* Connecting line for mobile */}
                  <motion.div 
                    className="absolute top-full left-1/2 w-px h-12 md:h-20 bg-gradient-to-b from-primary/20 to-transparent lg:hidden"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>

                {/* Empty div for layout balance */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 