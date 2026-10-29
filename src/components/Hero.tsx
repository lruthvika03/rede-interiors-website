import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SITE } from "../lib/site";

export default function Hero() {
  return (
    <section className="editorial-hero" id="top">
      <div className="editorial-hero-photo">
        <img src="/images/hero-wallpaper.jpg" alt="Warm contemporary living space with natural materials" />
      </div>
      <div className="editorial-hero-wash" />
      <div className="editorial-hero-copy">
        <span className="editorial-kicker">SPACES THAT</span>
        <h1>Feel Like<br /><em>Home.</em></h1>
        <p>Interiors, construction and curated surfaces for a more beautiful everyday.</p>
        <a className="editorial-link" href="#projects">Explore our work <ArrowUpRight size={16} /></a>
        <div className="editorial-counter"><strong>01</strong><span />04</div>
      </div>
      <aside className="editorial-hero-side">
        <span>INTERIORS</span><span>CONSTRUCTION</span><span>WALLPAPERS</span><span>CUSTOM SPACES</span>
        <i />
        <em>Designing<br />better tomorrow.</em>
      </aside>
      <div className="editorial-hero-foot">
        <span>REDe / INTERIORS & CONSTRUCTION</span>
        <span>{SITE.cities.join("  /  ").toUpperCase()}</span>
      </div>
    </section>
  );
}
