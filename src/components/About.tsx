import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, ArrowRight } from 'lucide-react';
import Modal from './modals/Modal';
import DemoForm from './forms/DemoForm';
import ContactForm from './forms/ContactForm';

const About = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Empowering businesses with intelligent financial automation that eliminates friction and unlocks growth potential.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Pioneering the integration of AI and blockchain technology to revolutionize financial management.'
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'Building solutions that scale from startups to enterprises, always putting user experience first.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering enterprise-grade security, reliability, and performance in every solution.'
    }
  ];

  const milestones = [
    { year: '2024', title: 'Company Founded', description: 'FinoovA established with a vision to transform financial operations' },
    { year: '2024', title: 'AI Engine Launch', description: 'Deployed advanced AI algorithms for financial automation' },
    { year: '2024', title: 'Blockchain Integration', description: 'Implemented tamper-proof audit trails and security features' },
    { year: '2025', title: 'Enterprise Ready', description: 'Launched comprehensive platform for enterprise clients' }
  ];

  return (
    <>
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
            >
              About FinoovA
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Driven by Innovation. Built for Financial Excellence.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              At FinoovA, we're redefining financial management through intelligent automation and blockchain-secured accuracy. 
              Our mission is to empower businesses of all sizes with a smarter, safer, and more scalable way to manage their 
              finances—eliminating friction, boosting efficiency, and unlocking real-time insights.
            </motion.p>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                To become the global standard for intelligent financial operations, where every business—from ambitious 
                startups to Fortune 500 companies—can access enterprise-grade financial automation that was once 
                exclusive to the largest corporations.
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Transforming Finance Globally</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We eliminate the complexity, inefficiency, and security risks that plague traditional financial management. 
                By combining cutting-edge AI with blockchain technology, we deliver a platform that doesn't just manage 
                finances—it accelerates business growth.
              </p>
              <div className="flex items-center text-green-600 font-medium">
                <span>Accelerating Business Growth</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide every decision we make and every solution we build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Company Timeline */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From vision to reality—key milestones in building the future of financial operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{milestone.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Financial Operations?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join forward-thinking businesses that are already experiencing the power of intelligent financial automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsDemoModalOpen(true)}
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Schedule a Demo
                </button>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="px-8 py-4 border border-blue-300 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Modal */}
      <Modal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)}>
        <DemoForm onClose={() => setIsDemoModalOpen(false)} />
      </Modal>

      {/* Contact Modal */}
      <Modal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)}>
        <ContactForm 
          type="Learn More" 
          title="Learn More About FinoovA"
          onClose={() => setIsContactModalOpen(false)} 
        />
      </Modal>
    </>
  );
};

export default About;