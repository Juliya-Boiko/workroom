'use client';
import styles from '../signUp/signUp.module.scss';
import imgSrc from '../../../public/members.png';
import Image from 'next/image';
import { useState } from 'react';
import { useModalContext } from '@/components/providers/ModalProvider';
import { MembersStage } from '../signUp/stages';
import { BtnPrimary } from '@/components/ui';
import { inviteUsers } from '@/actions';

export const AddEmployeeForm = () => {
  const [members, setMembers] = useState(['']);
  const [isDisabled, setDisabled] = useState(true);
  const { closeModal } = useModalContext();

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
    const resp = await inviteUsers(members);
    if (resp) {
      closeModal();
    }
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
