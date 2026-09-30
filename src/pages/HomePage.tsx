import MainLayout from "../layouts/MainLayout";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ExperienceSection from "../sections/ExperienceSection";
import ProjectsSection from "../sections/ProjectsSection";
import LearningSection from "../sections/LearningSection";
import AchievementsSection from "../sections/AchievementsSection";
import ResumeSection from "../sections/ResumeSection";
import ContactSection from "../sections/ContactSection";

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <LearningSection />
      <AchievementsSection />
      <ResumeSection />
      <ContactSection />
    </MainLayout>
  );
};

export default HomePage;
