import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { deleteAttachById, getAttachments, QUERY_KEYS } from '@/utils';

export const useAttachMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: remove, isPending: isDeleting } = useMutation({
    mutationFn: deleteAttachById,
    onSuccess: ({ taskId }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ATTACHMENTS, taskId] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TASK, taskId] });
    },
  });

  return { remove, isDeleting };
};

export const useAttachments = (taskId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.ATTACHMENTS, taskId],
    queryFn: () => getAttachments(taskId),
  });
};
