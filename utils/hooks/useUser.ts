import { useQuery } from '@tanstack/react-query';
import { getUserInfo, QUERY_KEYS } from '@/utils';

export const useUser = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: () => getUserInfo(),
  });
};
