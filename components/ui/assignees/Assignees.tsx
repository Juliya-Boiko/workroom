import styles from './assignees.module.scss';
import { IAssignee } from '@/interfaces';
import { Avatar } from '../avatar/Avatar';

interface Props {
  assignees: IAssignee[];
}

const temp = [
  {
    _id: '1',
    name: 'ef erggfre',
    avatar: null,
  },
  {
    _id: '2',
    name: 'sdsd sqsx',
    avatar: null,
  },
  {
    _id: '3',
    name: 'poi poip',
    avatar: null,
  },
  {
    _id: '4',
    name: 'k k k kk  k',
    avatar: null,
  },
];

export const Assignees = ({}: Props) => {
  const cropped = temp.slice(0, 3);

  console.log(cropped);

  return (
    <ul className={styles.assignees}>
      {cropped.map((el, idx) => (
        <li
          key={el._id}
          className={styles.item}
          style={{ left: `${24 * idx - 2 * idx}px`, zIndex: idx + 1 }}
        >
          <Avatar size="s" user={{ name: el.name, avatar: el.avatar }} />
        </li>
      ))}
    </ul>
  );
};
