import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { getProjects, getProjectById, createProject, deleteProject, QUERY_KEYS } from '@/utils';
import { IFilters } from '@/typings';

export const useProjects = (filters: IFilters | null, take?: number, skip?: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PROJECTS, take, skip, filters],
    queryFn: () => getProjects(filters, take, skip),
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

export const useProject = (projectId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PROJECT, projectId],
    queryFn: () => getProjectById(projectId),
  });
};
