import moment from 'moment';
import { format } from 'date-fns';
import { TODAY_OPTIONS, DATE_LOCALE } from '@/utils';

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

export const formatDayDate = (value: string | Date) => {
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
  return `${days}d`;
};

export const getDaysToDeadline = (deadline: Date) => {
  const todayDate = new Date();
  const deadlineDate = new Date(deadline);
  const differenceInTime = deadlineDate.getTime() - todayDate.getTime();
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
  return `${differenceInDays}d`;
};

const getIsToday = (value: Date) => {
  const today = new Date().toLocaleDateString();
  const eventDay = new Date(value).toLocaleDateString();
  const date1 = moment(today, 'DD.MM.YYYY');
  const date2 = moment(eventDay, 'DD.MM.YYYY');
  return date2.diff(date1, 'days');
};

export const getEventDateTime = (value: Date) => {
  const daysDifference = getIsToday(value);
  if (!daysDifference) return 'Today';
  if (daysDifference === 1) return 'Tomorrow';
  return new Date(value).toLocaleDateString();
};

export const getEventTimer = (date: Date, time: string) => {
  const daysDifference = getIsToday(date);
  if (!daysDifference) {
    const eventDate = moment(date);
    const [hours, minutes] = time.split(':');
    eventDate.set({ hour: +hours, minute: +minutes });
    const now = moment();
    const hoursLeft = eventDate.diff(now, 'hours');
    if (hoursLeft) {
      return `${hoursLeft} h`;
    } else {
      const minutesLeft = eventDate.diff(now, 'minutes');
      return `${minutesLeft} m`;
    }
  } else {
    return `${daysDifference} d`;
  }
};

export const getFullYears = (day: string) => {
  const birthday = new Date(day);
  const currentDate = new Date();
  let fullYears = currentDate.getFullYear() - birthday.getFullYear();
  const currentMonth = currentDate.getMonth();
  const birthdayMonth = birthday.getMonth();
  if (
    currentMonth < birthdayMonth ||
    (currentMonth === birthdayMonth && currentDate.getDate() < birthday.getDate())
  ) {
    fullYears--;
  }
  return fullYears;
};

export const formatDateTime = (value: Date) => {
  const date = new Date(value);
  return format(date, 'dd.MM.yyyy HH:mm');
};
