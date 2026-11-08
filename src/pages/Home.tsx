import { useState } from 'react';
import Community from '../components/home/Community';
import Faq from '../components/home/Faq';
import Features from '../components/home/Features';
import Hero from '../components/home/Hero';
import SelectedWork from '../components/home/SelectedWork';
import StatsBar from '../components/home/StatsBar';
import Testimonials from '../components/home/Testimonials';
import WorldMap from '../components/home/WorldMap';
import ProjectModal from '../components/ProjectModal';
import type { Project } from '../data/projects';

export default function Home() {
  const [active, setActive] = useState<Project | null>(null);
  return (
    <main className="pg on">
      <Hero />
      <StatsBar />
      <Features />
      <WorldMap />
      <Community />
      <SelectedWork onOpen={setActive} />
      <Testimonials />
      <Faq />
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </main>
  );
}
