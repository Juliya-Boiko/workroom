'use client';
import styles from './settings.module.scss';
import { useState } from 'react';
import { settings, ISetting } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet, ESettings } from '@/typings';
import { AccountForm, CompanyForm } from '@/components/forms/settings';

export const Settings = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(settings[0]);

  const getForm = () => {
    if (active.title === ESettings.ACCOUNT) {
      return <AccountForm />;
    }
    if (active.title === ESettings.COMPANY) {
      return <CompanyForm />;
    }
    return <div>another form</div>;
  };

  const handleSelect = (v: ISetting) => {
    setActive(v);
    setOpen(false);
  };

  return (
    <div className={styles.userSettings}>
      <button type="button" className={styles.toggleBtn} onClick={() => setOpen((v) => !v)}>
        <div className={styles.wrapper}>
          <SvgHandler icon={active.icon} />
          <span>{active.title}</span>
        </div>
        <SvgHandler icon={EIconsSet.ChevronDown} />
      </button>
      <ul className={`${styles.list} ${open ? styles.visible : styles.hidden}`}>
        {settings.map((el) => (
          <li
            key={el.title}
            className={`${styles.item} ${active.title === el.title ? styles.active : ''}`}
            onClick={() => handleSelect(el)}
          >
            <div className={styles.icon}>
              <SvgHandler icon={el.icon} />
            </div>
            <span>{el.title}</span>
          </li>
        ))}
      </ul>
      <div>{getForm()}</div>
    </div>
  );
};
