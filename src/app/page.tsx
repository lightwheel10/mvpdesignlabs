import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { TechStack } from "@/components/sections/tech-stack";
import { Process } from "@/components/sections/process";
import { Portfolio } from "@/components/sections/portfolio";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Team } from "@/components/sections/team";
import { FAQ } from "@/components/sections/faq";
import { ContactCTA } from "@/components/sections/contact-cta";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { JsonLd } from "@/components/json-ld";

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