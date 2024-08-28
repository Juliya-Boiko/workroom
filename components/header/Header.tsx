import styles from './header.module.scss';
import { Menu } from './menu/Menu';
import { Notifications } from './notifications/Notification';
import { Account } from './account/Account';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Menu />
      <div className={styles.user}>
        <Notifications />
        <Account />
      </div>
    </header>
  );
};
