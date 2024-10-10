import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/utils';
import { getNotifications } from './notifications';

export const useNotifications = (take?: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.NOTIFICATIONS],
    queryFn: () => getNotifications(take),
  });
};
