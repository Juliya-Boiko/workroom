import { useQuery } from '@tanstack/react-query';
import { getTasks, QUERY_KEYS } from '@/utils';

interface Props {
  projectId: string | undefined;
  enabled: boolean;
}

export const useTasks = ({ projectId, enabled }: Props) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TASKS],
    queryFn: () => getTasks(projectId),
    enabled: enabled,
  });
};
