import { ArrowUpRight } from "lucide-react";
import { SITE } from "../lib/site";

const projectInfo = [
  {
    category: "RESIDENTIAL / INTERIORS",
    number: "01",
  },
  {
    category: "RESIDENTIAL / KITCHEN",
    number: "02",
  },
  {
    category: "PRIVATE RESIDENCE",
    number: "03",
  },
  {
    category: "COMMERCIAL / OFFICE",
    number: "04",
  },
  {
    category: "RESIDENTIAL / LIVING",
    number: "05",
  },
  {
    category: "LUXURY INTERIORS",
    number: "06",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section portfolio-luxury">
      <div className="wrap">

        <div className="portfolio-head">
          <div>
            <span className="section-number">REDe / 04</span>
            <p className="eyebrow">SELECTED WORK</p>

            <h2>
              Spaces with
              <br />
              <em>a point of view.</em>
            </h2>
          </div>

          <div className="portfolio-intro">
            <span>20+ YEARS / 300+ PROJECTS</span>
            <p>
              Residential and commercial spaces shaped through
              architecture, interiors, material and light.
            </p>
          </div>
        </div>

        <div className="portfolio-grid">

          {SITE.projects.map((project, index) => {
            const info = projectInfo[index];

            return (
              <article
                className={`portfolio-card portfolio-${index + 1}`}
                key={project.name}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                />

                <div className="portfolio-overlay" />

                <div className="portfolio-top">
                  <span>{info.number}</span>
                  <small>{info.category}</small>
                </div>

                <div className="portfolio-bottom">
                  <div>
                    <span>REDe PROJECT</span>
                    <h3>{project.name}</h3>
                  </div>

                  <div className="portfolio-arrow">
                    <ArrowUpRight size={22} />
                  </div>
                </div>
              </article>
            );
          })}

        </div>

        <div className="portfolio-footer">
          <span>MORE PROJECTS COMING SOON</span>
          <a href="#contact">
            Start your project
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
