import styles from './dashboardPage.module.scss';
import { ActivitySection } from '@/components/sections/activity/Activity';
import { WorkloadSection } from '@/components/sections/workload/Workload';
import { ProjectsSection } from '@/components/sections/projects/Projects';
import { EventsSection } from '@/components/sections/events/Events';
import { Topping } from '@/components/topping/Topping';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';
import { formatDayDate } from '@/helpers';

export const DashboardPage = () => {
  return (
    <div className={styles.dashboardPage}>
      <Topping title="Dashboard">
        <div className={styles.today}>
          <SvgHandler icon={EIconsSet.CalendarInput} />
          <span>{formatDayDate(new Date().toString())}</span>
        </div>
      </Topping>
      <div className={styles.container}>
        <WorkloadSection />
        <EventsSection />
        <ProjectsSection />
        <ActivitySection />
      </div>
    </div>
  );
};
