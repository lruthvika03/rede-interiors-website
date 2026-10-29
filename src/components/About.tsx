import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SITE } from "../lib/site";

export default function About() {
  return (
    <section id="about" className="section about-v2">
      <div className="wrap">
        <div className="about-topline">
          <span>REDe / 02</span>
          <span>ABOUT THE STUDIO</span>
        </div>

        <div className="about-v2-grid">
          <div className="about-v2-heading">
            <p className="eyebrow">Our philosophy</p>

            <h2>
              20+ years of experience.
              <br />
              <em>A legacy built into every space.</em>
            </h2>
          </div>

          <div className="about-v2-copy">
            <p className="large">
              REDe Interiors & Construction brings architecture,
              interiors and execution together under one vision.
            </p>

            <p>
              We create spaces that balance proportion, material,
              natural light and everyday functionality — from the
              first concept to the final detail.
            </p>

            <a href="#contact" className="text-link">
              Work with REDe <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="about-gallery">
          <div className="about-main-image">
            <img
              src="/images/luxury-interior.jpg"
              alt="Luxury REDe interior"
            />

            <div className="image-label">
              <span>01</span>
              <span>INTERIORS / DETAIL</span>
            </div>
          </div>

          <div className="about-side">
            <div className="about-small-image">
              <img
                src="/images/materials.jpg"
                alt="Premium interior materials"
              />
            </div>

            <div className="about-promise">
              <span className="promise-title">THE REDe PROMISE</span>

              <ul>
                <li>
                  <CheckCircle2 size={17} />
                  End-to-end execution
                </li>
                <li>
                  <CheckCircle2 size={17} />
                  Design-led thinking
                </li>
                <li>
                  <CheckCircle2 size={17} />
                  Premium material selection
                </li>
                <li>
                  <CheckCircle2 size={17} />
                  Detail-focused delivery
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-stats-v2">
          {SITE.stats.map((stat, index) => (
            <div key={stat.label}>
              <span>0{index + 1}</span>
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
