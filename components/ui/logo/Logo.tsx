/* eslint-disable max-len */
import Link from 'next/link';
import styles from './logo.module.scss';
import { ROUTES } from '@/utils';

interface Props {
  cropped?: boolean;
  colored?: boolean;
}

export const Logo = ({ cropped, colored }: Props) => (
  <Link
    href={ROUTES.dashboard}
    className={`${styles.logo} ${colored ? styles.logoColored : styles.logoDef}`}
  >
    <div className={styles.iconWrapper}>
      <svg xmlns="http://www.w3.org/2000/svg" width={36} height={33} fill="none">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11 16c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3ZM36 9.345C36 4.205 31.725 0 26.5 0S17 4.205 17 9.345V23s18.998-2.08 19-13.654v-.001ZM7 28.208c-1.012 0-1.84-.77-1.84-1.709 0-.94.828-1.708 1.84-1.708s1.84.769 1.84 1.708c0 .94-.828 1.709-1.84 1.709Zm-7-1.71v.001C0 30.075 3.15 33 7 33s7-2.925 7-6.5V17S.002 18.447 0 26.498Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    {!cropped && <span>Woorkroom</span>}
  </Link>
);
