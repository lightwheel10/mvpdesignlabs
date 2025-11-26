import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { JsonLd } from "@/components/json-ld";

// Lazy load below-the-fold sections for better performance
const TechStack = dynamic(() => import("@/components/sections/tech-stack").then(mod => ({ default: mod.TechStack })), {
  loading: () => <div className="min-h-[400px]" />,
});

const Process = dynamic(() => import("@/components/sections/process").then(mod => ({ default: mod.Process })), {
  loading: () => <div className="min-h-[400px]" />,
});

const Services = dynamic(() => import("@/components/sections/services").then(mod => ({ default: mod.Services })), {
  loading: () => <div className="min-h-[400px]" />,
});

const Portfolio = dynamic(() => import("@/components/sections/portfolio").then(mod => ({ default: mod.Portfolio })), {
  loading: () => <div className="min-h-[400px]" />,
});

const Testimonials = dynamic(() => import("@/components/sections/testimonials").then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="min-h-[400px]" />,
});

const Pricing = dynamic(() => import("@/components/sections/pricing").then(mod => ({ default: mod.Pricing })), {
  loading: () => <div className="min-h-[400px]" />,
});

const Team = dynamic(() => import("@/components/sections/team").then(mod => ({ default: mod.Team })), {
  loading: () => <div className="min-h-[400px]" />,
});

const FAQ = dynamic(() => import("@/components/sections/faq").then(mod => ({ default: mod.FAQ })), {
  loading: () => <div className="min-h-[400px]" />,
});

const ContactCTA = dynamic(() => import("@/components/sections/contact-cta").then(mod => ({ default: mod.ContactCTA })), {
  loading: () => <div className="min-h-[400px]" />,
});

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <JsonLd />
      <AnimatedGradient />
      <Hero />
      <TechStack />
      <Process />
      <Services />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Team />
      <FAQ />
      <ContactCTA />
    </main>
  );
}