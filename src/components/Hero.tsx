import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';

const Dashboard3D = () => {
  const { scene } = useGLTF('/models/dashboard.glb');
  
  return (
    <primitive 
      object={scene} 
      scale={[1.5, 1.5, 1.5]}
      position={[0, -0.5, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
};

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8">
            <h1 className="text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Enterprise-Grade Financial Operations Platform
            </h1>
            <p className="text-xl text-gray-300">
              Transform your financial operations with AI-powered automation, blockchain-backed audit trails, and real-time analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border border-gray-400 hover:border-white rounded-lg font-semibold transition-colors">
                Schedule Enterprise Demo
              </button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-gray-800 bg-gray-700" />
                ))}
              </div>
              <p className="text-sm text-gray-400">
                Trusted by 1000+ enterprises
              </p>
            </div>
          </div>

          {/* Right Column - 3D Element */}
          <div className="h-[500px] relative">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} />
              <Dashboard3D />
              <OrbitControls 
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 2}
              />
              <Environment preset="city" />
            </Canvas>
          </div>
        </div>
      </div>

      {/* Demo Video Section */}
      <div className="relative w-full bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              See Finnova in Action
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Watch how our platform streamlines financial operations, ensures compliance, and provides real-time insights for enterprise decision-making.
            </p>
          </div>
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/videos/demo-poster.jpg"
              controls
              playsInline
              onPlay={() => setIsVideoPlaying(true)}
              onPause={() => setIsVideoPlaying(false)}
            >
              <source src="/videos/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isVideoPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <button 
                  className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center"
                  onClick={() => videoRef.current?.play()}
                  aria-label="Play demo video"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 