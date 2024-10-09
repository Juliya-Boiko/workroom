import styles from './employeesGrid.module.scss';
import { employeeSectionSkeleton } from '@/utils';
import { WorkloadCard } from '@/components/cards/workload/WorkloadCard';
import { IEmployee } from '@/typings';
import { Placeholder } from '@/components/ui';

interface Props {
  loading: boolean;
  employees: IEmployee[] | undefined;
}

export const EmployeesGrid = ({ loading, employees }: Props) => (
  <>
    {loading && (
      <ul className={styles.employeesGrid}>
        {employeeSectionSkeleton.map((el) => (
          <li key={el._id}>
            <WorkloadCard loading={loading} user={el} />
          </li>
        ))}
      </ul>
    )}
    {employees && employees.length > 0 && (
      <ul className={styles.employeesGrid}>
        {employees.map((el) => (
          <li key={el._id}>
            <WorkloadCard loading={loading} user={el} />
          </li>
        ))}
      </ul>
    )}
    {!loading && !employees?.length && <Placeholder title="You dont have employees yet" primary />}
  </>
);
