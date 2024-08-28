import { SvgHandler } from '@/components/SvgHandler';
import { BtnIcon } from '@/components/ui/buttons/icon/BtnIcon';
import { EIconsSet } from '@/enums';

export const Notifications = () => {
  return (
    <BtnIcon>
      <SvgHandler icon={EIconsSet.Bell} />
    </BtnIcon>
  );
};
