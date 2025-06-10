import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useApi } from '../../hooks/useApi';

interface NewsletterFormProps {
  inline?: boolean;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ inline = false }) => {
  const [email, setEmail] = useState('');
  const { loading, error, success, submitForm, reset } = useApi();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await submitForm('/newsletter', { email });

    if (result.success) {
      setEmail('');
      setTimeout(() => {
        reset();
      }, 3000);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`text-center ${inline ? 'p-4' : 'p-6'}`}
      >
        <CheckCircle className={`${inline ? 'w-8 h-8' : 'w-12 h-12'} text-green-500 mx-auto mb-2`} />
        <p className={`text-green-700 ${inline ? 'text-sm' : 'text-base'}`}>
          Successfully subscribed to our newsletter!
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center"
        >
          <AlertCircle className="w-4 h-4 text-red-500 mr-2" />
          <span className="text-red-700 text-sm">{error}</span>
        </motion.div>
      )}

      <div className={inline ? 'flex gap-2' : 'space-y-4'}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className={`${inline ? 'flex-1' : 'w-full'} px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500`}
        />
        <button
          type="submit"
          disabled={loading}
          className={`${inline ? 'px-4' : 'w-full px-6'} py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 rounded-lg font-medium transition-colors flex items-center justify-center text-white`}
        >
          {loading ? (
            <Loader className="w-4 h-4 animate-spin" />
          ) : (
            <>
              {!inline && <Mail className="w-4 h-4 mr-2" />}
              Subscribe
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default NewsletterForm;