'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Options, Confirm } from '@/components/ui';
import { ROUTES, useTasksMutation } from '@/utils';

export const TaskDetailsOptions = ({ id, projectId }: { id: string; projectId: string }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { remove } = useTasksMutation();
  const router = useRouter();

  const options = [
    {
      value: 'Edit',
      action: () => console.log('Edit', id),
    },
    {
      value: 'Delete',
      action: () => setShowConfirm(true),
    },
  ];

  const handleDelete = () => {
    remove(id);
    setShowConfirm(false);
    router.push(`${ROUTES.project}/${projectId}`);
  };

  return (
    <>
      <Options options={options} />
      {showConfirm && (
        <Confirm
          text="You sure you want to delete task? All progress dissapear!"
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </>
  );
};
