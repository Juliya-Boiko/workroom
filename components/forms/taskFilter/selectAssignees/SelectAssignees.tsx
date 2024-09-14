'use client';
import styles from './selectAssignees.module.scss';
import { Avatar } from '@/components/ui';
import { useEmployees } from '@/services';
import { useState } from 'react';

interface ISelect {
  _id: string;
  name: string;
  avatar: string | null;
}

interface Props {
  onChange: (v: ISelect[]) => void;
}

export const SelectAssignees = ({ onChange }: Props) => {
  const { data, isLoading } = useEmployees();
  const formatted = data ? data.map(({ _id, name, avatar }) => ({ _id, name, avatar })) : [];
  const [variants, setVariants] = useState([...formatted]);
  const [selected, setSelected] = useState<ISelect[]>([]);

  const handleSelect = (v: ISelect) => {
    setVariants((prev) => {
      const filtered = prev.filter((el) => el._id !== v._id);
      return filtered;
    });
    setSelected((prev) => [...prev, v]);
    onChange([...selected, v]);
  };

  const handleUnselect = (v: ISelect) => {
    setSelected((prev) => {
      const filtered = prev.filter((el) => el._id !== v._id);
      return filtered;
    });
    setVariants((prev) => [...prev, v]);
  };

  return (
    <div className={styles.selectAssignees}>
      <ul className={styles.selected}>
        {selected.map((el) => (
          <li key={el._id} className={styles.item} onClick={() => handleUnselect(el)}>
            <Avatar size="s" user={{ name: el.name, avatar: el.avatar }} />
            <span>{el.name}</span>
          </li>
        ))}
      </ul>
      {isLoading && <div>isLoading...</div>}
      <ul className={styles.variants}>
        {variants.map((el) => (
          <li key={el._id} className={styles.item} onClick={() => handleSelect(el)}>
            <Avatar size="s" user={{ name: el.name, avatar: el.avatar }} />
            <span>{el.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
