import { motion } from "framer-motion";
import { Calendar, LayoutDashboard, Users, Wrench, Code2, Coffee, Dumbbell, Hotel, Building2 } from "lucide-react";
import { SectionHeader } from "./Section";
import { fadeUpSm, stagger, viewportOnce } from "./motion";

const features = [
  { icon: Calendar, label: "Booking System" },
  { icon: LayoutDashboard, label: "Dashboard Admin" },
  { icon: Users, label: "CRM Sederhana" },
  { icon: Wrench, label: "Internal Tools" },
  { icon: Code2, label: "Custom Web App" },
];

const useCases = [
  { icon: Coffee, title: "Coffee Shop", desc: "Online menu, promo musiman, membership, sampai pencatatan order yang lebih rapi." },
  { icon: Dumbbell, title: "Gym", desc: "Pendaftaran member, booking kelas, reminder, dan dashboard admin dalam satu alur." },
  { icon: Hotel, title: "Villa / Resort", desc: "Booking langsung dari website, ketersediaan kamar, dan follow up tamu lebih praktis." },
  { icon: Building2, title: "Bisnis Lokal", desc: "Dashboard internal, formulir operasional, dan alur kerja yang tadinya manual jadi lebih efisien." },
];

export const SystemSection = () => (
  <section id="system" className="py-28 md:py-36">
    <div className="container">
      <SectionHeader
        eyebrow="Web App & System"
        title={<>Butuh Lebih dari<br /><span className="text-gradient-accent">Website?</span></>}
        description="Kalau bisnis Anda mulai ramai, website saja sering tidak cukup. Di tahap ini, kami bantu lanjutkan ke sistem yang mempermudah booking, operasional, dan kontrol data."
      />

      <motion.div
        variants={stagger(0.08, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
      >
        {features.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            variants={fadeUpSm}
            className="flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-2.5 text-sm backdrop-blur hover:border-primary/40 transition-colors"
          >
            <Icon className="h-4 w-4 text-primary" />
            {label}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={stagger(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
      >
        {useCases.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={fadeUpSm}
            className="rounded-3xl border border-border bg-gradient-card p-6 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
          >
            <Icon className="h-7 w-7 text-primary mb-4" />
            <h3 className="font-display text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
