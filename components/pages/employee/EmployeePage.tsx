'use client';
import styles from './employeePage.module.scss';
import { Topping } from '@/components/topping/Topping';
import { ProfileForm } from '@/components/forms/profile/ProfileForm';
import { IDynamicComponent } from '@/typings';
import { useEmployee } from '@/utils';

export const EmployeePage = ({ slug }: IDynamicComponent) => {
  const { data: user, isLoading } = useEmployee(slug);

  console.log({ isLoading, data });

  return (
    <div className={styles.employeePage}>
      <Topping title="Employee’s Profile"></Topping>
      <div className={styles.container}>
        profile
      </div>
    </div>
  );
};
