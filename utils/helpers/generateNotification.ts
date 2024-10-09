import { ENotificationType } from '@/typings';
import { getTaskById } from '../actions';

interface Props {
  type: ENotificationType;
  taskId: string;
}

export const generateNotificationText = async ({ type, taskId }: Props) => {
  const task = await getTaskById(taskId);
  if (type === ENotificationType.STATUS) {
    return `Updated the status of ${task.name} task to ${task.status}`;
  }
  if (type === ENotificationType.COMMENT) {
    return `Left comment to task ${task.name}`;
  }
  if (type === ENotificationType.ATTACH) {
    return `Attached files to the task ${task.name}`;
  }
  return `Task ${task.name} assigned to ${task.assignee?.name}`;
};
