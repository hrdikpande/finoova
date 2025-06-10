import { useState } from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    id: 'ai',
    title: 'AI-Powered Financial Assistant',
    description: 'Leverage advanced AI algorithms to automate financial operations, predict trends, and provide intelligent insights.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'blockchain',
    title: 'Blockchain-Backed Audit Trail',
    description: 'Ensure complete transparency and immutability of financial transactions with our blockchain-powered audit system.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    id: 'compliance',
    title: 'GST/TDS Compliance Automation',
    description: 'Automate tax calculations, filings, and compliance checks to ensure regulatory adherence and minimize errors.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'analytics',
    title: 'Real-Time Dashboards & Forecasting',
    description: 'Access comprehensive dashboards and predictive analytics to make data-driven decisions in real-time.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 'security',
    title: 'Enterprise-Grade Security',
    description: 'Benefit from multi-tenant architecture, role-based access control, and end-to-end encryption.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial operations platform designed for modern enterprises
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature Tabs */}
          <div className="space-y-4">
            {features.map((feature) => (
              <motion.button
                key={feature.id}
                className={`w-full p-6 rounded-lg text-left transition-all ${
                  activeFeature === feature.id
                    ? 'bg-white shadow-lg border-l-4 border-blue-600'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => setActiveFeature(feature.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg ${
                    activeFeature === feature.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Feature Preview */}
          <div className="relative h-[500px] bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-10" />
            <div className="relative h-full flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                  {features.find(f => f.id === activeFeature)?.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {features.find(f => f.id === activeFeature)?.title}
                </h3>
                <p className="text-gray-600">
                  {features.find(f => f.id === activeFeature)?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 