import { IProject } from '@/typings';

export const defineProjectNumber = (project: IProject | null) => {
  if (project) {
    const numericPart = parseInt(project.order.slice(3), 10);
    const incrementedNumber = numericPart + 1;
    const paddedNumber = incrementedNumber.toString().padStart(7, '0');
    return `PN-${paddedNumber}`;
  } else {
    return 'PN-00001';
  }
};
