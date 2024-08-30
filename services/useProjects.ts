import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants';
import { getProjects } from '@/actions';

export const useProjects = ({ take }: { take: number }) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PROJECTS],
    queryFn: () => getProjects(take),
  });
};
