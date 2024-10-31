import styles from './dashboardPage.module.scss';
import { ActivitySection } from '@/components/sections/dashboard/activity/Activity';
import { WorkloadSection } from '@/components/sections/dashboard/workload/Workload';
import { ProjectsSection } from '@/components/sections/dashboard/projects/Projects';
import { EventsSection } from '@/components/sections/dashboard/events/Events';
import { Topping } from '@/components/topping/Topping';
import { TodayBadge } from '@/components/sections/dashboard/today/TodayBadge';

export const DashboardPage = () => (
  <div className={styles.dashboardPage}>
    <Topping title="dashboard">
      <TodayBadge />
    </Topping>
    <div className={styles.container}>
      <WorkloadSection />
      <EventsSection />
      <ProjectsSection />
      <ActivitySection />
    </div>
  </div>
);
