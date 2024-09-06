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
            <WorkloadCard key={el._id} loading={loading} user={el} />
          ))}
        </ul>
      )}
      {employees && employees.length > 0 && (
        <ul className={styles.employeesGrid}>
          {employees.map((el) => (
            <WorkloadCard key={el._id} loading={loading} user={el} />
          ))}
        </ul>
      )}
      {!loading && !employees?.length && (
        <div className={styles.placeholder}>
          <p>You dont have employees yet</p>
          <Image src={imgSrc} alt="Employees" className={styles.image} />
        </div>
      )}
    </>
  );
};
