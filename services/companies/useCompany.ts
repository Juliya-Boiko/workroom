import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { getCompanyInfo, updateCompany } from './company';
import { QUERY_KEYS } from '@/utils';

export const useCompany = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.COMPANY],
    queryFn: () => getCompanyInfo(),
  });
};

export const useCompanyMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: update, isPending } = useMutation({
    mutationFn: updateCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMPANY] });
    },
  });

  return { update, isPending };
};
