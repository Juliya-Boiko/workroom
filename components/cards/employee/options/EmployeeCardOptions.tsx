'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Options, Confirm } from '@/components/ui';
import { ROUTES } from '@/utils';
import { useEmployeeMutation } from '@/services';

interface Props {
  id: string;
}

export const EmployeeCardOptions = ({ id }: Props) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();
  const { remove } = useEmployeeMutation();

  const options = [
    {
      value: 'view',
      action: () => router.push(`${ROUTES.employee}/${id}`),
    },
    {
      value: 'delete',
      action: () => setShowConfirm(true),
    },
  ];

  const handleDelete = () => {
    remove(id);
    setShowConfirm(false);
  };

  return (
    <>
      <Options options={options} />
      {showConfirm && (
        <Confirm
          text="You sure you want to delete this employee? All progress dissapear!"
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </>
  );
};
