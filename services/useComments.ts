/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { createComment, getComments, QUERY_KEYS } from '@/utils';

export const useCommentMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: create, isPending: isCreating } = useMutation({
    mutationFn: createComment,
    onSuccess: ({ taskId }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMENTS] });
    },
  });

  return { create, isCreating };
};

export const useComments = (taskId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.COMMENTS],
    queryFn: () => getComments(taskId),
  });
};
