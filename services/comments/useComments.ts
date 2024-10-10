import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { createComment, deleteCommentById, updateCommentById, getComments } from './comments';
import { QUERY_KEYS } from '@/utils';

export const useCommentMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: create, isPending: isCreating } = useMutation({
    mutationFn: createComment,
    onSuccess: ({ taskId }: { taskId: string }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMENTS, taskId] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.NOTIFICATIONS] });
    },
  });

  const { mutate: remove } = useMutation({
    mutationFn: deleteCommentById,
    onSuccess: (taskId: string) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMENTS, taskId] });
    },
  });

  const { mutate: update } = useMutation({
    mutationFn: updateCommentById,
    onSuccess: (taskId: string) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMENTS, taskId] });
    },
  });

  return { create, isCreating, remove, update };
};

export const useComments = (taskId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.COMMENTS, taskId],
    queryFn: () => getComments(taskId),
  });
};
