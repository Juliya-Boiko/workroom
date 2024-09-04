import { ECategoryEvent, EIconsSet } from '@/typings';

export const eventsType = (v: ECategoryEvent) => {
  if (v === ECategoryEvent.BIRTHDAY)
    return {
      color: '#DE92EB',
      icon: EIconsSet.Gift,
    };
  if (v === ECategoryEvent.CORPORATE)
    return {
      color: '#3F8CFF',
      icon: EIconsSet.Buildings,
    };
  if (v === ECategoryEvent.MEETING)
    return {
      color: '#FDC748',
      icon: EIconsSet.Meetings,
    };
  return {
    color: '#6D5DD3',
    icon: EIconsSet.CirclesTriangle,
  };
};
