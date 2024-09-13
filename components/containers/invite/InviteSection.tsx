import styles from './invite.module.scss';
import Image from 'next/image';
import imgSrc from '../../public/auth.png';
import { decodeInvite } from '@/libs/jwt';
import { IDynamicComponent } from '@/typings';
import { Logo } from '@/components/ui/logo/Logo';
import { InviteForm } from '@/components/forms/invite/InviteForm';

export const InviteSection = async ({ slug }: IDynamicComponent) => {
  const { companyId, email } = await decodeInvite(slug);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Logo />
        <h1 className={styles.heading}>
          Your place to work <br /> Plan. Create. Control.
        </h1>
        <Image src={imgSrc} priority alt="Workroom" className={styles.image} />
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Register in Woorkroom</h1>
        <InviteForm companyId={companyId} email={email} />
      </div>
    </section>
  );
};
