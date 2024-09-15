'use client';
import { LoaderSkeleton } from '@/components/LoaderSkeleton';
import styles from './selectAssignees.module.scss';
import { Avatar } from '@/components/ui';
import { useEmployees } from '@/services';
import { useState, useEffect } from 'react';
import { ISelectAssignee } from '@/typings';

interface Props {
  value: ISelectAssignee[] | undefined;
  onChange: (v: ISelectAssignee[]) => void;
}

export const SelectAssignees = ({ value, onChange }: Props) => {
  const { data, isLoading } = useEmployees();
  const [variants, setVariants] = useState<ISelectAssignee[] | undefined>([]);
  const [selected, setSelected] = useState<ISelectAssignee[]>([]);

  useEffect(() => {
    if (data) {
      if (value) {
        setSelected(value);
        const filtered = data.filter((item1) => !value.some((item2) => item1._id === item2._id));
        setVariants(filtered);
      } else {
        const formatted = data.map(({ _id, name, avatar }) => ({ _id, name, avatar }));
        setVariants(formatted);
      }
    }
  }, [data, value]);

  const handleSelect = (v: ISelectAssignee) => {
    setVariants((prev) => {
      const filtered = prev?.filter((el) => el._id !== v._id);
      return filtered;
    });
    setSelected((prev) => [...prev, v]);
    onChange([...selected, v]);
  };

  const handleUnselect = (v: ISelectAssignee) => {
    const filtered = selected.filter((el) => el._id !== v._id);
    setSelected(filtered);
    onChange(filtered);
    setVariants((prev) => {
      if (prev) {
        return [...prev, v];
      } else {
        return [v];
      }
    });
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
      <ul className={styles.variants}>
        {isLoading ? (
          <>
            <li>
              <LoaderSkeleton height={24} />
            </li>
            <li>
              <LoaderSkeleton height={24} />
            </li>
            <li>
              <LoaderSkeleton height={24} />
            </li>
          </>
        ) : null}
        {variants &&
          variants.map((el) => (
            <li key={el._id} className={styles.item} onClick={() => handleSelect(el)}>
              <Avatar size="s" user={{ name: el.name, avatar: el.avatar }} />
              <span>{el.name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};
