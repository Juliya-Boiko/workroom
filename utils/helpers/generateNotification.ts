import { ENotificationType, ETaskStatus } from '@/typings';

interface Props {
  type: ENotificationType;
  title: string;
  status: ETaskStatus;
}

export const generateNotification = ({ type, title, status }: Props) => {
  if (type === ENotificationType.STATUS) {
    return `Updated the status of ${title} task to ${status}`;
  }
  return `anothet notification`;
};
