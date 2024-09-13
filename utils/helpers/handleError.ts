import axios from 'axios';
import toast from 'react-hot-toast';

export const handleError = (error: unknown, context: string): void => {
  if (axios.isAxiosError(error)) {
    console.log(`An error occurred in ${context}:`, error);
    toast.error(error.response?.data.message || `An error occurred in ${context}`);
  } else {
    console.error(`An unexpected error occurred in ${context}:`, error);
    toast.error(`An unexpected error occurred in ${context}.`);
  }
};
