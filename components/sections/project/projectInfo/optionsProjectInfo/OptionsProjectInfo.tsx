'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Options, Confirm } from '@/components/ui';
import { useProjectsMutation } from '@/services';
import { ROUTES } from '@/utils';

export const OptionsProjectInfo = ({ id }: { id: string }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { remove } = useProjectsMutation();
  const router = useRouter();

  const options = [
    {
      value: 'Edit',
      action: () => router.push(`${ROUTES.editProject}/${id}`),
    },
    {
      value: 'Delete',
      action: () => setShowConfirm(true),
    },
  ];

  const handleDelete = () => {
    remove(id);
    setShowConfirm(false);
    router.push(ROUTES.projects);
  };

  return (
    <>
      <Options options={options} />
      {showConfirm && (
        <Confirm
          text="You sure you want to delete project? All progress dissapear!"
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </>
  );
};
