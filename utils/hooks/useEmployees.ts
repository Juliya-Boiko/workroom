import { useQuery } from '@tanstack/react-query';
import { getEmployeeById, getEmployees, QUERY_KEYS } from '@/utils';

export const useEmployees = (take?: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.EMPLOYEES],
    queryFn: () => getEmployees(take),
  });
};

export const useEmployee = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.EMPLOYEE],
    queryFn: () => getEmployeeById(id),
  });
};
