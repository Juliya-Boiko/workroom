import { Toaster } from 'react-hot-toast';

export const ToastNotify = () => (
  <Toaster
    position="top-right"
    toastOptions={{
      success: {
        style: {
          background: '#00D097',
          color: '#FFFFFF',
        },
      },
      error: {
        style: {
          backgroundColor: '#F65160',
          color: '#FFFFFF',
        },
      },
    }}
  />
);
