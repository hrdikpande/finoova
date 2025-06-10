import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Quote } from 'lucide-react';

const Founders = () => {
  const founders = [
    {
      name: 'Pranith Nishanth',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Pranith Nishanth, Founder & CEO of FinoovA, is a forward-thinking entrepreneur blending deep technical expertise with a passion for financial innovation. With a strong background in software, AI, and business design, he created FinoovA to challenge the status quo of finance management. Pranith\'s vision is bold: simplify finance for everyone—from startups to CFOs—by integrating powerful AI and tamper-proof blockchain into one seamless platform. Under his leadership, FinoovA is not just a tool—it\'s a revolution in how finance operates.',
      quote: 'Finance shouldn\'t slow you down. With the right tech, it can become your fastest accelerator.',
      expertise: ['AI & Machine Learning', 'Blockchain Technology', 'Financial Systems', 'Product Strategy'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'pranith@finoova.com'
      }
    },
    {
      name: 'Co-Founder Name',
      role: 'Co-Founder & CTO',
      image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over a decade of experience in enterprise software architecture and financial technology, our CTO brings deep technical expertise in building scalable, secure platforms. Their background in distributed systems and blockchain technology has been instrumental in creating FinoovA\'s robust infrastructure that can handle enterprise-scale financial operations while maintaining the highest security standards.',
      quote: 'Great technology should be invisible to the user but transformative to the business.',
      expertise: ['System Architecture', 'Blockchain Development', 'Enterprise Security', 'DevOps'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'cto@finoova.com'
      }
    },
    {
      name: 'Co-Founder Name',
      role: 'Co-Founder & CFO',
      image: 'https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Our CFO brings extensive experience in corporate finance, compliance, and business operations. Having worked with Fortune 500 companies and high-growth startups, they understand the financial challenges that businesses face at every stage. Their expertise in regulatory compliance, financial planning, and business strategy ensures that FinoovA not only solves technical problems but delivers real business value.',
      quote: 'The best financial tools don\'t just track numbers—they unlock strategic insights.',
      expertise: ['Corporate Finance', 'Regulatory Compliance', 'Business Strategy', 'Risk Management'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'cfo@finoova.com'
      }
    }
  ];

  return (
    <section id="founders" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
          >
            Leadership Team
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Meet the Visionaries Behind FinoovA
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our founding team combines deep technical expertise with extensive business experience 
            to revolutionize financial operations for enterprises worldwide.
          </motion.p>
        </div>

        {/* Founders Grid */}
        <div className="space-y-20">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center">
                    <Quote className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                    <p className="text-xl text-blue-600 font-semibold">{founder.role}</p>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {founder.bio}
                  </p>

                  {/* Quote */}
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 mb-6">
                    <p className="text-gray-800 italic font-medium">
                      "{founder.quote}"
                    </p>
                    <p className="text-gray-600 text-sm mt-2">— {founder.name}</p>
                  </div>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Core Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {founder.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    <a
                      href={founder.social.linkedin}
                      className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={founder.social.twitter}
                      className="w-10 h-10 bg-gray-800 hover:bg-gray-900 rounded-lg flex items-center justify-center text-white transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${founder.social.email}`}
                      className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center text-white transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-3xl p-12 shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Philosophy</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in leading by example, fostering innovation, and building a culture where 
              exceptional talent can create transformative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Innovation First</h4>
              <p className="text-gray-600 text-sm">
                We challenge conventional thinking and embrace cutting-edge technology to solve real problems.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Customer Success</h4>
              <p className="text-gray-600 text-sm">
                Every decision we make is guided by our commitment to delivering exceptional value to our clients.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Execution Excellence</h4>
              <p className="text-gray-600 text-sm">
                We combine strategic vision with flawless execution to turn ambitious ideas into reality.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;