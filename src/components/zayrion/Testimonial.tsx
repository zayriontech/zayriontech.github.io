import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp, viewportOnce } from "./motion";

export const Testimonial = () => (
  <section className="py-28 md:py-36">
    <div className="container">
      <motion.figure
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="flex justify-center gap-1 mb-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
          ))}
        </div>
        <blockquote className="font-display text-2xl md:text-4xl font-medium leading-snug text-gradient">
          “Setelah website kami live, calon customer jadi lebih percaya dan inquiry yang masuk lewat WhatsApp terasa jauh lebih konsisten.”
        </blockquote>
        <figcaption className="mt-8 text-sm text-muted-foreground">
          <span className="text-foreground font-medium">Owner</span> · Bisnis Lokal
        </figcaption>
      </motion.figure>
    </div>
  </section>
);
