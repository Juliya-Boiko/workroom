import styles from './employeesActivity.module.scss';
import { viewEmployeesDataTypes, EViewEmployees, IEmployee, EIconsSet } from '@/typings';
import { TabsSlide, BtnIcon } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';
import { ActivityCard } from '@/components/cards/activity/ActivityCard';

interface Props {
  view: EViewEmployees;
  employees: IEmployee[];
  onChange: (v: EViewEmployees) => void;
}

export const EmployeesActivity = ({ view, employees, onChange }: Props) => {
  return (
    <section className={styles.employeesActivity}>
      <div className={styles.filters}>
        <TabsSlide options={viewEmployeesDataTypes} value={view} onChange={onChange} />
        <BtnIcon title="Filter">
          <SvgHandler icon={EIconsSet.Filter} />
        </BtnIcon>
      </div>
      <ul className={styles.list}>
        {employees.map((el) => (
          <li key={el._id}>
            <ActivityCard employee={el} />
          </li>
        ))}
      </ul>
    </section>
  );
};
