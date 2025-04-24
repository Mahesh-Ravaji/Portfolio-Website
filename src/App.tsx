import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { ParticlesBackground } from './components/ParticlesBackground';
import { CursorEffect } from './components/CursorEffect';
import { VisitorCount } from './components/VisitorCount';
import { ResumeQR } from './components/ResumeQR';
import { ScrollProgress } from './components/ScrollProgress';
import { ProjectsPage } from './pages/ProjectsPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { InternshipsPage } from './pages/InternshipsPage';
import { HackathonsPage } from './pages/HackathonsPage';

function MainContent() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <ParticlesBackground />
      <CursorEffect />
      <ThemeToggle />
      <ThemeSwitcher />
      <VisitorCount />
      <ScrollProgress />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <ResumeQR />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/internships" element={<InternshipsPage />} />
        <Route path="/hackathons" element={<HackathonsPage />} />
      </Routes>
    </Router>
  );
}

export default App;