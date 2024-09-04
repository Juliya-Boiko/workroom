import styles from './employeesGrid.module.scss';
import Image from 'next/image';
import imgSrc from '../../../../../public/placeholder-1.png';
import { employeeSectionSkeleton } from '@/utils';
import { EmployeeCard } from '@/components/cards/employee/EmployeeCard';
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
            <EmployeeCard key={el._id} loading={loading} user={el} />
          ))}
        </ul>
      )}
      {employees && employees.length > 0 && (
        <ul className={styles.employeesGrid}>
          {employees.map((el) => (
            <EmployeeCard key={el._id} loading={loading} user={el} />
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
