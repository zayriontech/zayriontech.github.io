import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { easeCinematic, fadeUpSm, stagger } from "./motion";

const headlineLines = [
  "Website untuk Coffee Shop, Gym, Villa,",
  <>dan Bisnis Lokal yang Ingin <span className="text-gradient-accent">Terlihat Lebih Profesional</span></>,
  "dan Lebih Mudah Mendapatkan Inquiry",
];

const trust = ["Cepat Online", "WhatsApp Direct", "Mudah Ditemukan", "Siap Naik Kelas"];

export const Hero = () => (
  <section className="relative pt-40 pb-32 overflow-hidden">
    <div className="absolute inset-0 grid-bg pointer-events-none" />
    <div className="absolute inset-x-0 top-0 h-[800px] bg-gradient-hero pointer-events-none" />

    <div className="container relative">
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger(0.18, 0.1)}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.div
          variants={fadeUpSm}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs text-muted-foreground mb-8 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Website & Sistem untuk bisnis lokal
        </motion.div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-gradient">
          {headlineLines.map((line, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 1, ease: easeCinematic } },
              }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          variants={fadeUpSm}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          ZAYRION TECH membantu bisnis lokal punya website yang bikin calon customer lebih percaya,
          lebih cepat menghubungi Anda, dan siap dikembangkan saat operasional mulai ramai.
        </motion.p>

        <motion.div variants={fadeUpSm} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 px-7 text-base shadow-glow"
          >
            <a href="#cta">
              Konsultasi Gratis <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full h-12 px-7 text-base border-border bg-card/50 backdrop-blur hover:bg-card"
          >
            <a href="#pricing">
              <MessageCircle className="mr-2 h-4 w-4" /> Cek Paket Website
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full h-12 px-7 text-base border-border bg-card/50 backdrop-blur hover:bg-card"
          >
            <a href="#cta">
              <Calendar className="mr-2 h-4 w-4" /> Booking Discovery Call
            </a>
          </Button>
        </motion.div>

        <motion.ul
          variants={stagger(0.08, 0.4)}
          initial="hidden"
          animate="show"
          className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
        >
          {trust.map((t) => (
            <motion.li key={t} variants={fadeUpSm} className="flex items-center gap-2">
              <span className="text-primary">✔</span> {t}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  </section>
);
