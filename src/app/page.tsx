
import AboutMe from "@/components/AboutMe";
import FooterForm from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import ServicesSection from "@/components/Service";

export default function Home() {
  return (
    <div className="items-center justify-items-centerp-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <HeroSection />
      <section id="projects">
        <Projects />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="footer">
      <FooterForm />
      </section>
      
    </div>
  );
}
