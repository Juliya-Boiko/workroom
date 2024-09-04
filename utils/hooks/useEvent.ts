import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createEvent, getEvents, QUERY_KEYS } from '@/utils';

export const useEventsMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: create, isPending: isCreating } = useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.EVENTS] });
    },
  });

  return { create, isCreating };
};

interface Props {
  take?: number;
}

export const useEvents = ({ take }: Props) => {
  return useQuery({
    queryKey: [QUERY_KEYS.EVENTS],
    queryFn: () => getEvents(take),
  });
};
