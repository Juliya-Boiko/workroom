import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { handleError, ROUTES } from '@/utils';
import { sendEmailRecovery, changePassword } from './auth';

export const usePasswordMutations = () => {
  const router = useRouter();

  const {
    mutate: sendEmail,
    isSuccess,
    isPending,
  } = useMutation({
    mutationFn: sendEmailRecovery,
    onError: (error: unknown) => {
      handleError(error, `An error occurred in usePasswordMutations`);
    },
  });

  const { mutate: change, isPending: isChanging } = useMutation({
    mutationFn: changePassword,
    onSuccess: () => {
      router.push(ROUTES.signIn);
    },
  });

  return {
    sendEmail,
    isSuccess,
    isPending,
    change,
    isChanging,
  };
};
