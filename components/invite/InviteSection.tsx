import styles from './invite.module.scss';
import { Logo } from '../logo/Logo';
import Image from 'next/image';
import imgSrc from '../../public/sign-in.png';

import { decodeInvite } from '@/utils/jwt';
import { InviteForm } from '../forms/invite/InviteForm';

interface Props {
  slug: string;
}

export const InviteSection = async ({ slug }: Props) => {
  const { companyId, email } = await decodeInvite(slug);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Logo />
        <h1 className={styles.heading}>
          Your place to work <br /> Plan. Create. Control.
        </h1>
        <Image src={imgSrc} alt="Workroom" className={styles.image} />
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Register in Woorkroom</h1>
        <InviteForm companyId={companyId} email={email} />
      </div>
    </section>
  );
};
