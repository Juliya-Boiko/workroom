import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { IFilters } from '@/typings';
import { getTasks, createTask, updateTask, getTaskById, deleteTask, QUERY_KEYS } from '@/utils';

export const useTasks = (projectId: string, filters: IFilters | null) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TASKS, projectId, filters],
    queryFn: () => getTasks(projectId, filters),
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
    onSuccess: ({ projectId, taskId }: { projectId: string; taskId: string }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TASKS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PROJECT, projectId] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TASK, taskId] });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.NOTIFICATIONS],
      });
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
