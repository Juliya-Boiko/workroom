import { ENotificationType } from '../enums';

export interface INotificationsResponse {
  _id: string;
  text: string;
  type: ENotificationType;
  createdAt: Date;
  userId: {
    name: string;
    avatar: string | null;
    profession: string;
  };
}

export interface INotification extends Omit<INotificationsResponse, 'userId'> {
  user: {
    name: string;
    avatar: string | null;
    profession: string;
  };
}
