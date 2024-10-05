import { IProject, ITask } from '@/typings';

const incrementOrder = (order: string) => {
  const incrementedNumber = parseInt(order, 10) + 1;
  const paddedNumber = incrementedNumber.toString().padStart(5, '0');
  return paddedNumber;
};

export const defineProjectNumber = (project: IProject | null) => {
  if (project) {
    const [prefix, numberPart] = project.order.split('-');
    return `${prefix}-${incrementOrder(numberPart)}`;
  } else {
    return 'PN-00001';
  }
};

export const defineTaskNumber = (task: ITask | null) => {
  if (task) {
    const [prefix, numberPart] = task.order.split('-');
    return `${prefix}-${incrementOrder(numberPart)}`;
  } else {
    return 'TS-00001';
  }
};
