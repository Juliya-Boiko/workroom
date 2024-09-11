import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createEvent, getEvents, getCalendarEvents, QUERY_KEYS } from '@/utils';

export const useEventsMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: create, isPending: isCreating } = useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.EVENTS] });
      queryClient.refetchQueries({ queryKey: [QUERY_KEYS.CALENDAR] });
    },
  });

  return { create, isCreating };
};

export const useEvents = (take: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.EVENTS, take],
    queryFn: () => getEvents(take),
  });
};

export const useCalendarEvents = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.CALENDAR],
    queryFn: () => getCalendarEvents(),
  });
};
