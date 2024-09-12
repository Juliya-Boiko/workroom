import { useQuery } from '@tanstack/react-query';
import { getCompanyInfo, QUERY_KEYS } from '@/utils';

export const useCompany = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.COMPANY],
    queryFn: () => getCompanyInfo(),
  });
};
