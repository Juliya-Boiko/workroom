import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { getProfile, updateProfile, QUERY_KEYS } from '@/utils';

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
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PROFILE] });
      queryClient.setQueryData([QUERY_KEYS.USER], data);
    },
  });

  return { update, isUpdating };
};
