import styles from './employeesTable.module.scss';
import { TabsSlide, BtnIcon } from '@/components/ui';
import { EIconsSet, viewEmployeesDataTypes, EViewEmployees, IEmployee } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';
import Link from 'next/link';
import { ROUTES } from '@/utils';

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
      <ul>
        {employees.map((el) => (
          <li key={el._id}>
            <Link href={`${ROUTES.employee}/${el._id}`}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
