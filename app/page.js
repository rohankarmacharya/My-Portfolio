"use client";

import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import ProjectsSection from "./components/Projects/ProjectsSection";
import ArchitectureMindset from "./components/ArchitectureMindset";
import AIExperience from "./components/AIExperience";
import Journey from "./components/Journey";
import EarlierWork from "./components/EarlierWork";
import Personality from "./components/Personality";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <ProjectsSection />
      <ArchitectureMindset />
      <AIExperience />
      <Journey />
      <EarlierWork />
      <Personality />
      <Contact />
      <Footer />
    </>
  );
}
