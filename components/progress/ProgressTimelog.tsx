import styles from './progressTimelog.module.scss';
import { Progress } from '../ui';
import { formatDuration } from '@/utils';

interface Props {
  estimate: string;
  value: number | undefined;
  total: number;
}

export const ProgressTimelog = ({ estimate, value, total }: Props) => {
  const logged = formatDuration(value);

  return (
    <div className={styles.progressTimelog}>
      <Progress value={value} total={total} />
      <div className={styles.wrapper}>
        <p>{logged} logged</p>
        <p className={styles.estimate}>Original Estimate {estimate}</p>
      </div>
    </div>
  );
};
