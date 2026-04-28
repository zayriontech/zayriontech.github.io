import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./Section";
import { fadeUpSm, stagger, viewportOnce } from "./motion";

const tiers = [
  { name: "Basic System", price: "5jt", desc: "Cocok untuk dashboard sederhana, form internal, dan alur kerja yang masih manual." },
  { name: "Booking Engine", price: "10jt", desc: "Untuk villa, gym, atau bisnis jasa yang butuh booking, admin panel, dan notifikasi." },
  { name: "Custom Platform", price: "20jt+", desc: "Untuk bisnis yang butuh web app custom, multi-role, dan integrasi payment atau operasional." },
];

export const SystemPricing = () => (
  <section className="py-28 md:py-36">
    <div className="container">
      <SectionHeader
        eyebrow="System Investment"
        title={<>System & <span className="text-gradient-accent">Web App</span></>}
        description="Jika bisnis Anda sudah butuh lebih dari website company profile, berikut gambaran investasi awal untuk solusi custom."
      />

      <motion.div
        variants={stagger(0.12, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto"
      >
        {tiers.map((t) => (
          <motion.a
            key={t.name}
            href="#cta"
            variants={fadeUpSm}
            className="group rounded-3xl border border-border bg-gradient-card p-7 hover:border-primary/40 hover:shadow-soft-glow transition-all duration-500"
          >
            <div className="flex items-start justify-between">
              <h3 className="font-display text-xl font-semibold">{t.name}</h3>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            <div className="mt-8 pt-6 border-t border-border">
              <span className="text-xs text-muted-foreground">Mulai dari</span>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground">Rp</span>
                <span className="font-display text-3xl font-bold text-gradient">{t.price}</span>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <motion.p
        variants={fadeUpSm}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-10 text-center text-sm text-muted-foreground"
      >
        * Setiap sistem disesuaikan dengan kebutuhan bisnis dan alur operasional Anda
      </motion.p>
    </div>
  </section>
);
