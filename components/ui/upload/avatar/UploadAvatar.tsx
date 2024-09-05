/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import styles from './upload.module.scss';
import { useState, ChangeEvent } from 'react';
import { EIconsSet } from '@/typings';
import { SvgHandler } from '../../../SvgHandler';
import { Avatar } from '../..';

interface Props {
  value: any;
  name: string;
  onChange: (v: any) => void;
}

export const UploadAvatar = ({ value, name, onChange }: Props) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const user = {
    name,
    avatar: imagePreview || value,
  };

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e?.target?.files?.[0]);
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  return (
    <label htmlFor="upload" className={styles.upload}>
      <Avatar bordered size="xl" user={user} />
      <input
        type="file"
        name="upload"
        id="upload"
        accept="image/*"
        className={styles.input}
        onChange={onImageChange}
      />
      <div title="Update avatar" className={styles.btnPlus}>
        <SvgHandler icon={EIconsSet.Plus} />
      </div>
    </label>
  );
};
