import styles from './tasksView.module.scss';
import { BtnIcon } from '@/components/ui';
import { EViewTasks, tasksViewDataTypes } from '@/typings';

interface Props {
  view: EViewTasks;
  setView: (v: EViewTasks) => void;
}

export const TasksView = ({ view, setView }: Props) => (
  <div className={styles.tasksView}>
    {tasksViewDataTypes.map(({ value, icon }) => (
      <BtnIcon
        key={value}
        title={value}
        active={view === value}
        onClick={() => setView(value)}
        icon={icon}
      />
    ))}
  </div>
);
