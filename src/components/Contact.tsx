import { FormEvent, useState } from "react";
import { SITE, mailto, tel } from "../lib/site";
import { postJSON } from "../lib/api";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("Sending...");
    try {
      await postJSON("/api/quotes", data);
      setStatus("Request sent. We will call you within one working day.");
      form.reset();
    } catch {
      setStatus(`Could not send. Please call ${SITE.phones[1]}.`);
    }
  }

  return (
    <section id="contact" className="section">
      <div className="wrap two">
        <div>
          <h2>Start your project</h2>
          <p>Tell us about your vision and we will help shape a space that reflects your lifestyle, business and aspirations.</p>
          <div className="contact-list">
            {SITE.phones.map((p) => <p key={p}><a href={tel(p)}>{p}</a></p>)}
            <p><a href={mailto(SITE.email)}>{SITE.email}</a></p>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <label>Name<input name="name" required minLength={2} /></label>
          <label>Phone<input name="phone" type="tel" required minLength={7} /></label>
          <label>City<select name="city">{SITE.cities.map((c) => <option key={c}>{c}</option>)}</select></label>
          <label>Project type<select name="type">{SITE.projectTypes.map((t) => <option key={t}>{t}</option>)}</select></label>
          <label>Message<textarea name="message" rows={3} /></label>
          <button className="btn gold" type="submit">Send request</button>
          <p role="status">{status}</p>
        </form>
      </div>
    </section>
  );
}
