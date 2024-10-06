import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createTimelog, getTaskLogs, QUERY_KEYS } from '@/utils';

export const useTimelogMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: create, isPending: isCreating } = useMutation({
    mutationFn: createTimelog,
    onSuccess: (taskId: string) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TIMELOG, taskId] });
    },
  });

  return { create, isCreating };
};

export const useTimelogs = (taskId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TIMELOG, taskId],
    queryFn: () => getTaskLogs(taskId),
  });
};
