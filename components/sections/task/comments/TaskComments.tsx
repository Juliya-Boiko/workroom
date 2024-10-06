'use client';
import styles from './taskComments.module.scss';
import { useComments } from '@/services';
import { CommentCard } from '@/components/cards/comment/CommentCard';
import { AddCommentForm } from '@/components/forms/addComment/AddCommentForm';

export const TaskComments = ({ taskId }: { taskId: string }) => {
  const { data: comments, isLoading } = useComments(taskId);

  return (
    <section className={styles.taskComments}>
      <p className={styles.title}>Comments</p>
      <ul className={styles.list}>
        {isLoading ? <li>loading;;;;</li> : null}
        {comments && comments.map((el) => <CommentCard key={el._id} comment={el} />)}
      </ul>
      <AddCommentForm taskId={taskId} />
    </section>
  );
};
