import toast from 'react-hot-toast';
import { axiosInstance } from '@/libs/axios';
import { SignUpFormData, SignInFormData, InviteFormData } from '@/utils';

export const registerUserAndCompany = async (data: SignUpFormData) => {
  const filteredMembers = data.members.filter((el) => el);
  const user = {
    ...data,
    members: filteredMembers,
  };
  const response = await axiosInstance.post('/auth', user);
  return response;
};

export const loginUser = async (data: SignInFormData) => {
  const response = await axiosInstance.put('/auth', data);
  return response.status === 200;
};

interface InviteType extends InviteFormData {
  companyId: string;
}

export const registerUser = async (data: InviteType) => {
  const response = await axiosInstance.post('/auth', data);
  return response.status === 201;
};

export const inviteUsers = async (data: string[]) => {
  const response = await axiosInstance.post('/auth/invite', data);
  toast.success(response.data.success);
  if (response.data.warning) {
    toast.error(response.data.warning);
  }
  return response.data;
};

export const sendEmailRecovery = async (email: string) => {
  const response = await axiosInstance.get('/auth/recovery', {
    params: {
      email,
    },
  });
  return response.data;
};

export const changePassword = async (data: { email: string; password: string }) => {
  const response = await axiosInstance.patch('/auth', data);
  return response.status === 200;
};
