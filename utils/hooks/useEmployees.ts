import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { getEmployeeById, getEmployees, updateLevelEmployee, QUERY_KEYS } from '@/utils';
import { IEmployee } from '@/typings';

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

export const useEmployeeMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: updateLevel, isPending: isUpdatingLevel } = useMutation({
    mutationFn: updateLevelEmployee,
    onSuccess: ({ level }) => {
      queryClient.setQueryData([QUERY_KEYS.EMPLOYEE], (prev: IEmployee) => ({
        ...prev,
        level,
      }));
    },
  });

  return { updateLevel, isUpdatingLevel };
};
