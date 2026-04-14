import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ExpertiseSection from './components/ExpertiseSection';
import WorkSection from './components/WorkSection';

function App() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ExpertiseSection />
      <WorkSection />
    </Layout>
  );
}

export default App;
