import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProcessSection,
  SkillsSection,
  WorksSection,
} from "./components/home";
import Footer from "./components/layouts/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <ProcessSection />
      <SkillsSection />
      <ExperienceSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
