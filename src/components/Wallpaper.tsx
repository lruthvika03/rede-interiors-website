import { ArrowUpRight, Leaf, Layers3, Sparkles } from "lucide-react";

const collections = [
  { title: "Floral & Botanical", note: "A softer connection to nature", image: "/images/wallpaper/floral-botanical.jpg", number: "01" },
  { title: "Heritage & Pattern", note: "Expressive prints with character", image: "/images/wallpaper/heritage-pattern.jpg", number: "02" },
  { title: "Modern & Tropical", note: "Fresh, atmospheric statements", image: "/images/wallpaper/tropical-wallpaper.jpg", number: "03" },
  { title: "Texture & Detail", note: "Quiet depth for considered spaces", image: "/images/wallpaper/textured-wall.jpg", number: "04" },
];

export default function Wallpaper() {
  return (
    <section className="wallpaper-section" id="wallpaper">
      <div className="wallpaper-intro">
        <span className="editorial-kicker">WALLPAPER & SURFACE COLLECTIONS</span>
        <h2>Walls<br /><em>with a Story.</em></h2>
        <p>Thoughtfully selected wallpapers and decorative wall finishes that bring texture, pattern and personality to your space.</p>
        <a className="editorial-dark-link" href="#contact">Discuss finishes <ArrowUpRight size={16} /></a>
        <div className="wallpaper-values">
          <div><Leaf size={19} /><span>Curated<br />designs</span></div>
          <div><Layers3 size={19} /><span>Material<br />harmony</span></div>
          <div><Sparkles size={19} /><span>Installed as<br />part of your project</span></div>
        </div>
      </div>
      <div className="wallpaper-gallery">
        {collections.map((item) => (
          <a className="wallpaper-card" href="#contact" key={item.number}>
            <img src={item.image} alt={`${item.title} wallpaper styled in an interior`} loading="lazy" />
            <span className="wallpaper-number">{item.number}</span>
            <div className="wallpaper-card-caption"><span>{item.note}</span><h3>{item.title}</h3><ArrowUpRight size={18} /></div>
          </a>
        ))}
      </div>
      <aside className="wallpaper-note"><span>THE FINISHING TOUCH</span><p>Patterns that make a room feel unmistakably yours.</p><a href="#contact">Explore with REDe <ArrowUpRight size={15} /></a></aside>
    </section>
  );
}
