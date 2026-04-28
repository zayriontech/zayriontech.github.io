import { motion } from "framer-motion";
import { X } from "lucide-react";
import { SectionHeader } from "./Section";
import { fadeUpSm, stagger, viewportOnce } from "./motion";

const before = [
  "Tidak punya website profesional",
  "Hanya mengandalkan Instagram",
  "Customer bingung mencari info",
  "Terlihat kalah dari kompetitor",
];

const after = [
  "Booking manual tidak efisien",
  "Data tidak terorganisir",
  "Operasional mulai berantakan",
];

const Item = ({ text }: { text: string }) => (
  <motion.li
    variants={fadeUpSm}
    className="flex items-start gap-3 rounded-2xl border border-border bg-card/40 p-5 backdrop-blur"
  >
    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
      <X className="h-3.5 w-3.5" />
    </span>
    <span className="text-foreground/90">{text}</span>
  </motion.li>
);

export const Problem = () => (
  <section className="py-28 md:py-36">
    <div className="container">
      <SectionHeader
        eyebrow="The Problem"
        title={<>Banyak bisnis kehilangan peluang<br />karena <span className="text-gradient-accent">digital presence yang lemah</span></>}
      />

      <motion.ul
        variants={stagger(0.08, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
      >
        {before.map((t) => <Item key={t} text={t} />)}
      </motion.ul>

      <motion.p
        variants={fadeUpSm}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-16 text-center text-sm uppercase tracking-[0.2em] text-muted-foreground"
      >
        Saat bisnis mulai berkembang
      </motion.p>

      <motion.ul
        variants={stagger(0.08, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
      >
        {after.map((t) => <Item key={t} text={t} />)}
      </motion.ul>
    </div>
  </section>
);
