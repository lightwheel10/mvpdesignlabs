'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const founder = {
  name: "Paras Tiwari",
  role: "Founder & CEO",
  image: "/images/founder.png",
  shortBio: "Building the future of digital product development",
  bio: "A passionate technologist and entrepreneur with a vision to revolutionize how startups build and scale their digital products. Combining deep technical expertise with business acumen to help founders turn their ideas into reality.",
  philosophy: "The hardest part of any journey is taking the first step. We're here to make that step easier, guiding you from idea to launch with expertise and dedication. Your vision deserves to be built.",
  social: {
    twitter: "https://twitter.com/parastiwari",
    linkedin: "https://linkedin.com/in/parastiwari",
    github: "https://github.com/parastiwari",
  },
};

export const Team = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      <div className="container relative">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Meet Our Founder
            </h2>
            <p className="text-xl text-muted-foreground">
              Driving innovation through technology
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border shadow-2xl">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-3xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-primary font-medium">{founder.role}</p>
                </div>
                <p className="text-2xl font-light text-muted-foreground">
                  {founder.shortBio}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {founder.bio}
                </p>
              </motion.div>

              {/* Enhanced Quote Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-4 -top-4 text-6xl text-primary/20">&ldquo;</div>
                <blockquote className="relative bg-primary/5 rounded-2xl p-6 border border-primary/10">
                  <p className="text-lg italic text-primary/80 leading-relaxed">
                    {founder.philosophy}
                  </p>
                  <div className="absolute -right-4 -bottom-4 text-6xl text-primary/20 leading-none">&rdquo;</div>
                </blockquote>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};