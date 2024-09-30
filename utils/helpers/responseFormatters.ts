import {
  IProjectResponse,
  ETaskStatus,
  // EAttachType,
  // IAttachment,
} from '@/typings';

export const formatProjectsWithTasks = (data: IProjectResponse[]) => {
  return data.map((el) => {
    const allTasks = el.tasks;
    const activeTasks = el.tasks.filter((task) => task.status !== ETaskStatus.DONE);
    const users = el.tasks.map((task) => task.assignee);
    const assignee = users.filter(
      (user, index, self) => index === self.findIndex((u) => u._id === user._id)
    );
    return {
      ...el,
      tasks: {
        all: allTasks.length,
        active: activeTasks.length,
        assignee,
      },
    };
  });
};

export const formatTaskAttachments = () => {
  // const initialValue: IAttachment = { links: [], files: [] };
  // return data.reduce((acc, curr) => {
  //   if (curr.type === EAttachType.LINK) {
  //     acc.links.push(curr);
  //   } else {
  //     acc.files.push(curr);
  //   }
  //   return acc;
  // }, initialValue);
};
