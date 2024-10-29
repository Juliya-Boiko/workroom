import { IProject } from '@/typings';

export const growthAmount = (data: IProject[]) => {
  if (!data || (data && !data.projects.length)) return 0;
  const currentMonth = new Date();

  console.log({ currentMonth, data });

  return 444;
};
