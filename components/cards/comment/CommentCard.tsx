'use client';
import styles from './commentCard.module.scss';
import { useState } from 'react';
import { formatDateTime } from '@/utils';
import { IComment } from '@/typings';
import { EditCommentForm } from '@/components/forms/editComment/EditCommentForm';
import { CommentCardOptions } from './options/CommentCardOptions';

export const CommentCard = ({ comment }: { comment: IComment }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <li className={styles.commentCard}>
      {showForm ? (
        <EditCommentForm
          id={comment._id}
          value={comment.text}
          onCancel={() => setShowForm(false)}
        />
      ) : (
        <>
          <div className={styles.wrapper}>
            <p className={styles.date}>{formatDateTime(comment.updatedAt)}</p>
            <p className={styles.text}>{comment.text}</p>
          </div>
          <CommentCardOptions id={comment._id} onEdit={() => setShowForm(true)} />
        </>
      )}
    </li>
  );
};
