import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, viewportOnce } from "./motion";

export const Transition = () => (
  <section className="py-28 md:py-36 relative">
    <div className="container">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative max-w-5xl mx-auto rounded-[2rem] border border-border bg-gradient-card p-10 md:p-16 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-60 pointer-events-none" />
        <div className="relative">
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-gradient">
            Website dulu untuk bikin customer percaya.<br />
            Lalu naik ke <span className="text-gradient-accent">sistem saat bisnis makin sibuk.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Banyak bisnis cukup mulai dari website company profile atau landing page. Saat inquiry, booking, dan operasional mulai ramai, kami bisa lanjut bantu bangun sistem yang lebih efisien.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 rounded-full h-12 px-7 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
          >
            <a href="#system">
              Lihat Solusi Lanjutan <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);
