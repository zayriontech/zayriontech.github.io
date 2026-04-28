import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Layanan", href: "#solution" },
  { label: "Pricing", href: "#pricing" },
  { label: "System", href: "#system" },
  { label: "Process", href: "#process" },
];

export const Nav = () => (
  <motion.header
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="fixed top-0 inset-x-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl"
  >
    <div className="container flex h-16 items-center justify-between">
      <a href="#" className="font-display text-lg font-bold tracking-tight">
        ZAYRION<span className="text-primary">.</span>TECH
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
            {l.label}
          </a>
        ))}
      </nav>
      <Button asChild variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5">
        <a href="#cta">Mulai Proyek</a>
      </Button>
    </div>
  </motion.header>
);
