'use client';
import { useRouter } from 'next/navigation';
import { Options } from '@/components/ui';
import { ROUTES } from '@/utils';
import { ECardEmployeeOptions } from '@/typings';

interface Props {
  id: string;
}

export const EmployeeCardOptions = ({ id }: Props) => {
  const router = useRouter();

  const options = [
    {
      value: ECardEmployeeOptions.VIEW,
      action: () => router.push(`${ROUTES.employee}/${id}`),
    },
    {
      value: ECardEmployeeOptions.DELETE,
      action: () => console.log('delete'),
    },
  ];

  return <Options options={options} />;
};
