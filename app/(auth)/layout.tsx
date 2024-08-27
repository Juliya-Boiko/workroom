import styles from './layout.module.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <main className={styles.authLayout}>{children}</main>;
}
