import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { getTasks, createTask, updateTask, getTaskById, deleteTask, QUERY_KEYS } from '@/utils';

interface Props {
  projectId: string;
}

export const useTasks = ({ projectId }: Props) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TASKS, projectId],
    queryFn: () => getTasks(projectId),
  });
};

export const useTasksMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: create, isPending: isCreating } = useMutation({
    mutationFn: createTask,
    onSuccess: ({ projectId }: { projectId: string }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TASKS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PROJECT, projectId] });
    },
  });

  const { mutate: update, isPending: isUpdating } = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TASKS] });
    },
  });

  const { mutate: remove, isPending: isDeleting } = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TASKS] });
    },
  });

  return { create, isCreating, update, isUpdating, remove, isDeleting };
};

export const useTask = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TASK, id],
    queryFn: () => getTaskById(id),
  });
};
