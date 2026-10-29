import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Wallpaper from "./components/Wallpaper";
import Projects from "./components/Projects";
import Cities from "./components/Cities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Wallpaper />
      <Projects />
      <About />
      <Cities />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
