import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { getTasks, createTask, updateTask, QUERY_KEYS } from '@/utils';

interface Props {
  projectId: string | undefined;
  enabled: boolean;
}

export const useTasks = ({ projectId, enabled }: Props) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TASKS, projectId],
    queryFn: () => getTasks(projectId),
    enabled: enabled,
  });
};

export const useTasksMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: create, isPending: isCreating } = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TASKS] });
    },
  });

  const { mutate: update, isPending: isUpdating } = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TASKS] });
    },
  });

  return { create, isCreating, update, isUpdating };
};
