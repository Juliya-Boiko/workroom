export enum ETaskStatus {
  TODO = 'toDo',
  INPROGRESS = 'inProgress',
  REVIEW = 'inReview',
  DONE = 'done',
}

export const taskStatusDataTypes = Object.values(ETaskStatus);

export type TaskCountsType = Record<ETaskStatus, number>;

export const initialTasksCounts: TaskCountsType = taskStatusDataTypes.reduce((acc, status) => {
  acc[status as ETaskStatus] = 0;
  return acc;
}, {} as TaskCountsType);
