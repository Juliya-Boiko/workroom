import toast from 'react-hot-toast';
import { axiosInstance } from '@/libs/axios';
import { handleError, SignUpFormData, SignInFormData, InviteFormData } from '@/utils';

export const registerUserAndCompany = async (data: SignUpFormData) => {
  const filteredMembers = data.members.filter((el) => el);
  const user = {
    ...data,
    members: filteredMembers,
  };
  try {
    const response = await axiosInstance.post('/auth/register', user);
    return response.status === 201;
  } catch (error: unknown) {
    handleError(error, 'registerUserAndCompany');
  }
};

export const loginUser = async (data: SignInFormData) => {
  try {
    const response = await axiosInstance.post('/auth/login', data);
    return response.status === 200;
  } catch (error: unknown) {
    handleError(error, 'loginUser');
  }
};

interface InviteType extends InviteFormData {
  companyId: string;
}

export const registerUser = async (data: InviteType) => {
  try {
    const response = await axiosInstance.post('/auth/register', data);
    return response.status === 201;
  } catch (error: unknown) {
    handleError(error, 'registerUser');
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
    return response.status === 200;
  } catch (error: unknown) {
    handleError(error, 'inviteUsers');
  }
};
