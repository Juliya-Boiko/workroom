'use client';
import { useState } from 'react';
import { usePageMutation } from '@/services';
import { Options, Confirm } from '@/components/ui';

export const PageInfoOptions = ({ pageId, onEdit }: { pageId: string; onEdit: () => void }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { remove } = usePageMutation();

  const options = [
    {
      value: 'Edit',
      action: () => onEdit(),
    },
    {
      value: 'Delete',
      action: () => setShowConfirm(true),
    },
  ];

  const handleDelete = () => {
    remove(pageId);
  };

  return (
    <>
      <Options options={options} />
      {showConfirm && (
        <Confirm
          text="You sure you want to delete this page? All progree will dissaper!"
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </>
  );
};
