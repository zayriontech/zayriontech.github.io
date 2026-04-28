import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUpSm, viewportOnce } from "./motion";

export const TrustStrip = () => (
  <section className="py-10 border-y border-border/50 bg-card/20">
    <motion.div
      variants={fadeUpSm}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="container flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground"
    >
      <span>Dipercaya <span className="text-foreground font-medium">40+ bisnis & founder</span></span>
      <span className="hidden sm:block h-4 w-px bg-border" />
      <span className="flex items-center gap-2">
        <span className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
          ))}
        </span>
        rata-rata <span className="text-foreground font-medium">5.0</span>
      </span>
    </motion.div>
  </section>
);
