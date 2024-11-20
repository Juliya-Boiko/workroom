'use client';
import styles from './workload.module.scss';
import { useRouter } from 'next/navigation';
import { useEmployees, useUser } from '@/services';
import { useTranslations } from 'next-intl';
import { ROUTES } from '@/utils';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet, EUserPosition } from '@/typings';
import { EmployeesGrid } from './employeesGrid/EmployeesGrid';
import { BtnSecondary } from '@/components/ui';

export const WorkloadSection = () => {
  const router = useRouter();
  const { data: employees, isLoading } = useEmployees(8);
  const { data: user } = useUser();
  const t = useTranslations();

  return (
    <section className={styles.workload}>
      <div className={styles.head}>
        <h2 className={styles.title}>{t('Employees.title')}</h2>
        <BtnSecondary disabled={isLoading} onClick={() => router.push(ROUTES.employees)}>
          <span>
            {t(
              user?.position === EUserPosition.OWNER && !employees?.length
                ? 'Employees.add'
                : 'Common.viewAll'
            )}
          </span>
          <SvgHandler icon={EIconsSet.ChevronRight} />
        </BtnSecondary>
      </div>
      <EmployeesGrid holder="employees" loading={isLoading} employees={employees} />
    </section>
  );
};
