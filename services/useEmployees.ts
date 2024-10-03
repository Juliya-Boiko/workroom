import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import {
  getEmployeeById,
  getEmployees,
  updateLevelEmployee,
  deleteEmployee,
  QUERY_KEYS,
} from '@/utils';
import { IEmployee } from '@/typings';

export const useEmployees = (take?: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.EMPLOYEES],
    queryFn: () => getEmployees(take),
  });
};

export const useEmployee = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.EMPLOYEE, id],
    queryFn: () => getEmployeeById(id),
  });
};

export const useEmployeeMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: updateLevel, isPending: isUpdatingLevel } = useMutation({
    mutationFn: updateLevelEmployee,
    onSuccess: ({ level, _id }) => {
      queryClient.setQueryData([QUERY_KEYS.EMPLOYEE, _id], (prev: IEmployee) => ({
        ...prev,
        level,
      }));
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.EMPLOYEES] });
    },
  });

  const { mutate: remove } = useMutation({
    mutationFn: deleteEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.EMPLOYEES] });
    },
  });

  return { updateLevel, isUpdatingLevel, remove };
};
