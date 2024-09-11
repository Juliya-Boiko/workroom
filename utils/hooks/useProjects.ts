import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { getProjects, getProjectById, createProject, deleteProject, QUERY_KEYS } from '@/utils';

export const useProjects = (take?: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PROJECTS, take],
    queryFn: () => getProjects(take),
  });
};

export const useProjectsMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: create, isPending: isCreating } = useMutation({
    mutationFn: createProject,
    onSuccess: (id: string) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PROJECTS] });
      return id;
    },
  });

  const { mutate: remove, isPending: isDeleting } = useMutation({
    mutationFn: deleteProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PROJECTS] });
    },
  });

  return { create, isCreating, remove, isDeleting };
};

export const useProject = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PROJECT, id],
    queryFn: () => getProjectById(id),
  });
};
