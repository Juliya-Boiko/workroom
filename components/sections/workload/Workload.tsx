'use client';
import styles from './workload.module.scss';
import { useRouter } from 'next/navigation';
import { useEmployees } from '@/services';
import { ROUTES } from '@/constants';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/enums';
import { EmployeesGrid } from './employeesGrid/EmployeesGrid';
import { BtnSecondary } from '@/components/ui/buttons/secondary/BtnSecondary';

export const WorkloadSection = () => {
  const router = useRouter();
  const { data: employees, isLoading } = useEmployees({ take: 8 });

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
