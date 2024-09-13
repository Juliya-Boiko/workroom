import { useQuery, useMutation } from '@tanstack/react-query';
import { getUserInfo, registerUserAndCompany, handleError, QUERY_KEYS } from '@/utils';

export const useUser = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: () => getUserInfo(),
  });
};

export const useUserMutations = () => {
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

  return { registerOwner, isSuccessRegisterOwner, isRegistering };
};
