'use client';
import styles from './employeeCard.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { formatDayDate, getFullYears, ROUTES, LOCALE_LANGUAGE } from '@/utils';
import { Avatar, BadgeLevel } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';
import { IEmployee, EIconsSet } from '@/typings';
import { EmployeeCardOptions } from './options/EmployeeCardOptions';

interface Props {
  employee: IEmployee;
}

export const EmployeeCard = ({ employee }: Props) => {
  const [locale, setLocale] = useState<string | null>(null);
  const t = useTranslations('Common');

  useEffect(() => {
    const storedLocale = localStorage.getItem(LOCALE_LANGUAGE);
    setLocale(storedLocale);
  }, []);

  return (
    <li className={styles.employeeCard}>
      <div className={styles.user}>
        <div>
          <Avatar
            size="l"
            user={{
              name: employee.name,
              avatar: employee.avatar,
            }}
          />
        </div>
        <div>
          <p className={styles.name}>{employee.name}</p>
          <p className={styles.email}>{employee.email}</p>
        </div>
      </div>

      <div className={styles.age}>
        <div className={styles.wrapper}>
          <p className={styles.subtitle}>{t('birthday')}</p>
          <p>{employee.birthday ? formatDayDate(employee.birthday.toString(), locale) : '-'}</p>
        </div>
        <div className={styles.wrapper}>
          <p className={styles.subtitle}>{t('age')}</p>
          <p>{employee.birthday ? getFullYears(employee.birthday.toString()) : '-'}</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.subtitle}>{t('position')}</p>
        <div className={styles.profession}>
          <span>{employee.profession}</span>
          {employee.level && <BadgeLevel label={employee.level} />}
        </div>
      </div>
      <div className={styles.options}>
        <Link href={`${ROUTES.employee}/${employee._id}`} className={styles.link}>
          <SvgHandler icon={EIconsSet.Eye} />
        </Link>
        <button type="button">Delete</button>
      </div>
      <div className={styles.dropdown}>
        <EmployeeCardOptions id={employee._id} />
      </div>
    </li>
  );
};
