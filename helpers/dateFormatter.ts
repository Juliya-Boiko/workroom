import { TODAY_OPTIONS, DATE_LOCALE } from '@/constants';

export const formatDeadlineDate = (value: string) => {
  if (value) {
    const date = new Date(value);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  }
};

export const formatDayDate = (value: string) => {
  if (value) {
    const day = new Date(value);
    return day.toLocaleDateString(DATE_LOCALE, TODAY_OPTIONS);
  }
};

export const getTomorrowDate = (value: Date) => {
  const tomorrow = value;
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
};

export const getEstimate = (start: Date, end: Date) => {
  const date1 = new Date(start);
  const date2 = new Date(end);
  const diffInMs: number = date2.getTime() - date1.getTime();

  const millisecondsInAnHour = 1000 * 60 * 60;
  const millisecondsInADay = millisecondsInAnHour * 24;

  const days = Math.floor(diffInMs / millisecondsInADay) + 1;
  const hours = Math.floor((diffInMs % millisecondsInADay) / millisecondsInAnHour);
  return `${days}d ${hours}h`;
};
