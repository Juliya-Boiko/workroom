import { Logo } from '@/components/logo/Logo';
import { Avatar } from '@/components/ui/avatar/Avatar';
import { BadgeLevel } from '@/components/ui/badges/level/BadgeLevel';
import { BadgePriopity } from '@/components/ui/badges/priority/BadgePriority';
import { BadgeTask } from '@/components/ui/badges/task/BadgeTask';
import { ELevelEmployee, EPriority, ETaskStatus } from '@/enums';
import { Logout } from '@/components/Logout';

export default function Home() {
  return (
    <div>
      <Logout>Logout</Logout>
      <Avatar name="Juioi kjjkh" size="s" />
      <Avatar name="Juioi kjjkh" size="m" />
      <Avatar name="Juioi kjjkh" size="l" />
      <Logo />
      <Logo cropped />
      <Logo colored />
      <Logo colored cropped />
      <BadgeLevel label={ELevelEmployee.JUNIOR} />
      <BadgeLevel label={ELevelEmployee.MIDDLE} />
      <BadgeLevel label={ELevelEmployee.SENIOR} />
      <BadgePriopity label={EPriority.HIGH} />
      <BadgePriopity label={EPriority.MEDIUM} />
      <BadgePriopity label={EPriority.LOW} />
      <BadgeTask label={ETaskStatus.DONE} />
      <BadgeTask label={ETaskStatus.INPROGRESS} />
      <BadgeTask label={ETaskStatus.TODO} />
    </div>
  );
}
