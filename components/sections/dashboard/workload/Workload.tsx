'use client';
import styles from './workload.module.scss';
import { useRouter } from 'next/navigation';
import { useEmployees, ROUTES } from '@/utils';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';
import { EmployeesGrid } from './employeesGrid/EmployeesGrid';
import { BtnSecondary } from '@/components/ui';

export const WorkloadSection = () => {
  const router = useRouter();
  const { data: employees, isLoading } = useEmployees(8);

  return (
    <section className={styles.workload}>
      <div className={styles.head}>
        <h2 className={styles.title}>Workload</h2>
        <BtnSecondary disabled={isLoading} onClick={() => router.push(ROUTES.employees)}>
          <span>{employees?.length ? 'View all' : 'Add new'}</span>
          <SvgHandler icon={EIconsSet.ChevronRight} />
        </BtnSecondary>
      </div>
      <EmployeesGrid loading={isLoading} employees={employees} />
    </section>
  );
};
