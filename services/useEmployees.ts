import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants';
import { getEmployees } from '@/actions';

export const useEmployees = ({ take }: { take?: number }) => {
  return useQuery({
    queryKey: [QUERY_KEYS.EMPLOYEES],
    queryFn: () => getEmployees(take),
  });
};
