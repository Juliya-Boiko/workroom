'use client';
import styles from '../signUp/signUp.module.scss';
import imgSrc from '../../../public/members.png';
import Image from 'next/image';
import { useState } from 'react';
import { MembersStage } from '../signUp/stages';
import { BtnPrimary } from '@/components/ui/buttons/primary/BtnPrimary';
import { inviteUsers } from '@/actions';

export const AddEmployeeForm = () => {
  const [members, setMembers] = useState(['']);
  const [isDisabled, setDisabled] = useState(true);

  const onAdd = () => {
    setMembers((prev) => [...prev, '']);
  };

  const onChange = (idx: number, value: string) => {
    const data = [...members];
    data[idx] = value;
    setMembers(data);
    setDisabled(false);
  };

  const onSubmit = async () => {
    await inviteUsers(members);
    // if (resp) {
    //   onClose();
    // }
  };

  return (
    <div className={styles.signUp}>
      <Image alt="Add members" src={imgSrc} className={styles.image} />
      <MembersStage members={members} onAdd={onAdd} onChange={onChange} />
      <div className={styles.approveBtn}>
        <BtnPrimary type="button" disabled={isDisabled} onClick={onSubmit}>
          Approve
        </BtnPrimary>
      </div>
    </div>
  );
};
