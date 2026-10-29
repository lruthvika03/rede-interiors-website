import { ArrowUpRight } from "lucide-react";
import { SITE } from "../lib/site";
const serviceImages = [
  "/images/luxury/living-luxury.jpg",
  "/images/luxury/lobby.jpg",
  "/images/luxury/lounge-marble.jpg",
  "/images/luxury/bedroom-luxury.jpg",
  "/images/luxury/living-modern.jpg",
  "/images/luxury/marble-living.jpg",
];

export default function Services() {
  return (
    <section id="services" className="section services-luxury">
      <div className="wrap">

        <div className="luxury-section-head">
          <div>
            <span className="section-number">REDe / 03</span>
            <p className="eyebrow">OUR EXPERTISE</p>
            <h2>
              Designed with intent.
              <br />
              <em>Built to last.</em>
            </h2>
          </div>

          <div className="luxury-intro">
            <span>20+ YEARS OF EXPERIENCE</span>
            <p>
              From the first sketch to the final handover, we bring
              design, architecture and construction together through
              one experienced team.
            </p>
          </div>
        </div>

        <div className="luxury-services-grid">
          {SITE.services.map((service, index) => (
            <article
              className={`luxury-service service-${index + 1}`}
              key={service.title}
            >
              <img
                src={serviceImages[index]}
                alt={service.title}
                loading="lazy"
              />

              <div className="service-overlay" />

              <div className="service-number">
                0{index + 1}
              </div>

              <div className="service-content">
                <span>REDe / {String(index + 1).padStart(2, "0")}</span>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <a href="#contact">
                  Discuss your project
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
