'use client';

import { motion } from "framer-motion";
import { Check, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BookingModal } from "@/components/booking-modal";
import { useAnalytics } from '@/hooks/useAnalytics';

const pricingPlans = [
  {
    name: "MVP Development",
    price: {
      original: "3,500",
      discounted: "2,500"
    },
    duration: "one-time",
    description: "Get your MVP up and running with everything you need to launch",
    features: {
      included: [
        "Full MVP Development",
        "UI/UX Design",
        "Project Planning",
        "3 Months Support",
        "Source Code Ownership",
        "Technical Documentation",
        "Deployment & Setup",
        "SEO Optimization"
      ],
      notIncluded: [
        "24/7 Support",
        "Continuous Updates",
        "Performance Monitoring",
        "Security Patches",
        "Backup Management"
      ]
    },
    popular: true,
    limitedTime: false,
    cta: "Start Your Project",
  },
  {
    name: "Active Development",
    price: {
      original: "2,499",
      discounted: "1,499"
    },
    duration: "per month",
    description: "We'll continue building and improving your product",
    features: {
      included: [
        "Continuous Development",
        "Feature Enhancements",
        "24/7 Support",
        "Performance Monitoring",
        "Security Updates",
        "Daily Backups",
        "Bug Fixes",
        "Technical Consulting"
      ],
      notIncluded: [
        "Available as add-ons:",
        "Complex Feature Development",
        "UI/UX Redesigns",
        "Custom Integrations",
        "Enterprise Support"
      ]
    },
    popular: false,
    cta: "Continue Building",
  }
];

export const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { trackEvent } = useAnalytics();

  return (
    <>
      <section className="py-16 md:py-32 relative overflow-hidden">
        {/* Grid Background - adjusted for mobile */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        </div>

        <div className="container px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-3 md:space-y-4 mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              No hidden fees. Choose what works for your stage.
            </p>
          </motion.div>

          {/* Pricing Cards - adjusted for mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative p-6 md:p-8 rounded-2xl border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 ${
                  plan.popular ? 'border-primary shadow-lg shadow-primary/10 lg:scale-105' : 'border-border'
                }`}
              >
                {/* Limited Time / Popular Badge - adjusted for mobile */}
                {(plan.limitedTime || plan.popular) && (
                  <div className="absolute -top-3 left-4 px-3 md:px-4 py-1 bg-primary text-primary-foreground text-xs md:text-sm rounded-full">
                    {plan.limitedTime ? 'Limited Time Offer' : 'Most Popular'}
                  </div>
                )}

                <div className="space-y-6 md:space-y-8">
                  {/* Header */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="border-y border-border/50 py-4 md:py-6">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-4xl md:text-5xl font-bold">${plan.price.discounted}</span>
                      <span className="text-base md:text-lg line-through text-muted-foreground">${plan.price.original}</span>
                      <span className="text-sm md:text-base text-muted-foreground">{plan.duration}</span>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {plan.duration === 'one-time' ? 'Including 3 months support' : 'Cancel anytime'}
                    </p>
                  </div>

                  {/* Features - adjusted spacing for mobile */}
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <p className="text-xs md:text-sm font-medium mb-3 md:mb-4">What&apos;s included:</p>
                      <ul className="space-y-2 md:space-y-3">
                        {plan.features.included.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
                            <Check className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.features.notIncluded.length > 0 && (
                      <div>
                        <p className="text-xs md:text-sm font-medium mb-3 md:mb-4 text-muted-foreground">Not included:</p>
                        <ul className="space-y-2 md:space-y-3">
                          {plan.features.notIncluded.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground">
                              <X className="w-4 h-4 md:w-5 md:h-5 shrink-0 opacity-50" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* CTA Button - adjusted for mobile */}
                  <Button 
                    className="w-full group" 
                    size="lg"
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => {
                      trackEvent('Pricing', 'click', `Plan - ${plan.name}`);
                      setIsModalOpen(true);
                    }}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom Project CTA - adjusted for mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-20 text-center"
          >
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Need a custom solution?
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={() => {
                trackEvent('Pricing', 'click', 'Custom Solution');
                setIsModalOpen(true);
              }}
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      <BookingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}; 