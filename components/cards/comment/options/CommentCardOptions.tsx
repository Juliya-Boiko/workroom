'use client';
import { useState } from 'react';
import { useCommentMutation } from '@/services';
import { Options, Confirm } from '@/components/ui';

interface Props {
  id: string;
  onEdit: () => void;
}

export const CommentCardOptions = ({ id, onEdit }: Props) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { remove } = useCommentMutation();

  const options = [
    {
      value: 'edit',
      action: () => onEdit(),
    },
    {
      value: 'delete',
      action: () => setShowConfirm(true),
    },
  ];

  const handleDelete = () => {
    remove(id);
  };

  return (
    <>
      <Options options={options} />
      {showConfirm && (
        <Confirm
          text="You sure you want to delete this comment?"
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </>
  );
};
