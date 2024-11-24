'use client';

import { motion } from "framer-motion";
import { Chrome, Smartphone, Layout, Database, Rocket, Code } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Transform your idea into a working product with our rapid MVP development process.",
    color: "from-blue-500 to-indigo-500",
    shadowColor: "shadow-blue-500/25",
    link: "#contact",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description: "Convert visitors into customers with our high-converting, beautiful landing pages.",
    color: "from-purple-500 to-pink-500",
    shadowColor: "shadow-purple-500/25",
    link: "#contact",
  },
  {
    icon: Chrome,
    title: "Chrome Extensions",
    description: "Extend browser functionality with custom Chrome extensions that solve real problems.",
    color: "from-pink-500 to-rose-500",
    shadowColor: "shadow-pink-500/25",
    link: "#contact",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Create stunning mobile experiences for iOS and Android platforms.",
    color: "from-orange-500 to-red-500",
    shadowColor: "shadow-orange-500/25",
    link: "#contact",
  },
  {
    icon: Database,
    title: "Dashboards",
    description: "Visualize your data with interactive, real-time dashboard solutions.",
    color: "from-green-500 to-emerald-500",
    shadowColor: "shadow-green-500/25",
    link: "#contact",
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored solutions for your unique business needs and challenges.",
    color: "from-cyan-500 to-blue-500",
    shadowColor: "shadow-cyan-500/25",
    link: "#contact",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 relative">
      <div className="container px-4 md:px-6">
        {/* Decorative Elements - adjusted for mobile */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl 
            top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20" />
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Header - adjusted for mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold px-4 md:px-0">
              Solutions That{" "}
              <span className="inline-block">Drive Growth</span>
            </h2>
          </motion.div>

          {/* Services Grid - adjusted for mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: [0.21, 1.11, 0.81, 0.99]
                }}
              >
                <div className="relative group">
                  {/* Service Card - adjusted padding and sizing for mobile */}
                  <div className={`
                    relative z-10 p-6 md:p-8 rounded-2xl backdrop-blur-sm
                    bg-gradient-to-b from-white/10 to-white/5
                    border border-white/10 hover:border-white/20
                    transition-all duration-500 ease-out
                    hover:translate-y-[-5px] hover:shadow-2xl
                    ${service.shadowColor}
                  `}>
                    {/* Icon Container - adjusted sizing for mobile */}
                    <div className={`
                      mb-4 md:mb-6 inline-flex p-2.5 md:p-3 rounded-xl
                      bg-gradient-to-br ${service.color}
                      shadow-lg group-hover:shadow-2xl
                      transition-all duration-500
                      group-hover:scale-110
                    `}>
                      <service.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>

                    {/* Content - adjusted text sizes for mobile */}
                    <div className="space-y-3 md:space-y-4">
                      <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {service.description}
                      </p>
                    </div>

                    {/* Hover Effect Line - kept unchanged */}
                    <div className={`
                      absolute bottom-0 left-0 right-0 h-1 rounded-full 
                      bg-gradient-to-r ${service.color} opacity-0 
                      group-hover:opacity-100 transition-all duration-500
                    `} />
                  </div>

                  {/* Background Glow - kept unchanged */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 
                    transition-opacity duration-500 -z-10 blur-xl
                    bg-gradient-to-r ${service.color}
                  `} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
