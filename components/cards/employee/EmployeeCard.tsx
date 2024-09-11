import styles from './employeeCard.module.scss';
import Link from 'next/link';
import { formatDayDate, getFullYears, ROUTES } from '@/utils';
import { Avatar, BadgeLevel } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';
import { Delete } from '@/components/delete/Delete';
import { IEmployee, EIconsSet } from '@/typings';
import { EmployeeCardOptions } from './options/EmployeeCardOptions';

interface Props {
  employee: IEmployee;
}

export const EmployeeCard = ({ employee }: Props) => {
  console.log(employee);
  const user = {
    name: employee.name,
    avatar: employee.avatar,
  };

  return (
    <li className={styles.employeeCard}>
      <div className={styles.user}>
        <div>
          <Avatar size="l" user={user} />
        </div>
        <div>
          <p className={styles.name}>{employee.name}</p>
          <p className={styles.email}>{employee.email}</p>
        </div>
      </div>

      <div className={styles.age}>
        <div className={styles.wrapper}>
          <p className={styles.subtitle}>Birthday</p>
          <p>{employee.birthday ? formatDayDate(employee.birthday.toString()) : '-'}</p>
        </div>
        <div className={styles.wrapper}>
          <p className={styles.subtitle}>Full age</p>
          <p>{employee.birthday ? getFullYears(employee.birthday.toString()) : '-'}</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.subtitle}>Position</p>
        <div className={styles.profession}>
          <span>{employee.profession}</span>
          {employee.level && <BadgeLevel label={employee.level} />}
        </div>
      </div>
      <div className={styles.options}>
        <Link href={`${ROUTES.employee}/${employee._id}`} className={styles.link}>
          <SvgHandler icon={EIconsSet.Eye} />
        </Link>
        <Delete />
      </div>
      <div className={styles.dropdown}>
        <EmployeeCardOptions id={employee._id} />
      </div>
    </li>
  );
};
