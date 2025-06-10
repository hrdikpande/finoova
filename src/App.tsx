import React from 'react';
import { Bot, Shield, Zap, FileText, Clock, ArrowRight, Check, Minus, ChevronUp, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const features = [
    {
      icon: Bot,
      title: "Automated Accounting",
      description: "No manual data entry. AI does it all."
    },
    {
      icon: Zap,
      title: "Real-Time Forecasting",
      description: "Predict cash flow & revenue instantly."
    },
    {
      icon: Shield,
      title: "Fraud-Proof Security",
      description: "Blockchain ensures tamper-proof records."
    },
    {
      icon: FileText,
      title: "Smart Compliance",
      description: "Stay audit-ready with auto-compliance."
    },
    {
      icon: Clock,
      title: "Instant Reconciliation",
      description: "Match records in minutes, not days."
    }
  ];

  const comparisonData = [
    { feature: "AI Automation", finoova: true, quickbooks: "partial", zoho: "partial" },
    { feature: "Blockchain Security", finoova: true, quickbooks: false, zoho: false },
    { feature: "Forecasting Accuracy", finoova: "high", quickbooks: "medium", zoho: "medium" },
    { feature: "Auto-Reconciliation", finoova: true, quickbooks: false, zoho: "limited" },
    { feature: "Compliance Reporting", finoova: "instant", quickbooks: "manual", zoho: "manual" }
  ];

  const process = [
    {
      step: 1,
      title: "Connect",
      description: "Plug into your existing systems."
    },
    {
      step: 2,
      title: "Analyze",
      description: "AI + Blockchain process data instantly."
    },
    {
      step: 3,
      title: "Act",
      description: "Get insights, reports & alerts in real time."
    }
  ];

  const renderComparisonValue = (value) => {
    if (value === true) return <Check className="text-green-600" size={20} />;
    if (value === false) return <Minus className="text-gray-300" size={20} />;
    if (value === "partial") return <span className="text-yellow-600 text-sm font-medium">Partial</span>;
    if (value === "limited") return <span className="text-orange-600 text-sm font-medium">Limited</span>;
    if (value === "high") return <span className="text-green-600 text-sm font-medium">High</span>;
    if (value === "medium") return <span className="text-yellow-600 text-sm font-medium">Medium</span>;
    if (value === "instant") return <span className="text-green-600 text-sm font-medium">Instant</span>;
    if (value === "manual") return <span className="text-gray-500 text-sm font-medium">Manual</span>;
    return value;
  };

  return (
    <div className="bg-white overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <a href="#" className="text-2xl font-bold text-gray-900">
              FinoovA
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
                How It Works
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 py-4">
              <div className="flex flex-col space-y-4 px-4">
                <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
                <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
                <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tight mb-6">
              Simplify Finance.
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Amplify Growth.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              AI + Blockchain-powered automation for modern finance teams.
            </p>
          </div>
          
          {/* Dashboard Preview */}
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl transform hover:scale-[1.02] transition-all duration-700">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900">Financial Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                    <p className="text-green-600 text-sm font-medium">Revenue</p>
                    <p className="text-2xl font-bold text-green-700">$847K</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                    <p className="text-blue-600 text-sm font-medium">Cash Flow</p>
                    <p className="text-2xl font-bold text-blue-700">$234K</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                    <p className="text-purple-600 text-sm font-medium">Savings</p>
                    <p className="text-2xl font-bold text-purple-700">$156K</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful tools designed to transform your financial operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to revolutionize your finance management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center text-3xl font-bold text-white group-hover:scale-110 transition-all duration-300">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              FinoovA vs Others
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See why leading companies choose FinoovA over traditional solutions
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-blue-50">
                  <tr>
                    <th className="text-left p-6 text-lg font-bold text-gray-900">Feature</th>
                    <th className="text-center p-6 text-lg font-bold text-gray-900">FinoovA</th>
                    <th className="text-center p-6 text-lg font-bold text-gray-600">QuickBooks</th>
                    <th className="text-center p-6 text-lg font-bold text-gray-600">Zoho Books</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                      <td className="p-6 font-medium text-gray-900">{item.feature}</td>
                      <td className="text-center p-6">{renderComparisonValue(item.finoova)}</td>
                      <td className="text-center p-6">{renderComparisonValue(item.quickbooks)}</td>
                      <td className="text-center p-6">{renderComparisonValue(item.zoho)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Integrations */}
      <section className="py-32 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Industry Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Seamlessly connect with the tools you already use
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="h-16 flex items-center justify-center mb-4">
                <div className="text-2xl font-bold text-gray-800">QuickBooks</div>
              </div>
              <p className="text-gray-600 text-center">Full data synchronization</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="h-16 flex items-center justify-center mb-4">
                <div className="text-2xl font-bold text-gray-800">Xero</div>
              </div>
              <p className="text-gray-600 text-center">Automated reconciliation</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="h-16 flex items-center justify-center mb-4">
                <div className="text-2xl font-bold text-gray-800">Salesforce</div>
              </div>
              <p className="text-gray-600 text-center">CRM integration</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="h-16 flex items-center justify-center mb-4">
                <div className="text-2xl font-bold text-gray-800">Stripe</div>
              </div>
              <p className="text-gray-600 text-center">Payment processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Entire Financial Picture—Clear & Secure
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
            One dashboard. Real-time data. Total control.
          </p>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-2 shadow-2xl max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <div className="text-3xl font-bold text-green-700 mb-2">98%</div>
                  <div className="text-green-600 font-medium">Accuracy Rate</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <div className="text-3xl font-bold text-blue-700 mb-2">20+</div>
                  <div className="text-blue-600 font-medium">Hours Saved</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                  <div className="text-3xl font-bold text-purple-700 mb-2">100%</div>
                  <div className="text-purple-600 font-medium">Compliance</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                  <div className="text-3xl font-bold text-orange-700 mb-2">24/7</div>
                  <div className="text-orange-600 font-medium">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-32 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Driven by Innovation. Built for Financial Excellence.
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-4xl">
              At FinoovA, we're redefining financial management through intelligent automation and blockchain-secured accuracy. Our mission is to empower businesses of all sizes with a smarter, safer, and more scalable way to manage their finances—eliminating friction, boosting efficiency, and unlocking real-time insights.
            </p>
            
            {/* Founder Section */}
            <div className="mt-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Meet the Visionary Behind FinoovA
              </h3>
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl font-bold text-white">PN</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Pranith Nishanth
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Founder & CEO of FinoovA, is a forward-thinking entrepreneur blending deep technical expertise with a passion for financial innovation. With a strong background in software, AI, and business design, he created FinoovA to challenge the status quo of finance management.
                  </p>
                  <blockquote className="text-xl text-gray-700 italic border-l-4 border-blue-500 pl-6">
                    "Finance shouldn't slow you down. With the right tech, it can become your fastest accelerator."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's Talk Finance, Future, and Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We're here to help.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">hello@finoova.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 76757 17165</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">Bengaluru, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Ready to Future-Proof Your Finances?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of businesses already transforming their financial operations with FinoovA
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">FinoovA</h3>
              <p className="text-gray-600 leading-relaxed">
                Empowering financial excellence through innovation
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-gray-100 text-center text-gray-600">
            <p>&copy; 2025 FinoovA. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gray-900 text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transform hover:scale-110 transition-all duration-300 z-50"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;