import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/utils';
import { createPage, getPages, deletePage, updatePage } from './pages';

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
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FOLDERS] });
    },
  });

  const { mutate: update, isPending: isUpdating } = useMutation({
    mutationFn: updatePage,
    onSuccess: ({ folderId }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PAGES, folderId] });
    },
  });

  const { mutate: remove, isPending: isDeleting } = useMutation({
    mutationFn: deletePage,
    onSuccess: ({ folderId }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PAGES, folderId] });
    },
  });

  return { create, isCreating, remove, isDeleting, update, isUpdating };
};
