import { ETaskStatus, ITask } from '@/typings';

interface SortedTasks {
  active: ITask[];
  backlog: ITask[];
}

export const sortTasksByStatus = (tasks: ITask[]) =>
  tasks.reduce<SortedTasks>(
    (result, item) => {
      if (item.status === ETaskStatus.DONE) {
        result.backlog.push(item);
      } else {
        result.active.push(item);
      }
      return result;
    },
    { active: [], backlog: [] }
  );

export type GroupedTasks = {
  [key in ETaskStatus]: ITask[];
};

export const groupTasksByStatus = (tasks: ITask[] | undefined): GroupedTasks => {
  const initialGroupedTasks: GroupedTasks = {
    [ETaskStatus.TODO]: [],
    [ETaskStatus.INPROGRESS]: [],
    [ETaskStatus.DONE]: [],
    [ETaskStatus.REVIEW]: [],
  };

  if (!tasks) return initialGroupedTasks;

  return tasks.reduce((acc: GroupedTasks, task: ITask) => {
    acc[task.status].push(task);
    return acc;
  }, initialGroupedTasks);
};
