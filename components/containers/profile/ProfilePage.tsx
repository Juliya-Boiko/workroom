import styles from './profilePage.module.scss';
import { Topping } from '@/components/topping/Topping';
import { UserInfo } from '@/components/sections/profile/userInfo/UserInfo';
import { UserData } from '@/components/sections/profile/userData/UserData';

export const ProfilePage = () => (
  <div className={styles.profilePage}>
    <Topping title="My Profile"></Topping>
    <div className={styles.container}>
      <UserInfo />
      <UserData />
    </div>
  </div>
);
