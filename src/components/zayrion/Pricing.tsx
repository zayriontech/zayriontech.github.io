import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./Section";
import { fadeUpSm, scaleIn, stagger, viewportOnce } from "./motion";

const tiers = [
  {
    name: "Starter",
    price: "1.000.000",
    desc: "Untuk bisnis lokal yang butuh online presence cepat dan tetap terlihat rapi.",
    features: ["1 halaman website", "Template modern", "WhatsApp button", "Google Maps", "Domain 1 tahun", "1x revisi"],
    cta: "Cek Paket Starter",
    popular: false,
  },
  {
    name: "Growth",
    price: "2.000.000",
    desc: "Pilihan paling populer untuk UMKM.",
    features: ["3–5 halaman", "Semi custom design", "Struktur conversion", "WhatsApp + form", "2x revisi"],
    cta: "Cek Paket Growth",
    popular: true,
  },
  {
    name: "Pro",
    price: "3.500.000",
    desc: "Untuk brand yang ingin tampil lebih premium dan siap bersaing.",
    features: ["3–6 halaman", "Custom design", "UI premium", "Basic SEO", "2–3x revisi"],
    cta: "Cek Paket Premium",
    popular: false,
  },
];

export const Pricing = () => (
  <section id="pricing" className="py-28 md:py-36 relative">
    <div className="container">
      <SectionHeader
        eyebrow="Website Pricing"
        title={<>Pilih paket sesuai<br /><span className="text-gradient-accent">tahap bisnis Anda</span></>}
        description="Transparan, tanpa biaya tersembunyi. Semua paket sudah termasuk hosting setup."
      />

      <motion.div
        variants={stagger(0.15, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch"
      >
        {tiers.map((tier) => (
          <motion.div
            key={tier.name}
            variants={tier.popular ? scaleIn : fadeUpSm}
            className={`group relative rounded-3xl p-8 md:p-10 flex flex-col transition-all duration-500 ${
              tier.popular
                ? "bg-gradient-card border border-primary/40 shadow-glow lg:scale-105 lg:-my-2"
                : "bg-card/40 border border-border hover:border-primary/30 hover:shadow-soft-glow"
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-glow">
                  MOST POPULAR
                </span>
              </div>
            )}

            <div>
              <h3 className="font-display text-2xl font-bold">{tier.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tier.desc}</p>
            </div>

            <div className="mt-8 flex items-baseline gap-1">
              <span className="text-sm text-muted-foreground">Rp</span>
              <span className="font-display text-5xl font-bold text-gradient">{tier.price}</span>
            </div>

            <ul className="mt-8 space-y-3 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className={`h-5 w-5 shrink-0 mt-0.5 ${tier.popular ? "text-primary" : "text-foreground/70"}`} />
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className={`mt-10 rounded-full h-12 ${
                tier.popular
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              <a href="#cta">
                {tier.cta} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
