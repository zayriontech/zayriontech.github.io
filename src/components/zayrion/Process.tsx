import { motion } from "framer-motion";
import { Search, Pencil, Code, Rocket } from "lucide-react";
import { SectionHeader } from "./Section";
import { fadeUpSm, stagger, viewportOnce } from "./motion";

const steps = [
  { n: "01", icon: Search, title: "Discover", desc: "Kami pelajari bisnis & target Anda secara mendalam." },
  { n: "02", icon: Pencil, title: "Design", desc: "Wireframe & UI premium yang fokus pada conversion." },
  { n: "03", icon: Code, title: "Build", desc: "Development cepat dengan stack modern & scalable." },
  { n: "04", icon: Rocket, title: "Launch", desc: "Deploy, optimasi performa, dan siap dipakai." },
];

export const Process = () => (
  <section id="process" className="py-28 md:py-36">
    <div className="container">
      <SectionHeader eyebrow="How We Work" title={<>Process yang <span className="text-gradient-accent">terstruktur</span></>} />

      <motion.div
        variants={stagger(0.1, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto"
      >
        {steps.map(({ n, icon: Icon, title, desc }) => (
          <motion.div
            key={n}
            variants={fadeUpSm}
            className="relative rounded-3xl border border-border bg-card/40 p-7 hover:border-primary/30 transition-all duration-500"
          >
            <span className="font-display text-xs text-primary/70 tracking-widest">{n}</span>
            <Icon className="h-7 w-7 mt-4 text-foreground/80" />
            <h3 className="font-display text-xl font-semibold mt-4">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
