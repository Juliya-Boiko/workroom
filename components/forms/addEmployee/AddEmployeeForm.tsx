'use client';
import styles from '../signUp/signUp.module.scss';
import imgSrc from '../../../public/placeholder-3.png';
import Image from 'next/image';
import { useState } from 'react';
import { useModalContext } from '@/components/providers/ModalProvider';
import { MembersStage } from '../signUp/stages';
import { BtnPrimary } from '@/components/ui';
import { useUserMutations } from '@/services';

export const AddEmployeeForm = () => {
  const [members, setMembers] = useState(['']);
  const [isDisabled, setDisabled] = useState(true);
  const { sendInvite } = useUserMutations();
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
    sendInvite(members);
    closeModal();
  };

  const handleDelete = (idx: number) => {
    const updated = [...members.slice(0, idx), ...members.slice(idx + 1)];
    setMembers(updated);
  };

  return (
    <div className={styles.signUp}>
      <Image alt="Add members" src={imgSrc} className={styles.image} />
      <MembersStage members={members} onAdd={onAdd} onChange={onChange} onDelete={handleDelete} />
      <div className={styles.approveBtn}>
        <BtnPrimary type="button" disabled={isDisabled} onClick={onSubmit}>
          Send Invite
        </BtnPrimary>
      </div>
    </div>
  );
};
