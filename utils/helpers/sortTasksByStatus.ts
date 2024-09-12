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
