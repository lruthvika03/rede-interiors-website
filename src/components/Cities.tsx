import { SITE } from "../lib/site";

export default function Cities() {
  return (
    <section id="cities" className="section dark">
      <div className="wrap">
        <h2>Cities we work in</h2>
        <ul className="cities">{SITE.cities.map((c) => <li key={c}>{c}</li>)}</ul>
      </div>
    </section>
  );
}
