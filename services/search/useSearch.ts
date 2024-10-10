import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/utils';
import { getSearch } from './search';

interface Props {
  value: string;
  enabled: boolean;
}

export const useSearch = ({ value, enabled }: Props) => {
  return useQuery({
    queryKey: [QUERY_KEYS.SEARCH, value],
    queryFn: () => getSearch(value),
    enabled: enabled,
  });
};
