import { SITE } from "../lib/site";

export default function WhatsAppButton() {
  const href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi REDe, I want a quote")}`;
  return <a className="whatsapp" href={href} target="_blank" rel="noopener noreferrer">WhatsApp</a>;
}
