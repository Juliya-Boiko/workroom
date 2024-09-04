import styles from './tasksActions.module.scss';
import { BtnIcon } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet, EView, viewDataTypes } from '@/enums';

interface Props {
  view: EView;
  setView: (v: EView) => void;
}

export const TasksActions = ({ view, setView }: Props) => {
  return (
    <div className={styles.tasksActions}>
      <h6 className={styles.title}>Tasks</h6>
      <div className={styles.actions}>
        <div className={styles.view}>
          {viewDataTypes.map(({ value, icon }) => (
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
        <BtnIcon title="Filter">
          <SvgHandler icon={EIconsSet.Filter} />
        </BtnIcon>
      </div>
    </div>
  );
};
