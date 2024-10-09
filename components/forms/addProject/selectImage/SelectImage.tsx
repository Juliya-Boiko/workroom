'use client';
import styles from './selectImage.module.scss';
import Image from 'next/image';
import { UploadThumb } from '@/components/ui';
import { StaticImageData } from 'next/image';
import {
  projectThumbs,
  projectThumbsDataTypes,
  ProjectThumbsKeys,
  IMAGE_THUMB_STARTS,
} from '@/utils';

type SelectedImageType = [string, StaticImageData | File];

interface Props {
  value: string | SelectedImageType;
  onChange: (v: SelectedImageType) => void;
}

export const SelectImage = ({ value, onChange }: Props) => {
  const imgSrc =
    typeof value === 'string' && value.includes(IMAGE_THUMB_STARTS)
      ? [value, projectThumbs[value as ProjectThumbsKeys]]
      : value;
  const handleUpload = (v: File) => {
    onChange([v.name, v]);
  };

  const handleChange = (v: SelectedImageType) => {
    onChange(v);
  };

  const uploadStyles =
    typeof imgSrc !== 'string' && !imgSrc[0].toString().includes(IMAGE_THUMB_STARTS)
      ? styles.selected
      : '';

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
            className={`${styles.item} ${imgSrc[0] === el[0] ? styles.selected : ''}`}
            onClick={() => handleChange(el)}
          >
            <Image alt={el[0]} src={el[1]} />
          </li>
        ))}
        <li
          className={`
            ${styles.upload} ${uploadStyles}
          `}
        >
          <UploadThumb value={null} onChange={handleUpload} />
        </li>
      </ul>
    </div>
  );
};
