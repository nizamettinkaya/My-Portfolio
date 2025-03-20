import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './layouts/Layout';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ContactSection from './components/sections/ContactSection';
import ServiceNowSection from './components/sections/ServiceNowSection';
import ServiceNowProjectsSection from './components/sections/ServiceNowProjectsSection';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServiceNowSection />
        <ServiceNowProjectsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <BackToTop />
      </Layout>
    </ThemeProvider>
  );
}

export default App;