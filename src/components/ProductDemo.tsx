import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Maximize, VolumeX } from 'lucide-react';
import Modal from './modals/Modal';
import DemoForm from './forms/DemoForm';

const ProductDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const demoFeatures = [
    {
      title: 'AI-Powered Invoice Processing',
      description: 'Automatically extract, validate, and process invoices with 99.8% accuracy'
    },
    {
      title: 'Real-Time Compliance Monitoring',
      description: 'Monitor GST/TDS compliance in real-time with automated alerts'
    },
    {
      title: 'Blockchain Audit Trail',
      description: 'Immutable transaction records with complete transparency'
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Forecast cash flow and identify financial trends'
    }
  ];

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        videoRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <>
      <section id="demo" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
            >
              Product Demo
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              See FinoovA in Action
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Watch how our platform transforms financial operations for enterprise clients, 
              delivering measurable results from day one.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video relative">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    poster="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                  >
                    <source src="/finoova-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Play Button Overlay - Only show when paused */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <button 
                        onClick={handlePlayPause}
                        className="w-20 h-20 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <Play className="w-8 h-8 text-white ml-1" />
                      </button>
                    </div>
                  )}

                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={handlePlayPause}
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                      </button>
                      <div className="flex-1 bg-white/20 rounded-full h-1">
                        <div className="bg-blue-500 h-1 rounded-full w-1/3"></div>
                      </div>
                      <span className="text-white text-sm">2:30 / 7:45</span>
                      <button 
                        onClick={handleMute}
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                      </button>
                      <button 
                        onClick={handleFullscreen}
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        <Maximize size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Description */}
              <div className="mt-6 p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Complete Financial Operations Transformation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  This comprehensive demo showcases how FinoovA integrates with existing enterprise 
                  systems to automate financial processes, ensure compliance, and provide actionable 
                  insights through our AI-powered platform.
                </p>
              </div>
            </motion.div>

            {/* Demo Features Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Demo Highlights
              </h3>
              {demoFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 group-hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                      <div className="w-2 h-2 bg-blue-600 group-hover:bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* CTA */}
              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">
                  Ready for a Personalized Demo?
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Schedule a custom demonstration tailored to your enterprise needs.
                </p>
                <button 
                  onClick={() => setIsDemoModalOpen(true)}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Schedule Enterprise Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      <Modal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)}>
        <DemoForm onClose={() => setIsDemoModalOpen(false)} />
      </Modal>
    </>
  );
};

export default ProductDemo;