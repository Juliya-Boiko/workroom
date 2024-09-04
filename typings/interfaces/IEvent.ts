import { ECategoryEvent, EPriority } from '../enums';

export interface IEvent {
  category: ECategoryEvent;
  date: Date;
  description: string;
  name: string;
  priority: EPriority;
  time: string;
  _id: string;
}
