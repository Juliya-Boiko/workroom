import styles from './assignees.module.scss';
import { IAssignee } from '@/interfaces';
import { Avatar } from '../avatar/Avatar';

interface Props {
  assignees: IAssignee[];
}

export const Assignees = ({ assignees }: Props) => {
  const cropped = assignees.slice(0, 3);

  return (
    <ul
      className={styles.assignees}
      style={{
        width: assignees.length > 3 ? '90px' : `${cropped.length * 28 - cropped.length * 4}px`,
      }}
    >
      {cropped.map((el, idx) => (
        <li
          key={el._id}
          className={styles.item}
          style={{ left: `-${24 * idx - 16 * idx}px`, zIndex: idx + 1 }}
          title={el.name}
        >
          <Avatar size="s" user={{ name: el.name, avatar: el.avatar }} />
        </li>
      ))}
      {assignees.length > 3 && (
        <li
          className={styles.count}
          style={{ left: `-${24 * 3 - 16 * 3}px`, zIndex: 3 + 1 }}
          title={`+ ${assignees.length - 3} more user`}
        >
          +{assignees.length - 3}
        </li>
      )}
    </ul>
  );
};
