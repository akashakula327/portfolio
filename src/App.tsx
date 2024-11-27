import React from 'react';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;