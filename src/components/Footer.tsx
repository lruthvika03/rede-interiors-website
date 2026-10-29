import { SITE } from "../lib/site";

export default function Footer() {
  return <footer><p>&copy; {new Date().getFullYear()} {SITE.name} {SITE.tagline}. All rights reserved.</p></footer>;
}
