import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { SITE, tel } from "../lib/site";
import logo from "../assets/logo.png";

const links = [
  ["Home", "#top"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Wallpaper", "#wallpaper"],
  ["Cities", "#cities"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav" id="top">
      <a className="brand" href="#top" onClick={() => setOpen(false)}>
        <img src={logo} alt="REDe Interiors logo" />
        <span>
          <strong>REDe Interiors</strong>
          <small>Interiors • Architecture • Construction</small>
        </span>
      </a>

      <button
        className="menu-btn"
        aria-label="Open menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={open ? "open" : ""}>
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}

        <a className="nav-phone" href={tel(SITE.phones[0])}>
          <Phone size={15} />
          Call
        </a>

        <a className="btn gold small" href="#contact">
          Get a Quote
        </a>
      </nav>
    </header>
  );
}
