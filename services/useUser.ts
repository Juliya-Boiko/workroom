import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants';
import { getUserInfo } from '@/actions';

export const useUser = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: () => getUserInfo(),
  });
};
