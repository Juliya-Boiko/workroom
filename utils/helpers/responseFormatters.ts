import { IProjectResponse, ETaskStatus, INotificationsResponse, EUserPosition } from '@/typings';

export const formatProjectsWithTasks = (data: IProjectResponse[], position: string, id: string) => {
  const projects = data.map((el) => {
    const allTasks = el.tasks;
    const activeTasks = el.tasks.filter((task) => task.status !== ETaskStatus.DONE);
    const users = el.tasks.map((task) => task.assignee);
    const assignee = users
      .filter((el) => el)
      .filter((user, index, self) => index === self.findIndex((u) => u._id === user._id));
    return {
      ...el,
      tasks: {
        all: allTasks.length,
        active: activeTasks.length,
        assignee,
      },
    };
  });
  if (position === EUserPosition.OWNER) return projects;

  const filteredProjects = projects.filter((project) =>
    project.tasks.assignee.some((user) => user._id.toString() === id)
  );

  return filteredProjects;
};

export const formatNotifications = (data: INotificationsResponse[]) => {
  return data.map(({ _id, text, type, userId, createdAt }) => ({
    _id,
    text,
    type,
    createdAt,
    user: { name: userId.name, avatar: userId.avatar, profession: userId.profession },
  }));
};
