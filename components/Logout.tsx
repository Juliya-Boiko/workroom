/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { axiosInstance } from '@/libs/axios';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/utils';
import toast from 'react-hot-toast';

interface Props {
  children: string | JSX.Element | JSX.Element[];
}

export const Logout = ({ children }: Props) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await axiosInstance.delete('/auth');
      if (response.status === 200) {
        router.push(ROUTES.signIn);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <button type="button" title="Logout" onClick={handleLogout}>
      {children}
    </button>
  );
};
