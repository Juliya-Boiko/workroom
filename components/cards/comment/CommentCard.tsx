import styles from './commentCard.module.scss';
import { IComment } from '@/typings';

export const CommentCard = ({ comment }: { comment: IComment }) => (
  <li className={styles.commentCard}>
    <p className={styles.date}>{comment.createdAt.toString()}</p>
    <p className={styles.text}>{comment.text}</p>
    <div>opts</div>
  </li>
);
