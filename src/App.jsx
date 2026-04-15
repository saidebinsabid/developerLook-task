import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ExpertiseSection from './components/ExpertiseSection';
import WorkSection from './components/WorkSection';
import BrandsSection from './components/BrandsSection';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ExpertiseSection />
      <WorkSection />
      <BrandsSection />
      <Footer />
    </Layout>
  );
}

export default App;
