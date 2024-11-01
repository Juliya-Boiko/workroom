'use client';
import styles from './layout.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Localization } from '@/components/ui/localization/Localization';
import { ROUTES } from '@/utils';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const t = useTranslations('Auth.SignIn');

  return (
    <main className={styles.authLayout}>
      <div className={styles.head}>
        <div>
          {pathname !== ROUTES.signIn && (
            <Link href={ROUTES.signIn} className={styles.link}>
              {t('signIn')}
            </Link>
          )}
        </div>
        <Localization />
      </div>
      <div className={styles.wrapper}>{children}</div>
    </main>
  );
}
