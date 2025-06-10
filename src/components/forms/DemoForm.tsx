import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useApi } from '../../hooks/useApi';

interface DemoFormProps {
  onClose?: () => void;
}

const DemoForm: React.FC<DemoFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
    useCase: ''
  });

  const { loading, error, success, submitForm, reset } = useApi();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await submitForm('/demo', formData);

    if (result.success) {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        employees: '',
        useCase: ''
      });
      
      if (onClose) {
        setTimeout(() => {
          onClose();
          reset();
        }, 3000);
      }
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Demo Scheduled!</h3>
        <p className="text-gray-600">
          We'll contact you within 24 hours to schedule your personalized demo.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Schedule Your Demo</h3>
        <p className="text-gray-600">
          Get a personalized demonstration of FinoovA's capabilities for your business.
        </p>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center"
        >
          <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
          <span className="text-red-700">{error}</span>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Business Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
            Company Size *
          </label>
          <select
            id="employees"
            name="employees"
            value={formData.employees}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select company size</option>
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-1000">201-1000 employees</option>
            <option value="1000+">1000+ employees</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-2">
          Primary Use Case *
        </label>
        <textarea
          id="useCase"
          name="useCase"
          value={formData.useCase}
          onChange={handleChange}
          required
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="What financial operations challenges are you looking to solve?"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-semibold transition-colors flex items-center justify-center"
      >
        {loading ? (
          <>
            <Loader className="w-5 h-5 mr-2 animate-spin" />
            Scheduling...
          </>
        ) : (
          <>
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Demo
          </>
        )}
      </button>
    </form>
  );
};

export default DemoForm;