import React from 'react';
import Hero from './components/Hero';
import Features from './components/features/Features';
import ProductDemo from './components/ProductDemo';
import About from './components/About';
import Founders from './components/Founders';
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
      <About />
      <Founders />
      <TechStack />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;