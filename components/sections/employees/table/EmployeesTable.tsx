import styles from './employeesTable.module.scss';
import { TabsSlide, BtnIcon } from '@/components/ui';
import { EIconsSet, viewEmployeesDataTypes, EViewEmployees, IEmployee } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';
import { EmployeeCard } from '@/components/cards/employee/EmployeeCard';

interface Props {
  view: EViewEmployees;
  employees: IEmployee[];
  onChange: (v: EViewEmployees) => void;
}

export const EmployeesTable = ({ view, onChange, employees }: Props) => {
  return (
    <section className={styles.employeesTable}>
      <div className={styles.filters}>
        <TabsSlide options={viewEmployeesDataTypes} value={view} onChange={onChange} />
        <BtnIcon title="Filter">
          <SvgHandler icon={EIconsSet.Filter} />
        </BtnIcon>
      </div>
      <ul className={styles.list}>
        {employees.map((el) => (
          <EmployeeCard key={el._id} employee={el} />
        ))}
      </ul>
    </section>
  );
};
