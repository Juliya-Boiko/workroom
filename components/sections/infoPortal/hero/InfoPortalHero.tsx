import styles from './infoPortalHero.module.scss';
import imgSrc from '../../../../public/tasks-placeholder.png';
import Image from 'next/image';

export const InfoPortalHero = () => (
  <section className={styles.infoPortalHero}>
    <div className={styles.container}>
      <h2 className={styles.title}>Your project data warehouse</h2>
      <p className={styles.text}>
        Add project data, create thematic pages, edit data, share information with team members
      </p>
    </div>
    <Image src={imgSrc} alt="Info portal" className={styles.image} />
  </section>
);
