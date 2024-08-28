import styles from './header.module.scss';
import { Menu } from './menu/Menu';
import { Notifications } from './notifications/Notification';
import { Account } from './account/Account';
import { Company } from './company/Company';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Menu />
      <div className={styles.company}>
        <Company />
      </div>
      <div className={styles.user}>
        <Notifications />
        <Account />
      </div>
    </header>
  );
};
