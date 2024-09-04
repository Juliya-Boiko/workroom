import { useQuery } from '@tanstack/react-query';
import { getProfile, QUERY_KEYS } from '@/utils';

export const useProfile = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.PROFILE],
    queryFn: () => getProfile(),
  });
};
