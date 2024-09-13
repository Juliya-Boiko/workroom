import styles from './tasksActions.module.scss';
import { BtnIcon } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';
import { EViewTasks, tasksViewDataTypes } from '@/typings';
import { TasksFilter } from '../tasksFilter/TasksFilter';

interface Props {
  view: EViewTasks;
  setView: (v: EViewTasks) => void;
}

export const TasksActions = ({ view, setView }: Props) => {
  return (
    <div className={styles.tasksActions}>
      <h6 className={styles.title}>Tasks</h6>
      <div className={styles.actions}>
        <div className={styles.view}>
          {tasksViewDataTypes.map(({ value, icon }) => (
            <BtnIcon
              key={value}
              title={value}
              active={view === value}
              onClick={() => setView(value)}
            >
              <SvgHandler icon={icon} />
            </BtnIcon>
          ))}
        </div>
        <TasksFilter />
      </div>
    </div>
  );
};
