import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './modals/Modal';
import ContactForm from './forms/ContactForm';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Demo', href: '#demo' },
    { name: 'About', href: '#about' },
    { name: 'Founders', href: '#founders' },
    { name: 'Enterprise', href: '#enterprise' },
    { name: 'Resources', href: '#resources' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/finoova-logo.svg" 
                alt="FinoovA Logo" 
                className="h-10 w-auto"
              />
              <span className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                FinoovA
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-colors hover:text-blue-600 ${
                    isScrolled ? 'text-gray-700' : 'text-gray-200'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white border-t border-gray-100"
              >
                <div className="py-4 space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
                    >
                      {item.name}
                    </button>
                  ))}
                  <div className="px-4">
                    <button 
                      onClick={() => {
                        setIsContactModalOpen(true);
                        setIsOpen(false);
                      }}
                      className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Contact Modal */}
      <Modal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)}>
        <ContactForm 
          type="Get Started" 
          title="Get Started with FinoovA"
          onClose={() => setIsContactModalOpen(false)} 
        />
      </Modal>
    </>
  );
};

export default Navigation;