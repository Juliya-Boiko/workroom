import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { IFilters } from '@/typings';
import { useRouter } from 'next/navigation';
import {
  getProjects,
  getProjectById,
  createProject,
  deleteProject,
  updateProject,
  QUERY_KEYS,
  ROUTES,
} from '@/utils';

export const useProjects = (filters: IFilters | null, take?: number, skip?: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PROJECTS, take, skip, filters],
    queryFn: () => getProjects(filters, take, skip),
  });
};

export const useProjectsMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

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

  const { mutate: update } = useMutation({
    mutationFn: updateProject,
    onSuccess: (id: string) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PROJECTS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PROJECT, id] });
      router.push(`${ROUTES.project}/${id}`);
    },
  });

  return { create, isCreating, remove, isDeleting, update };
};

export const useProject = (projectId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PROJECT, projectId],
    queryFn: () => getProjectById(projectId),
  });
};
