'use client';
import styles from './taskComments.module.scss';
import { useComments } from '@/services';
import { useTranslations } from 'next-intl';
import { CommentCard } from '@/components/cards/comment/CommentCard';
import { AddCommentForm } from '@/components/forms/addComment/AddCommentForm';
import { CommentSkeleton } from '@/components/cards/comment/commentSkeleton/CommentSkeleton';

export const TaskComments = ({ taskId }: { taskId: string }) => {
  const { data: comments, isLoading } = useComments(taskId);
  const t = useTranslations('Tasks');

  return (
    <section className={styles.taskComments}>
      <p className={styles.title}>{t('comments')}</p>
      {isLoading ? (
        <ul className={styles.list}>
          <CommentSkeleton />
        </ul>
      ) : null}
      {comments && comments.length ? (
        <ul className={styles.list}>
          {comments.map((el) => (
            <CommentCard key={el._id} comment={el} />
          ))}
        </ul>
      ) : null}
      {comments && <AddCommentForm taskId={taskId} />}
    </section>
  );
};
