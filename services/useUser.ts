import { useQuery, useMutation } from '@tanstack/react-query';
import {
  getUserInfo,
  loginUser,
  registerUserAndCompany,
  registerUser,
  handleError,
  QUERY_KEYS,
  ROUTES,
} from '@/utils';
import { useRouter } from 'next/navigation';

export const useUser = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: () => getUserInfo(),
  });
};

export const useUserMutations = () => {
  const router = useRouter();

  const {
    mutate: registerOwner,
    isSuccess: isSuccessRegisterOwner,
    isPending: isRegistering,
  } = useMutation({
    mutationFn: registerUserAndCompany,
    onError: (error: unknown) => {
      handleError(error, `An error occurred in registerUserAndCompany`);
    },
  });

  const { mutate: login, isSuccess: isSuccessLogin } = useMutation({
    mutationFn: loginUser,
    onError: (error: unknown) => {
      handleError(error, `An error occurred in loginUser`);
    },
    onSuccess: () => {
      router.push(ROUTES.dashboard);
    },
  });

  const { mutate: registerMember } = useMutation({
    mutationFn: registerUser,
    onError: (error: unknown) => {
      handleError(error, `An error occurred in registerMember`);
    },
    onSuccess: () => {
      router.push(ROUTES.dashboard);
    },
  });

  return {
    registerOwner,
    isSuccessRegisterOwner,
    isRegistering,
    login,
    isSuccessLogin,
    registerMember,
  };
};
