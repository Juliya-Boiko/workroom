'use client';
import styles from './settings.module.scss';
import { useState } from 'react';
import { useProfile } from '@/services';
import { settings, ISetting } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet, ESettings } from '@/typings';
import { AccountForm, CompanyForm, ContactsForm, NotifyForm } from '@/components/forms/settings';
import { ChangePasswordForm } from '@/components/forms/changePassword/ChangePasswordForm';
import { Localization } from '@/components/ui/localization/Localization';

export const Settings = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(settings[0]);
  const { data: user } = useProfile();

  const forms = {
    [ESettings.ACCOUNT]: <AccountForm />,
    [ESettings.LANGUAGE]: (
      <div>
        <Localization />
      </div>
    ),
    [ESettings.APPS]: <ContactsForm />,
    [ESettings.COMPANY]: <CompanyForm />,
    [ESettings.SAFETY]: user ? <ChangePasswordForm email={user?.email} /> : null,
    [ESettings.NOTIFICATIONS]: <NotifyForm />,
    [ESettings.PAYMENTS]: <div>PAYMENTS</div>,
    [ESettings.CONFIDENTIALITY]: <div>CONFIDENTIALITY</div>,
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
      <div className={styles.formWrapper}>
        <h6 className={styles.formTitle}>{active.title}</h6>
        {forms[active.title]}
      </div>
    </div>
  );
};
