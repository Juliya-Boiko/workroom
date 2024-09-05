'use client';
import styles from './selectImage.module.scss';
import Image from 'next/image';
import { projectThumbsDataTypes, IMAGE_THUMB_STARTS } from '@/utils';
import { UploadThumb } from '@/components/ui';
import { StaticImageData } from 'next/image';

type SelectedImageType = [string, StaticImageData | File];

interface Props {
  value: string | SelectedImageType;
  onChange: (v: SelectedImageType) => void;
}

export const SelectImage = ({ value, onChange }: Props) => {
  const handleUpload = (v: File) => {
    onChange([v.name, v]);
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
            className={`${styles.item} ${value[0] === el[0] ? styles.selected : ''}`}
            onClick={() => handleChange(el)}
          >
            <Image alt={el[0]} src={el[1]} />
          </li>
        ))}
        <li
          className={`
            ${styles.upload} ${!value[0].includes(IMAGE_THUMB_STARTS) ? styles.selected : ''}
          `}
        >
          <UploadThumb value={null} onChange={handleUpload} />
        </li>
      </ul>
    </div>
  );
};
