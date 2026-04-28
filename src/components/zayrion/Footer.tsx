export const Footer = () => (
  <footer className="border-t border-border/50 py-14 mt-10">
    <div className="container grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <p className="font-display text-lg font-bold tracking-tight">
          ZAYRION<span className="text-primary">.</span>TECH
        </p>
        <p className="mt-2 text-sm text-muted-foreground">Premium Web & System Studio</p>
        <a href="mailto:hello@zayrion.tech" className="mt-4 inline-block text-sm text-foreground/80 hover:text-primary transition-colors">
          hello@zayrion.tech
        </a>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Solutions</p>
        <ul className="space-y-2 text-sm">
          {["Website", "Web App", "System", "Dashboard"].map((l) => (
            <li key={l}><a href="#" className="text-foreground/80 hover:text-primary transition-colors">{l}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Studio</p>
        <ul className="space-y-2 text-sm">
          <li><a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">Pricing</a></li>
          <li><a href="#process" className="text-foreground/80 hover:text-primary transition-colors">Process</a></li>
          <li><a href="#cta" className="text-foreground/80 hover:text-primary transition-colors">Contact</a></li>
        </ul>
      </div>
    </div>
    <div className="container mt-12 pt-6 border-t border-border/50 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
      <span>© {new Date().getFullYear()} Zayrion Tech. All rights reserved.</span>
      <span>Built with precision in Indonesia.</span>
    </div>
  </footer>
);
