import { useQuery } from '@tanstack/react-query';
import { getNotifications, QUERY_KEYS } from '@/utils';

export const useNotifications = (take?: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.NOTIFICATIONS, take],
    queryFn: () => getNotifications(take),
  });
};
