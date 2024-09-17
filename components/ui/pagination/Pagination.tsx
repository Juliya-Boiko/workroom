import styles from './pagination.module.scss';

interface Props {
  start: number;
  end: number;
  total: number;
}

export const Pagination = ({ start, end, total }: Props) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.wrapper}>
        {start}-{end} of {total}
      </div>
    </div>
  );
};
