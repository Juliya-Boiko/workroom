import styles from './layout.module.scss';
import { Localization } from '@/components/ui/localization/Localization';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.authLayout}>
      <div className={styles.localization}>
        <Localization />
      </div>
      <div className={styles.wrapper}>{children}</div>
    </main>
  );
}
