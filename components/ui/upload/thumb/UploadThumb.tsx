'use client';
import styles from './uploadThumb.module.scss';
import { useState, ChangeEvent } from 'react';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';
import Image from 'next/image';

interface Props {
  value: string | File | null;
  onChange: (v: File) => void;
}

export const UploadThumb = ({ onChange }: Props) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      onChange(file);
    }
  };

  return (
    <label htmlFor="upload-thumb" className={styles.uploadThumb}>
      {imagePreview ? (
        <Image alt="Project Logo" src={imagePreview} fill />
      ) : (
        <SvgHandler icon={EIconsSet.Upload} />
      )}
      <input
        type="file"
        name="upload-thumb"
        id="upload-thumb"
        accept="image/*"
        className={styles.input}
        onChange={onImageChange}
      />
    </label>
  );
};
