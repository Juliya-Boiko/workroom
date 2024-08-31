/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from '@/utils/axios';
import { SignUpFormData, SignInFormData, InviteFormData } from '@/utils/schemas';
import toast from 'react-hot-toast';

export const registerUserAndCompany = async (data: SignUpFormData) => {
  const filteredMembers = data.members.filter((el) => el);
  const user = {
    ...data,
    members: filteredMembers,
  };
  try {
    const response = await axiosInstance.post('/auth/register', user);
    return response.status === 201;
  } catch (error: any) {
    toast.error(error.response.data.error);
  }
};

export const loginUser = async (data: SignInFormData) => {
  try {
    const response = await axiosInstance.post('/auth/login', data);
    return response.status === 200;
  } catch (error: any) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};

interface InviteType extends InviteFormData {
  companyId: string;
}

export const registerUser = async (data: InviteType) => {
  try {
    const response = await axiosInstance.post('/auth/register', data);
    return response.status === 201;
  } catch (error: any) {
    toast.error(error.response.data.error);
  }
};

export const inviteUsers = async (data: string[]) => {
  try {
    const response = await axiosInstance.post('/auth/invite', data);
    if (response.data.warning) {
      toast.success('Emails sended');
      toast.error(response.data.message);
    } else {
      toast.success(response.data.message);
    }
    console.log(response.data);
    return response.status === 200;
  } catch (error: any) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};
