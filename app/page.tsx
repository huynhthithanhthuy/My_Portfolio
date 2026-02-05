import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProcessSection,
  SkillsSection,
  WorksSection,
} from "./components/home";
import Navbar from "./components/Navbar";
import Footer from "./components/layouts/Footer";

export default function Home() {
  return (
    <>
      <main className="relative">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <WorksSection />
          {/* <ProcessSection /> */}
          <SkillsSection />
          {/* <TestimonialsSection /> */}
          <ContactSection />
          <Footer />
      </main>
    </>

  );
}
