import { useQuery } from '@tanstack/react-query';
import { getEmployees, QUERY_KEYS } from '@/utils';

export const useEmployees = ({ take }: { take?: number }) => {
  return useQuery({
    queryKey: [QUERY_KEYS.EMPLOYEES],
    queryFn: () => getEmployees(take),
  });
};
