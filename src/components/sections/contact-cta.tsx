'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useState } from "react";
import { BookingModal } from "@/components/booking-modal";
import { useAnalytics } from '@/hooks/useAnalytics';

export const ContactCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { trackEvent } = useAnalytics();

  return (
    <>
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
            className="relative max-w-3xl mx-auto"
          >
            <div className="relative p-8 md:p-12 rounded-3xl border bg-card/50 backdrop-blur-sm text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                  Ready to Build Your MVP?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Book a free 30-minute consultation
                </p>
              </div>

              <Button 
                size="lg" 
                className="group h-14 px-8 text-lg"
                onClick={() => {
                  trackEvent('CTA', 'click', 'Footer - Schedule Call');
                  setIsModalOpen(true);
                }}
              >
                Schedule a Call
                <Calendar className="ml-2 w-5 h-5 transition-transform group-hover:scale-110" />
              </Button>
            </div>
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