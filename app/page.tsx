import {
  ExperienceSection,
  HeroSection,
  WorksSection,
} from "./components/home";

export default function Home() {
  return (
    <>
      <main className="relative">
        <HeroSection />
        <WorksSection />
        <ExperienceSection />
      </main>
    </>
  );
}
