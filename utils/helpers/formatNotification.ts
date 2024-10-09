import { taskStatusDataTypes } from '@/typings';

const taskStatusRegex = new RegExp(taskStatusDataTypes.join('|'));

export const formatNotification = (text: string) => {
  return text.replace(
    taskStatusRegex,
    (match) => `<span style="color: #3F8CFF; font-weight: 700;">${match}</span>`
  );
};

export const getCreatedTimer = (dateString: Date) => {
  const dateFromDb: Date = new Date(dateString);
  const now: Date = new Date();

  const isToday = dateFromDb.toLocaleDateString() === now.toLocaleDateString();
  const isYesterday = now.getDate() - dateFromDb.getDate() === 1;

  if (isToday) {
    const diffInMs: number = now.getTime() - dateFromDb.getTime();
    const diffInHours: number = Math.floor(diffInMs / (1000 * 60 * 60));
    return `${diffInHours} h`;
  }
  if (isYesterday) {
    return 'Yesterday';
  }
  return dateFromDb.toLocaleDateString();
};
