import { Nav } from "@/components/zayrion/Nav";
import { Hero } from "@/components/zayrion/Hero";
import { TrustStrip } from "@/components/zayrion/TrustStrip";
import { Problem } from "@/components/zayrion/Problem";
import { Solution } from "@/components/zayrion/Solution";
import { Pricing } from "@/components/zayrion/Pricing";
import { Transition } from "@/components/zayrion/Transition";
import { SystemSection } from "@/components/zayrion/SystemSection";
import { Process } from "@/components/zayrion/Process";
import { SystemPricing } from "@/components/zayrion/SystemPricing";
import { Testimonial } from "@/components/zayrion/Testimonial";
import { FinalCTA } from "@/components/zayrion/FinalCTA";
import { Footer } from "@/components/zayrion/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Zayrion Tech — Premium Web & System Studio";
    const desc = "Website premium yang membuat bisnis Anda dipercaya — dan siap berkembang menjadi sistem digital saat bisnis Anda scale.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <TrustStrip />
      <Problem />
      <Solution />
      <Pricing />
      <Transition />
      <SystemSection />
      <Process />
      <SystemPricing />
      <Testimonial />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
