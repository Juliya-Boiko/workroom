'use client';
import styles from './selectImage.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { UploadThumb } from '@/components/ui';
import { projectThumbsDataTypes } from '@/utils';

type SelectedImageType = string | File;

interface Props {
  value: SelectedImageType;
  onChange: (v: SelectedImageType) => void;
}

export const SelectImage = ({ value, onChange }: Props) => {
  const t = useTranslations('Forms');

  const handleUpload = (v: File) => {
    onChange(v);
  };

  const handleChange = (v: SelectedImageType) => {
    onChange(v);
  };

  return (
    <div className={styles.selectImage}>
      <p className={styles.title}>{t('selectImage')}</p>
      <p className={styles.text}>{t('imageFormat')}</p>
      <ul className={styles.list}>
        {projectThumbsDataTypes.map((el) => (
          <li
            key={el}
            className={`${styles.item} ${value === el ? styles.selected : ''}`}
            onClick={() => handleChange(el)}
          >
            <Image alt={el} src={el} width={48} height={48} />
          </li>
        ))}
        <li
          className={`
            ${styles.upload} ${typeof value !== 'string' ? styles.selected : ''}
          `}
        >
          <UploadThumb value={null} onChange={handleUpload} />
        </li>
      </ul>
    </div>
  );
};
