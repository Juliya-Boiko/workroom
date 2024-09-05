'use client';
import styles from './selectImage.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { projectThumbsDataTypes } from '@/utils';
import { UploadThumb } from '@/components/ui';
import { StaticImageData } from 'next/image';

type SelectedImageType = [string, StaticImageData | File];
interface Props {
  value: string | File | null;
  onChange: (v: [string, StaticImageData | File]) => void;
}

export const SelectImage = ({ value,  onChange }: Props) => {
  const [selected, setSelected] = useState<SelectedImageType>(projectThumbsDataTypes[0]);

  const handleUpload = (v: File) => {
    setSelected(['', v]);
    onChange(v);
    console.log({ selected });
  };

  const handleChange = (v: SelectedImageType) => {
    onChange(v);
  };

  return (
    <div className={styles.selectImage}>
      <p className={styles.title}>Select image</p>
      <p className={styles.text}>
        Select or upload an avatar for the project (available formats: jpg, png)
      </p>
      <ul className={styles.list}>
        {projectThumbsDataTypes.map((el) => (
          <li
            key={el[0]}
            className={`${styles.item} ${selected[0] === el[0] ? styles.selected : ''}`}
            onClick={() => handleChange(el)}
          >
            <Image alt={el[0]} src={el[1]} />
          </li>
        ))}
        <li className={`${styles.upload} ${!selected[0] ? styles.selected : ''}`}>
          <UploadThumb value={null} onChange={handleUpload} />
        </li>
      </ul>
    </div>
  );
};
