import React, { useState, useEffect } from 'react';
import Layout from './layouts/Layout';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ExpertiseSection from './components/ExpertiseSection';
import WorkSection from './components/WorkSection';
import BrandsSection from './components/BrandsSection';
import Footer from './components/Footer';
import PageSkeleton from './components/Skeletons/PageSkeleton';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading to ensure skeletons are seen and heavy assets ready
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Layout>
        <PageSkeleton />
      </Layout>
    );
  }

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
