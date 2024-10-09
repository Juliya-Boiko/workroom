import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { createFolder, getFolders, getFolderById, QUERY_KEYS } from '@/utils';

export const useFolders = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.FOLDERS],
    queryFn: () => getFolders(),
  });
};

export const useFolderMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: create, isPending: isCreating } = useMutation({
    mutationFn: createFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FOLDERS] });
    },
  });

  // const { mutate: update, isPending: isUpdating } = useMutation({
  //   mutationFn: updateTask,
  //   onSuccess: ({ projectId, taskId }: { projectId: string; taskId: string }) => {
  //     queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TASKS] });
  //     queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PROJECT, projectId] });
  //     queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TASK, taskId] });
  //     queryClient.invalidateQueries({
  //       queryKey: [QUERY_KEYS.NOTIFICATIONS],
  //     });
  //   },
  // });

  // const { mutate: remove, isPending: isDeleting } = useMutation({
  //   mutationFn: deleteTask,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TASKS] });
  //   },
  // });

  return { create, isCreating };
};

export const useFolder = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.FOLDER, id],
    queryFn: () => getFolderById(id),
  });
};
