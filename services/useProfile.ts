import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants';
import { getProfile } from '@/actions';

export const useProfile = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.PROFILE],
    queryFn: () => getProfile(),
  });
};