import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Database, Cloud, Lock, Cpu } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    {
      category: 'AI & Machine Learning',
      icon: Cpu,
      color: 'from-purple-500 to-purple-700',
      items: ['TensorFlow', 'PyTorch', 'Natural Language Processing', 'Computer Vision']
    },
    {
      category: 'Blockchain & Security',
      icon: Shield,
      color: 'from-green-500 to-green-700',
      items: ['Ethereum', 'Hyperledger', 'Smart Contracts', 'Zero-Knowledge Proofs']
    },
    {
      category: 'Cloud Infrastructure',
      icon: Cloud,
      color: 'from-blue-500 to-blue-700',
      items: ['AWS', 'Kubernetes', 'Docker', 'Microservices']
    },
    {
      category: 'Data & Analytics',
      icon: Database,
      color: 'from-orange-500 to-orange-700',
      items: ['Apache Kafka', 'Redis', 'PostgreSQL', 'Apache Spark']
    },
    {
      category: 'Security & Compliance',
      icon: Lock,
      color: 'from-red-500 to-red-700',
      items: ['OAuth 2.0', 'SAML', 'SOC 2', 'ISO 27001']
    },
    {
      category: 'Performance',
      icon: Zap,
      color: 'from-yellow-500 to-yellow-700',
      items: ['CDN', 'Load Balancing', 'Auto-scaling', 'Edge Computing']
    }
  ];

  const integrations = [
    { name: 'SAP', logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Oracle', logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Salesforce', logo: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'QuickBooks', logo: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Xero', logo: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Stripe', logo: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=100' }
  ];

  return (
    <section id="enterprise" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium mb-4"
          >
            Enterprise Technology Stack
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Built for Scale, Security & Performance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our platform leverages cutting-edge technologies to deliver enterprise-grade 
            reliability, security, and performance at scale.
          </motion.p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {tech.category}
                </h3>
                <ul className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integrations */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Seamless Enterprise Integrations
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with your existing enterprise systems and tools without disruption.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-800 font-bold text-sm">
                      {integration.name}
                    </span>
                  </div>
                  <p className="text-center text-gray-600 text-sm font-medium">
                    {integration.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Architecture Diagram */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Enterprise Architecture Overview
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Database className="w-10 h-10 text-blue-600" />
                </div>
                <h5 className="font-bold text-gray-900 mb-2">Data Layer</h5>
                <p className="text-gray-600 text-sm">
                  Secure, scalable data storage with real-time processing capabilities
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Cpu className="w-10 h-10 text-green-600" />
                </div>
                <h5 className="font-bold text-gray-900 mb-2">AI Engine</h5>
                <p className="text-gray-600 text-sm">
                  Machine learning models for automation and predictive analytics
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <Shield className="w-10 h-10 text-purple-600" />
                </div>
                <h5 className="font-bold text-gray-900 mb-2">Security Layer</h5>
                <p className="text-gray-600 text-sm">
                  Multi-layered security with blockchain-backed audit trails
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;