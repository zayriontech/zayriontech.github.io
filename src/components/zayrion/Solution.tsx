import { motion } from "framer-motion";
import { Check, Sparkles, MessageSquare, Target, Layers } from "lucide-react";
import { SectionHeader } from "./Section";
import { fadeUpSm, stagger, viewportOnce } from "./motion";

const points = [
  { icon: Sparkles, title: "Bikin bisnis terlihat lebih meyakinkan", desc: "Tampilan rapi dan profesional agar coffee shop, gym, villa, atau bisnis lokal Anda lebih dipercaya." },
  { icon: MessageSquare, title: "Calon customer lebih mudah menghubungi", desc: "WhatsApp, form, maps, dan CTA ditempatkan di titik yang paling sering dilihat visitor." },
  { icon: Target, title: "Bukan cuma cantik, tapi membantu closing", desc: "Struktur halaman dibuat supaya orang cepat paham layanan Anda lalu lanjut bertanya atau booking." },
  { icon: Layers, title: "Siap naik ke sistem saat bisnis berkembang", desc: "Mulai dari website dulu, lalu lanjut ke booking system, dashboard, atau web app saat kebutuhan bertambah." },
];

export const Solution = () => (
  <section id="solution" className="py-28 md:py-36 relative">
    <div className="container">
      <SectionHeader
        eyebrow="Our Approach"
        title={<>Bukan cuma website yang bagus,<br />tapi <span className="text-gradient-accent">website yang membantu bisnis jalan</span></>}
      />

      <motion.div
        variants={stagger(0.1, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto"
      >
        {points.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={fadeUpSm}
            className="group relative rounded-3xl border border-border bg-gradient-card p-7 md:p-8 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-soft-glow"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-semibold flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> {title}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
