'use client';

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What makes MVP Forge different from other development agencies?",
    answer: "We combine technical expertise with business acumen to deliver not just code, but strategic solutions. Our focus is on building scalable MVPs that can evolve with your business needs, using modern tech stacks and best practices.",
  },
  {
    question: "What is your development process like?",
    answer: "We follow an agile methodology with weekly sprints and regular client touchpoints. Our process includes: 1) Initial consultation and requirements gathering, 2) Design and architecture planning, 3) Iterative development with continuous feedback, 4) Testing and quality assurance, 5) Deployment and post-launch support.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web technologies including Next.js, React, TypeScript, Node.js, and various cloud services. Our tech stack is carefully chosen to ensure scalability, performance, and maintainable code. We also have expertise in AI/ML integration and cloud infrastructure.",
  },
  {
    question: "How long does it typically take to build an MVP?",
    answer: "While the timeline varies based on project complexity, we typically deliver a basic MVP within 6-8 weeks. Our focus is on launching quickly with core features, then iterating based on user feedback. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer flexible maintenance packages to ensure your product continues to perform optimally. This includes bug fixes, security updates, performance optimization, and feature enhancements. We can also provide training for your team.",
  },
  {
    question: "Can you help with project planning and strategy?",
    answer: "Absolutely! Beyond development, we offer comprehensive project planning and strategic consulting. We help define your MVP scope, create technical architecture, plan scalability strategies, and provide insights on market positioning and user acquisition.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300"
              >
                <span className="font-semibold text-left text-lg">{faq.question}</span>
                <Plus
                  className={`w-5 h-5 text-primary transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 