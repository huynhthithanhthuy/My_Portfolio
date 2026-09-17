import AboutIntroSection from "./detail/info";
import AboutExperienceSection from "./detail/experience";
import AboutSkillsToolsSection from "./detail/skill";

export default function AboutPage() {
    return (
        <main>
            <AboutIntroSection />
            <AboutSkillsToolsSection />
            <AboutExperienceSection />
        </main>
    );
}