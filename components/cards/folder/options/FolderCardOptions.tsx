'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Options, Confirm } from '@/components/ui';
import { useFolderMutation } from '@/services';
import { ROUTES } from '@/utils';

export const FolderCardOptions = ({ folderId }: { folderId: string }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { remove } = useFolderMutation();
  const router = useRouter();

  const options = [
    {
      value: 'Edit',
      action: () => router.push(`${ROUTES.editFolder}/${folderId}`),
    },
    {
      value: 'Delete',
      action: () => setShowConfirm(true),
    },
  ];

  const handleDelete = () => {
    remove(folderId);
  };

  return (
    <>
      <Options options={options} />
      {showConfirm && (
        <Confirm
          text="You sure you want to delete this folder? All progree will dissaper!"
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </>
  );
};
