import styles from './profilePage.module.scss';
import { Topping } from '@/components/topping/Topping';
import { ProfileForm } from '@/components/forms/profile/ProfileForm';

export const ProfilePage = () => {
  return (
    <div className={styles.profilePage}>
      <Topping title="My Profile"></Topping>
      <div className={styles.container}>
        <ProfileForm />
      </div>
    </div>
  );
};
