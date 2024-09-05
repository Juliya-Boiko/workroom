import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { getProjects, createProject, QUERY_KEYS } from '@/utils';

export const useProjects = (take?: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PROJECTS],
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

  return { create, isCreating };
};
