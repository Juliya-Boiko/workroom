import styles from './header.module.scss';
import { Menu } from './menu/Menu';
import { Notifications } from './notifications/Notification';
import { Account } from './account/Account';
import { Search } from './search/Search';

export const Header = () => (
  <header className={styles.header}>
    <Menu />
    <div className={styles.search}>
      <Search />
    </div>
    <div className={styles.user}>
      <Notifications />
      <Account />
    </div>
  </header>
);
