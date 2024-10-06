export const isValidDuration = (start: string, end: string) => {
  const [startHour, startMinute] = start.split(':').map(Number);
  const [endHour, endMinute] = end.split(':').map(Number);
  const startTime = new Date();
  startTime.setHours(startHour, startMinute, 0, 0);
  const endTime = new Date();
  endTime.setHours(endHour, endMinute, 0, 0);
  return endTime > startTime;
};

export const calculateDuration = (start: string, end: string) => {
  const [startHour, startMinute] = start.split(':').map(Number);
  const [endHour, endMinute] = end.split(':').map(Number);
  const startTotalMinutes = startHour * 60 + startMinute;
  const endTotalMinutes = endHour * 60 + endMinute;
  const diffMinutes = endTotalMinutes - startTotalMinutes;
  const diffSeconds = diffMinutes * 60;
  return diffSeconds;
};

export const formatDuration = (seconds: number | undefined) => {
  if (!seconds) {
    return '0h';
  }
  const days = Math.floor(seconds / (24 * 3600));
  seconds %= 24 * 3600;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  const parts = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  return parts.join(' ');
};

export const calculateEstimateInSeconds = (start: Date, deadline: Date) => {
  const startDate = new Date(start);
  const deadlineDate = new Date(deadline);
  const timeDifference = deadlineDate.getTime() - startDate.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)) + 1;
  if (daysDifference < 2) return 8 * 60 * 60;
  const workingHours = daysDifference * 8;
  const seconds = workingHours * 60 * 60;
  return seconds;
};
