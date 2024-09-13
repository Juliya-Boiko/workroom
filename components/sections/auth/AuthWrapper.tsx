import styles from './authWrapper.module.scss';
import { Logo } from '@/components/ui';
import Image from 'next/image';
import imgSrc from '../../../public/auth.png';

interface Props {
  children: string | JSX.Element | JSX.Element[];
}

export const AuthWrapper = ({ children }: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Logo />
        <h1 className={styles.heading}>
          Your place to work <br /> Plan. Create. Control.
        </h1>
        <Image src={imgSrc} priority alt="Workroom" className={styles.image} />
      </div>
      <div className={styles.wrapper}>{children}</div>
    </section>
  );
};
