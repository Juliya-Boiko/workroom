import { useQuery } from '@tanstack/react-query';
import { getProjects, QUERY_KEYS } from '@/utils';

export const useProjects = ({ take }: { take?: number }) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PROJECTS],
    queryFn: () => getProjects(take),
  });
};
