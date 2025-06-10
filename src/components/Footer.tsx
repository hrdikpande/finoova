import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Download,
  Linkedin,
  Twitter,
  Github,
  Shield,
  Award,
  Globe
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Enterprise', href: '#enterprise' },
      { name: 'Security', href: '#security' },
      { name: 'Integrations', href: '#integrations' },
      { name: 'API Documentation', href: '#api' }
    ],
    Solutions: [
      { name: 'Financial Operations', href: '#solutions' },
      { name: 'Compliance Automation', href: '#compliance' },
      { name: 'AI Analytics', href: '#analytics' },
      { name: 'Blockchain Audit', href: '#blockchain' },
      { name: 'Custom Enterprise', href: '#custom' }
    ],
    Resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'Case Studies', href: '#cases' },
      { name: 'White Papers', href: '#papers' },
      { name: 'Webinars', href: '#webinars' },
      { name: 'Support Center', href: '#support' }
    ],
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press Kit', href: '#press' },
      { name: 'Contact', href: '#contact' },
      { name: 'Partners', href: '#partners' }
    ]
  };

  const certifications = [
    { name: 'SOC 2 Type II', icon: Shield },
    { name: 'ISO 27001', icon: Award },
    { name: 'GDPR Compliant', icon: Globe }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-2xl font-bold">FinoovA</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Empowering enterprises with AI-powered financial operations, blockchain security, 
              and real-time analytics for the future of finance.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">enterprise@finoova.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+91 76757 17165</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Bengaluru, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-bold text-white mb-4">{category}</h3>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter & Downloads */}
        <div className="mt-16 pt-12 border-t border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Get the latest insights on financial technology, compliance updates, and product announcements.
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors flex items-center">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Downloads */}
            <div>
              <h3 className="text-xl font-bold mb-4">Enterprise Resources</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <Download className="w-5 h-5 text-blue-400 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">Product Brochure</div>
                      <div className="text-sm text-gray-400">Comprehensive overview (PDF, 2.3MB)</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <Download className="w-5 h-5 text-blue-400 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">ROI Calculator</div>
                      <div className="text-sm text-gray-400">Calculate your potential savings (Excel, 1.1MB)</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-8 mb-6 md:mb-0">
              <span className="text-gray-400 text-sm">Certified & Compliant:</span>
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <cert.icon className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-gray-300">{cert.name}</span>
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-400">
              Enterprise-grade security & compliance
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 FinoovA. All rights reserved. Built with enterprise-grade security.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#security" className="text-gray-400 hover:text-blue-400 transition-colors">
                Security
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;