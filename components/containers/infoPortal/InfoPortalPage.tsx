'use client';
import styles from './infoPortalPage.module.scss';
import { useTranslations } from 'next-intl';
import { Topping } from '@/components/topping/Topping';
import { Modal, BtnPrimary } from '@/components/ui';
import { EIconsSet } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';
import { AddFolderForm } from '@/components/forms/addFolder/AddFolderForm';
import { InfoPortalHero } from '@/components/sections/infoPortal/hero/InfoPortalHero';
import { FoldersList } from '@/components/sections/infoPortal/foldersList/FoldersList';
// eslint-disable-next-line max-len
import { InfoPortalStatistic } from '@/components/sections/infoPortal/statistic/InfoPortalStatistic';

export const InfoPortalPage = () => {
  const t = useTranslations('InfoPortal');

  return (
    <div className={styles.infoPortalPage}>
      <Topping title="infoPortal">
        <Modal
          title={t('add')}
          activator={
            <BtnPrimary>
              <SvgHandler icon={EIconsSet.Plus} />
              <span>{t('add')}</span>
            </BtnPrimary>
          }
          content={<AddFolderForm />}
        />
      </Topping>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <InfoPortalHero />
          <InfoPortalStatistic />
        </div>
        <FoldersList />
      </div>
    </div>
  );
};
