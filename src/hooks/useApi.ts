import { useState } from 'react';

interface ApiResponse {
  success: boolean;
  message: string;
}

interface UseApiReturn {
  loading: boolean;
  error: string | null;
  success: boolean;
  submitForm: (endpoint: string, data: any) => Promise<ApiResponse>;
  reset: () => void;
}

export const useApi = (): UseApiReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitForm = async (endpoint: string, data: any): Promise<ApiResponse> => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`http://localhost:3001/api${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.message || 'Something went wrong');
      }

      return result;
    } catch (err) {
      const errorMessage = 'Network error. Please check your connection and try again.';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setLoading(false);
    setError(null);
    setSuccess(false);
  };

  return { loading, error, success, submitForm, reset };
};