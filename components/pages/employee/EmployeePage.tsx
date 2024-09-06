'use client';
import { EmployeeInfo } from '@/components/sections/employee/info/EmployeeInfo';
import styles from './employeePage.module.scss';
import { Topping } from '@/components/topping/Topping';
import { IDynamicComponent } from '@/typings';
import { useEmployee, useCompany } from '@/utils';

export const EmployeePage = ({ slug }: IDynamicComponent) => {
  const { data: user, isLoading } = useEmployee(slug);
  const { data: company } = useCompany();

  // console.log({ isLoading, user });

  return (
    <div className={styles.employeePage}>
      <Topping title="Employee’s Profile"></Topping>
      <div className={styles.container}>
        <EmployeeInfo company={company} user={user} loading={isLoading} />
        <div>table</div>
      </div>
    </div>
  );
};
