'use client';
import styles from './employeePage.module.scss';
import { useTranslations } from 'next-intl';
import { useEmployee, useCompany, useProjects } from '@/services';
import { EmployeeInfo } from '@/components/sections/employee/info/EmployeeInfo';
import { Topping } from '@/components/topping/Topping';
import { IDynamicComponent } from '@/typings';
import { ProjectsList } from '@/components/sections/dashboard/projects/progectsList/ProjectsList';

export const EmployeePage = ({ slug }: IDynamicComponent) => {
  const { data: user, isLoading } = useEmployee(slug);
  const { data: company } = useCompany();
  const { data, isLoading: isProjectsLoading } = useProjects(null);
  const t = useTranslations('Placeholder');

  const employeeProjects = data
    ? data.projects.filter((project) => project.tasks.assignee.some((el) => el._id === slug))
    : undefined;

  return (
    <div className={styles.employeePage}>
      <Topping title="employeeProfile"></Topping>
      <div className={styles.container}>
        <EmployeeInfo company={company?.name} user={user} loading={isLoading} />
        <ProjectsList
          loading={isProjectsLoading}
          projects={employeeProjects}
          placeholder={t('employee')}
        />
      </div>
    </div>
  );
};
