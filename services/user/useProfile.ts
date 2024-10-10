import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/utils';
import { getProfile, updateProfile } from './user';

export const useProfile = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.PROFILE],
    queryFn: () => getProfile(),
  });
};

export const useProfileMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: update, isPending: isUpdating } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PROFILE] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER] });
    },
  });

  return { update, isUpdating };
};
