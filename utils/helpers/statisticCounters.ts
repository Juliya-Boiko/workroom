import { IProject } from '@/typings';

export const growthAmount = (data: IProject[]) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const count = data.filter((item) => {
    const date = new Date(item.createdAt);
    return date.getFullYear() === currentYear && date.getMonth() === currentMonth;
  }).length;
  return count;
};

export const lastAmount = (data: IProject[]) => {
  const now = new Date();
  const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1);
  const count = data.filter((item) => {
    const date = new Date(item.createdAt);
    return (
      date.getFullYear() === lastMonth.getFullYear() && date.getMonth() === lastMonth.getMonth()
    );
  }).length;
  return count;
};

interface MonthCount {
  [key: string]: { month: string; pv: number };
}

export const getDynamic = (data: IProject[]) => {
  const now = new Date();

  const months = [
    new Date(now.getFullYear(), now.getMonth() - 2),
    new Date(now.getFullYear(), now.getMonth() - 1),
    new Date(now.getFullYear(), now.getMonth()),
  ];

  const monthMap: MonthCount = months.reduce<MonthCount>((acc, date) => {
    const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    acc[yearMonth] = { month: yearMonth, pv: 0 };
    return acc;
  }, {});

  const endOfCurrentMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);

  const filteredItems = data.filter((item) => {
    const date = new Date(item.createdAt);
    return date >= months[0] && date <= endOfCurrentMonth;
  });

  filteredItems.forEach((item) => {
    const date = new Date(item.createdAt);
    const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    if (monthMap[yearMonth]) {
      monthMap[yearMonth].pv += 1;
    }
  });

  const sortedArray = Object.values(monthMap)
    .sort((a, b) => new Date(a.month).getTime() - new Date(b.month).getTime())
    .map(({ pv }) => ({ amt: 1, pv }));

  return sortedArray;
};
