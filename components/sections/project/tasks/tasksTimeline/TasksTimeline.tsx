import { ITask } from '@/typings';

interface Props {
  tasks: ITask[] | undefined;
}

export const TasksTimeline = ({ tasks }: Props) => {
  console.log(tasks);

  return (
    <ul>
      {tasks && 
        tasks.map(({ _id, name }) => (
        <li key={_id}>
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};
