import { useQuery, useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import {
  getUserInfo,
  loginUser,
  registerUserAndCompany,
  registerUser,
  handleError,
  QUERY_KEYS,
  ROUTES,
} from '@/utils';

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

  const { mutate: registerMember, isPending: isInviting } = useMutation({
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
    isInviting,
  };
};
