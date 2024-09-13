'use client';
import styles from './employeesPage.module.scss';
import Image from 'next/image';
import imgSrc from '../../../public/placeholder-1.png';
import { useState } from 'react';
import { viewEmployeesDataTypes, EIconsSet, EViewEmployees } from '@/typings';
import { useEmployees } from '@/services';
import { Topping } from '@/components/topping/Topping';
import { Modal, BtnPrimary, BtnIcon, TabsSlide, Preloader } from '@/components/ui';
import { AddEmployeeForm } from '@/components/forms/addEmployee/AddEmployeeForm';
import { SvgHandler } from '@/components/SvgHandler';
import { EmployeesTable } from '@/components/sections/employees/table/EmployeesTable';
import { EmployeesActivity } from '@/components/sections/employees/activity/EmployeesActivity';

export const EmployeesPage = () => {
  const [view, setView] = useState(viewEmployeesDataTypes[0]);
  const { data: employees, isLoading } = useEmployees();

  return (
    <div className={styles.employeesPage}>
      <Topping title={`Employees ${employees?.length ? `(${employees.length})` : ''}`}>
        <div className={styles.tabletHidden}>
          <TabsSlide options={viewEmployeesDataTypes} value={view} onChange={(v) => setView(v)} />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.tabletHidden}>
            <BtnIcon title="Filter">
              <SvgHandler icon={EIconsSet.Filter} />
            </BtnIcon>
          </div>
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
      {isLoading && (
        <div className={styles.loader}>
          <Preloader />
        </div>
      )}
      {employees && !employees.length && (
        <div className={styles.placeholder}>
          <p>You dont have employees yet</p>
          <Image src={imgSrc} priority alt="Projects" className={styles.image} />
        </div>
      )}
      {employees &&
        employees.length > 0 &&
        (view === EViewEmployees.LIST ? (
          <EmployeesTable view={view} onChange={(v) => setView(v)} employees={employees} />
        ) : (
          <EmployeesActivity view={view} onChange={(v) => setView(v)} employees={employees} />
        ))}
    </div>
  );
};
