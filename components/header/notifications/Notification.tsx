import { SvgHandler } from '@/components/SvgHandler';
import { BtnIcon } from '@/components/ui';
import { EIconsSet } from '@/typings';

export const Notifications = () => {
  return (
    <BtnIcon title="Notifications">
      <SvgHandler icon={EIconsSet.Bell} />
    </BtnIcon>
  );
};
