/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { createPage, getPages, QUERY_KEYS } from '@/utils';

export const usePages = (folderId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PAGES, folderId],
    queryFn: () => getPages(folderId),
  });
};

export const usePageMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: create, isPending: isCreating } = useMutation({
    mutationFn: createPage,
    onSuccess: ({ folderId }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PAGES, folderId] });
    },
  });

  // const { mutate: update, isPending: isUpdating } = useMutation({
  //   mutationFn: updateFolder,
  //   onSuccess: ({ folderId }: { folderId: string }) => {
  //     queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FOLDER, folderId] });
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

// export const useFolder = (id: string) => {
//   return useQuery({
//     queryKey: [QUERY_KEYS.FOLDER, id],
//     queryFn: () => getFolderById(id),
//   });
// };
