import React from 'react';
import Hero from './components/Hero';
import Features from './components/features/Features';
import ProductDemo from './components/ProductDemo';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer.tsx';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="bg-white">
      <Navigation />
      <Hero />
      <ProductDemo />
      <Features />
      <TechStack />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;