'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  {
    name: "Next.js",
    icon: "/icons/nextjs.svg",
    color: "group-hover:text-white dark:group-hover:text-white",
    bg: "group-hover:bg-black/10 dark:group-hover:bg-white/10",
  },
  {
    name: "React",
    icon: "/icons/react.svg",
    color: "group-hover:text-[#61DAFB]",
    bg: "group-hover:bg-[#61DAFB]/10",
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript.svg",
    color: "group-hover:text-[#3178C6]",
    bg: "group-hover:bg-[#3178C6]/10",
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwind.svg",
    color: "group-hover:text-[#38BDF8]",
    bg: "group-hover:bg-[#38BDF8]/10",
  },
  {
    name: "Shadcn/ui",
    icon: "/icons/shadcn.svg",
    color: "group-hover:text-white",
    bg: "group-hover:bg-zinc-900/50",
  },
  {
    name: "Supabase",
    icon: "/icons/supabase.svg",
    color: "group-hover:text-[#3ECF8E]",
    bg: "group-hover:bg-[#3ECF8E]/10",
  },
  {
    name: "Vercel",
    icon: "/icons/vercel.svg",
    color: "group-hover:text-white",
    bg: "group-hover:bg-zinc-900/50",
  },
];

export const TechStack = () => {
  return (
    <section className="py-24 container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Built with Modern Technology
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We leverage the latest and most powerful tools in the industry to ensure your product is fast, secure, and scalable from day one.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group flex flex-col items-center gap-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm transition-all duration-300 
              hover:translate-y-[-4px] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] 
              ${tech.bg}`}
            style={{
              boxShadow: '0 10px 30px -15px rgba(0,0,0,0.3)',
              transform: 'translateY(0)',
            }}
          >
            <div className="relative w-12 h-12">
              <Image
                src={tech.icon}
                alt={tech.name}
                fill
                className="object-contain"
              />
            </div>
            <span className={`text-sm font-medium ${tech.color} transition-colors`}>
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}; 