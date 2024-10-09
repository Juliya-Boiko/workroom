import styles from './infoPortalPage.module.scss';
import { Topping } from '@/components/topping/Topping';
import { InfoPortalHero } from '@/components/sections/infoPortal/hero/InfoPortalHero';
// eslint-disable-next-line max-len
import { InfoPortalStatistic } from '@/components/sections/infoPortal/statistic/InfoPortalStatistic';
import { FoldersList } from '@/components/sections/infoPortal/foldersList/FoldersList';
// import { Modal, BtnPrimary } from '@/components/ui';
// import { EIconsSet } from '@/typings';
// import { SvgHandler } from '@/components/SvgHandler';
// import { AddEventForm } from '@/components/forms/addEvent/AddEventForm';

export const InfoPortalPage = () => (
  <div className={styles.infoPortalPage}>
    <Topping title="Info Portal">
      {/* <Modal
        title="Add Event"
        activator={
          <BtnPrimary>
            <SvgHandler icon={EIconsSet.Plus} />
            <span>Add Event</span>
          </BtnPrimary>
        }
        content={<AddEventForm />}
      /> */}
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
