import { SvgHandler } from '@/components/SvgHandler';
import { BtnIcon } from '@/components/ui';
import { EIconsSet } from '@/enums';

export const Notifications = () => {
  return (
    <BtnIcon title="Notifications">
      <SvgHandler icon={EIconsSet.Bell} />
    </BtnIcon>
  );
};
