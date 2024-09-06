'use client';
import styles from './employeesPage.module.scss';
import { Topping } from '@/components/topping/Topping';
import { Modal, BtnPrimary, BtnIcon, TabsSlide } from '@/components/ui';
import { AddEmployeeForm } from '@/components/forms/addEmployee/AddEmployeeForm';
import { EIconsSet, viewEmployeesDataTypes } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';
import { EmployeesTable } from '@/components/sections/employees/table/EmployeesTable';

export const EmployeesPage = () => {
  return (
    <div className={styles.employeesPage}>
      <Topping title="Employees">
        <div className={styles.mobileHidden}>
          <TabsSlide options={viewEmployeesDataTypes} />
        </div>
        <div className={styles.wrapper}>
          <BtnIcon title="Filter">
            <SvgHandler icon={EIconsSet.Filter} />
          </BtnIcon>
          <Modal
            title="Add Employee"
            activator={
              <BtnPrimary>
                <SvgHandler icon={EIconsSet.Plus} />
                <span>Add Employee</span>
              </BtnPrimary>
            }
            content={<AddEmployeeForm />}
          />
        </div>
      </Topping>
      <EmployeesTable />
    </div>
  );
};
