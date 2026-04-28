import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, viewportOnce } from "./motion";

export const FinalCTA = () => (
  <section id="cta" className="py-28 md:py-36 relative">
    <div className="container">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative max-w-5xl mx-auto rounded-[2rem] border border-primary/30 bg-gradient-card p-12 md:p-20 text-center overflow-hidden shadow-glow"
      >
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[80%] rounded-full bg-primary/20 blur-3xl pointer-events-none" />

        <div className="relative">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-gradient">
            Mulai dari website yang bikin bisnis dipercaya.<br />
            Lanjut ke <span className="text-gradient-accent">sistem saat bisnis siap berkembang.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Konsultasi awal gratis untuk bantu memilih apakah bisnis Anda lebih cocok mulai dari website, booking system, atau solusi custom lainnya.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full h-12 px-7 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
            >
              <a href="https://wa.me/" target="_blank" rel="noreferrer">
                Konsultasi Gratis <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full h-12 px-7 border-border bg-card/50 backdrop-blur hover:bg-card"
            >
              <a href="mailto:hello@zayrion.tech">
                <Calendar className="mr-2 h-4 w-4" /> Jadwalkan Discovery Call
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
