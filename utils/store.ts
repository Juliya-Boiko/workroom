import { create } from 'zustand';
import { axiosInstance } from '@/utils/axios';

type State = {
  user: {
    name: string;
    avatar: string | null;
  };
  company: string;
};

type Action = {
  updateUser: () => void;
  updateCompany: () => void;
};

export const usePersonStore = create<State & Action>((set) => ({
  user: {
    name: '',
    avatar: null,
  },
  company: '',
  updateUser: async () => {
    try {
      const response = await axiosInstance.get('/user/info');
      if (response.status === 200) {
        set(() => ({ user: response.data }));
      }
    } catch (error) {
      console.log('usePersonStore => updateUser error ===>', error);
    }
  },
  updateCompany: async () => {
    try {
      const response = await axiosInstance.get('/company/info');
      if (response.status === 200) {
        set(() => ({ company: response.data }));
      }
    } catch (error) {
      console.log('usePersonStore => updateCompany error ===>', error);
    }
  },
}));
