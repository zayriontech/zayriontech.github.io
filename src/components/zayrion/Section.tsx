import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp, viewportOnce } from "./motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export const SectionHeader = ({ eyebrow, title, description, align = "center" }: SectionHeaderProps) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={viewportOnce}
    className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    {eyebrow && (
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">{eyebrow}</p>
    )}
    <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1] text-gradient">
      {title}
    </h2>
    {description && (
      <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">{description}</p>
    )}
  </motion.div>
);
