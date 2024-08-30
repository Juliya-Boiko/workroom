import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants';
import { getCompanyInfo } from '@/actions';

export const useCompany = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.COMPANY],
    queryFn: () => getCompanyInfo(),
  });
};
