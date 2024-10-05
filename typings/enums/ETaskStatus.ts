export enum ETaskStatus {
  TODO = 'To Do',
  INPROGRESS = 'In Progress',
  REVIEW = 'In Review',
  DONE = 'Done',
}

export const taskStatusDataTypes = Object.values(ETaskStatus);

export type TaskCountsType = Record<ETaskStatus, number>;

export const initialTasksCounts: TaskCountsType = taskStatusDataTypes.reduce((acc, status) => {
  acc[status as ETaskStatus] = 0;
  return acc;
}, {} as TaskCountsType);
