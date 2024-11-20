'use client';
import styles from './employeesPage.module.scss';
import { useState } from 'react';
import { useEmployees, useUser } from '@/services';
import { useTranslations } from 'next-intl';
import { viewEmployeesDataTypes, EIconsSet, EViewEmployees, EUserPosition } from '@/typings';
import { Topping } from '@/components/topping/Topping';
import { SvgHandler } from '@/components/SvgHandler';
import { Modal, BtnPrimary, BtnIcon, TabsSlide, Preloader, Placeholder } from '@/components/ui';
import { AddEmployeeForm } from '@/components/forms/addEmployee/AddEmployeeForm';
import { EmployeesTable } from '@/components/sections/employees/table/EmployeesTable';
import { EmployeesActivity } from '@/components/sections/employees/activity/EmployeesActivity';

export const EmployeesPage = () => {
  const [view, setView] = useState(viewEmployeesDataTypes[0]);
  const { data: employees, isLoading } = useEmployees();
  const { data: user } = useUser();
  const t = useTranslations();

  return (
    <div className={styles.employeesPage}>
      <Topping title="employees">
        <div className={styles.tabletHidden}>
          <TabsSlide options={viewEmployeesDataTypes} value={view} onChange={(v) => setView(v)} />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.tabletHidden}>
            <BtnIcon title="Filter" icon={EIconsSet.Filter} />
          </div>
          {user?.position === EUserPosition.OWNER && (
            <Modal
              title={t('Employees.add')}
              activator={
                <BtnPrimary disabled={isLoading}>
                  <SvgHandler icon={EIconsSet.Plus} />
                  <span>{t('Employees.add')}</span>
                </BtnPrimary>
              }
              content={<AddEmployeeForm />}
            />
          )}
        </div>
      </Topping>
      <div className={styles.container}>
        {isLoading && (
          <div className={styles.loader}>
            <Preloader />
          </div>
        )}
        {employees && !employees.length && <Placeholder primary title="employees" />}
        {employees &&
          employees.length > 0 &&
          (view === EViewEmployees.LIST ? (
            <EmployeesTable view={view} onChange={(v) => setView(v)} employees={employees} />
          ) : (
            <EmployeesActivity view={view} onChange={(v) => setView(v)} employees={employees} />
          ))}
      </div>
    </div>
  );
};
