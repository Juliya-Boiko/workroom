import styles from './employeesGrid.module.scss';
import Image from 'next/image';
import imgSrc from '../../../../../public/placeholder-1.png';
import { employeeSectionSkeleton } from '@/utils';
import { WorkloadCard } from '@/components/cards/workload/WorkloadCard';
import { IEmployee } from '@/typings';

interface Props {
  loading: boolean;
  employees: IEmployee[] | undefined;
}

export const EmployeesGrid = ({ loading, employees }: Props) => {
  return (
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
      {!loading && !employees?.length && (
        <div className={styles.placeholder}>
          <p>You dont have employees yet</p>
          <Image src={imgSrc} priority alt="Employees" className={styles.image} />
        </div>
      )}
    </>
  );
};
