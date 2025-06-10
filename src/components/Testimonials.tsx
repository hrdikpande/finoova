import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CFO',
      company: 'TechCorp Industries',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'FinoovA transformed our financial operations completely. We reduced processing time by 80% and achieved 100% compliance accuracy.',
      rating: 5,
      metrics: { saved: '40 hours/week', accuracy: '99.8%', roi: '300%' }
    },
    {
      name: 'Michael Rodriguez',
      role: 'Finance Director',
      company: 'Global Manufacturing Ltd',
      image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The AI-powered automation and blockchain security gave us confidence to scale globally while maintaining strict compliance standards.',
      rating: 5,
      metrics: { saved: '60 hours/week', accuracy: '99.9%', roi: '450%' }
    },
    {
      name: 'Emily Watson',
      role: 'VP Finance',
      company: 'Healthcare Solutions Inc',
      image: 'https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Real-time insights and predictive analytics helped us optimize cash flow and make data-driven decisions faster than ever.',
      rating: 5,
      metrics: { saved: '35 hours/week', accuracy: '99.7%', roi: '280%' }
    }
  ];

  const caseStudies = [
    {
      company: 'Fortune 500 Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Complex multi-entity compliance',
      solution: 'Automated GST/TDS processing',
      result: '90% reduction in compliance time',
      logo: 'M'
    },
    {
      company: 'Global Tech Startup',
      industry: 'Technology',
      challenge: 'Rapid scaling financial ops',
      solution: 'AI-powered automation suite',
      result: '300% efficiency improvement',
      logo: 'T'
    },
    {
      company: 'Healthcare Enterprise',
      industry: 'Healthcare',
      challenge: 'Regulatory compliance',
      solution: 'Blockchain audit trails',
      result: '100% audit success rate',
      logo: 'H'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4"
          >
            Client Success Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Trusted by Leading Enterprises
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See how industry leaders are transforming their financial operations 
            and achieving measurable results with FinoovA.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-blue-600" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{testimonial.metrics.saved}</div>
                    <div className="text-xs text-gray-600">Time Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{testimonial.metrics.accuracy}</div>
                    <div className="text-xs text-gray-600">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{testimonial.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise Case Studies
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Detailed success stories showcasing measurable business impact across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                      {study.logo}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{study.company}</h4>
                      <p className="text-sm text-gray-600">{study.industry}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Challenge:</span>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Solution:</span>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Result:</span>
                      <p className="text-green-600 font-semibold">{study.result}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-transform">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;