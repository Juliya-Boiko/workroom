'use client';
import styles from './workload.module.scss';
import { useRouter } from 'next/navigation';
import { useEmployees } from '@/services';
import { useTranslations } from 'next-intl';
import { ROUTES } from '@/utils';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';
import { EmployeesGrid } from './employeesGrid/EmployeesGrid';
import { BtnSecondary } from '@/components/ui';

export const WorkloadSection = () => {
  const router = useRouter();
  const { data: employees, isLoading } = useEmployees(8);
  const tHolder = useTranslations('Placeholder');
  const tCommon = useTranslations('Common');
  const t = useTranslations('Employees');

  return (
    <section className={styles.workload}>
      <div className={styles.head}>
        <h2 className={styles.title}>{t('title')}</h2>
        <BtnSecondary disabled={isLoading} onClick={() => router.push(ROUTES.employees)}>
          <span>{employees?.length ? tCommon('viewAll') : t('add')}</span>
          <SvgHandler icon={EIconsSet.ChevronRight} />
        </BtnSecondary>
      </div>
      <EmployeesGrid holder={tHolder('employees')} loading={isLoading} employees={employees} />
    </section>
  );
};
