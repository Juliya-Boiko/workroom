import { ITask } from '@/interfaces';
import { ETaskStatus } from '@/enums';

interface SortedTasks {
  active: ITask[];
  backlog: ITask[];
}

export const taskSorter = (tasks: ITask[]) =>
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
