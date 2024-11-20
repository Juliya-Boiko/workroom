'use client';
import styles from './employeePage.module.scss';
import { useEmployee, useCompany, useProjects } from '@/services';
import { EmployeeInfo } from '@/components/sections/employee/info/EmployeeInfo';
import { Topping } from '@/components/topping/Topping';
import { IDynamicComponent } from '@/typings';
import { ProjectsList } from '@/components/sections/dashboard/projects/progectsList/ProjectsList';

export const EmployeePage = ({ slug }: IDynamicComponent) => {
  const { data: user, isLoading } = useEmployee(slug);
  const { data: company } = useCompany();
  const { data, isLoading: isProjectsLoading } = useProjects(null);

  const employeeProjects = data
    ? data.projects.filter((project) => project.tasks.assignee.some((el) => el._id === slug))
    : undefined;

  return (
    <div className={styles.employeePage}>
      <Topping title="employeeProfile" />
      <div className={styles.container}>
        <EmployeeInfo company={company?.name} user={user} loading={isLoading} />
        <ProjectsList
          loading={isProjectsLoading}
          projects={employeeProjects}
          placeholder="employee"
        />
      </div>
    </div>
  );
};
