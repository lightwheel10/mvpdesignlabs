'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Deleg8 Agency",
    description: "Transform Ideas. Create Impact. Think Differently. A modern agency focused on delegation and automation solutions.",
    category: "Landing Page",
    image: "/images/deleg8img.png",
    link: "https://deleg8.vercel.app/",
    color: "from-blue-500/20 to-purple-500/20",
    techStack: [
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Tailwind", icon: "/icons/tailwind.svg" },
    ]
  },
  {
    title: "NeuroTalent Connect",
    description: "Recruitment platform designed specifically for neurodivergent individuals, making job hunting more accessible.",
    category: "Web Application",
    image: "https://via.placeholder.com/1200x600/1a1a1a/ffffff",
    link: "https://neurodivergent-platform.web.app/",
    color: "from-purple-500/20 to-pink-500/20",
    techStack: [
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Firebase", icon: "/icons/firebase.svg" },
    ]
  },
  {
    title: "NutricalAI",
    description: "Say goodbye to manual food tracking. Simply tell our AI what you're eating - in any language - and get instant nutritional insights.",
    category: "AI Application",
    image: "/images/nutricalaiimg.png",
    link: "https://nutricalai.vercel.app/",
    color: "from-emerald-500/20 to-teal-500/20",
    techStack: [
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Supabase", icon: "/icons/supabase.svg" },
    ]
  },
  {
    title: "Twitter AI Reply",
    description: "Chrome extension that enhances Twitter engagement with AI-powered reply suggestions.",
    category: "Chrome Extension",
    image: "/images/chromeextensionimg.png",
    link: "",
    color: "from-orange-500/20 to-red-500/20",
    techStack: [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "OpenAI", icon: "/icons/openai.svg" },
    ]
  },
  {
    title: "Medical Bill AI",
    description: "AI-powered medical bill analysis tool that helps users understand their medical bills instantly, providing clear explanations and cost breakdowns.",
    category: "AI Application",
    image: "/images/medicalbilaiimg.png",
    link: "https://medical-bill-ai.vercel.app/",
    color: "from-cyan-500/20 to-blue-500/20",
    techStack: [
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Google", icon: "/icons/google.svg" },
    ]
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent blur-2xl" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-secondary/10 via-secondary/5 to-transparent blur-2xl" />
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover how we&apos;ve helped businesses transform their ideas into successful digital products
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-7/12">
                <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-all duration-700 ease-in-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay opacity-60 transition-opacity duration-700 ease-in-out group-hover:opacity-40`} 
                  />
                  {/* Show overlay only if project has a link */}
                  {project.link && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-black/40">
                      <div className="transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(project.link, '_blank', 'noopener,noreferrer');
                          }}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-background/90 rounded-full text-sm font-medium hover:bg-background/100 transition-colors"
                        >
                          View Project 
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-5/12 space-y-6">
                <div className="space-y-4">
                  <div className="text-sm font-medium text-muted-foreground">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold transform transition-transform duration-300 hover:translate-x-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex items-center gap-3">
                  {project.techStack.map((tech) => (
                    <div 
                      key={tech.name}
                      className="relative w-8 h-8 bg-background/50 rounded-full p-1.5
                        hover:bg-background/80 transition-all duration-300 hover:scale-110"
                      title={tech.name}
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 