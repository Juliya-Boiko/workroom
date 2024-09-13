import styles from './dashboardPage.module.scss';
import { formatDayDate } from '@/utils';
import { ActivitySection } from '@/components/sections/dashboard/activity/Activity';
import { WorkloadSection } from '@/components/sections/dashboard/workload/Workload';
import { ProjectsSection } from '@/components/sections/dashboard/projects/Projects';
import { EventsSection } from '@/components/sections/dashboard/events/Events';
import { Topping } from '@/components/topping/Topping';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';

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
