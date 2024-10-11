import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/utils';
import {
  createFolder,
  getFolders,
  getFolderById,
  updateFolder,
  shareFolder,
  deleteFolder,
} from './folders';

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

  const { mutate: update, isPending: isUpdating } = useMutation({
    mutationFn: updateFolder,
    onSuccess: ({ folderId }: { folderId: string }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FOLDER, folderId] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PAGES, folderId] });
    },
  });

  const { mutate: share, isPending: isSharing } = useMutation({
    mutationFn: shareFolder,
    onSuccess: ({ folderId }: { folderId: string }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FOLDER, folderId] });
    },
  });

  const { mutate: remove } = useMutation({
    mutationFn: deleteFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FOLDERS] });
    },
  });
  return { create, isCreating, update, isUpdating, remove, share, isSharing };
};

export const useFolder = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.FOLDER, id],
    queryFn: () => getFolderById(id),
  });
};
