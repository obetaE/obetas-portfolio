'use client';
import React from 'react';
import { useState } from 'react';
import Navigation from '@/components/Navigation/Navigation';
import Hero from '@/components/Hero/Hero';
import ProjectsUi from '@/components/ProjectsUi/ProjectsUi';
import Process from '@/components/Process/Process';
import About from '@/components/About/About';
import ContactUi from '@/components/ContactUi/ContactUi';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <main>
      <Navigation activeSection={activeSection} />
      <Hero setActiveSection={setActiveSection} />
      <ProjectsUi setActiveSection={setActiveSection} />
      <Process setActiveSection={setActiveSection} />
      <About setActiveSection={setActiveSection} />
      <ContactUi setActiveSection={setActiveSection} />
    </main>
  );
}