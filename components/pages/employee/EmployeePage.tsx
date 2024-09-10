'use client';
import { EmployeeInfo } from '@/components/sections/employee/info/EmployeeInfo';
import styles from './employeePage.module.scss';
import { Topping } from '@/components/topping/Topping';
import { IDynamicComponent } from '@/typings';
import { useEmployee, useCompany, useProjects } from '@/utils';
import { ProjectsList } from '@/components/sections/dashboard/projects/progectsList/ProjectsList';

export const EmployeePage = ({ slug }: IDynamicComponent) => {
  const { data: user, isLoading } = useEmployee(slug);
  const { data: company } = useCompany();
  const { data: projects, isLoading: isProjectsLoading } = useProjects();

  const employeeProjects = projects
    ? projects.filter((project) => project.tasks.assignee.some((el) => el._id === slug))
    : undefined;

  return (
    <div className={styles.employeePage}>
      <Topping title="Employee’s Profile"></Topping>
      <div className={styles.container}>
        <EmployeeInfo company={company} user={user} loading={isLoading} />
        <ProjectsList loading={isProjectsLoading} projects={employeeProjects} />
      </div>
    </div>
  );
};
