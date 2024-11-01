'use client';
import styles from './uploadAttach.module.scss';
import { useState, ChangeEvent } from 'react';
import { useTranslations } from 'next-intl';
import { EIconsSet, EAttachType, ICreateAttach } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';
import { BtnSecondary } from '../../buttons/secondary/BtnSecondary';

interface Props {
  onChange: (v: ICreateAttach) => void;
}

export const UploadAttach = ({ onChange }: Props) => {
  const [showAddLink, setShowAddLink] = useState(false);
  const [showAddImage, setShowAddImage] = useState(false);
  const [linkFields, setLinkFields] = useState({
    title: '',
    value: '',
  });
  const t = useTranslations('Forms');

  const toggleLinkForm = () => {
    setShowAddLink((v) => !v);
    setShowAddImage(false);
  };

  const toggleImageForm = () => {
    setShowAddImage((v) => !v);
    setShowAddLink(false);
  };

  const handleCancel = () => {
    setLinkFields({
      title: '',
      value: '',
    });
    setShowAddLink(false);
    setShowAddImage(false);
  };

  const addLink = () => {
    const link = { ...linkFields, type: EAttachType.LINK };
    onChange(link);
    handleCancel();
  };

  const addImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    if (file) {
      const image = { title: file.name, value: file, type: EAttachType.FILE };
      onChange(image);
      handleCancel();
    }
  };

  return (
    <>
      <div className={styles.buttonsWrapper}>
        <button
          type="button"
          title="Add link"
          className={`${styles.btn} ${styles.btnLink}`}
          onClick={toggleLinkForm}
        >
          <SvgHandler icon={EIconsSet.AttachLink} />
        </button>
        <button
          type="button"
          title="Add image"
          className={`${styles.btn} ${styles.btnFile}`}
          onClick={toggleImageForm}
        >
          <SvgHandler icon={EIconsSet.AttachFile} />
        </button>
      </div>
      {showAddLink && (
        <div className={styles.linkForm}>
          <label htmlFor="linkTitle" className={styles.wrapper}>
            <p className={styles.label}>{t('linkTitle')}</p>
            <input
              type="text"
              name="linkTitle"
              id="linkTitle"
              value={linkFields.title}
              className={styles.input}
              onChange={(e) => setLinkFields((v) => ({ ...v, title: e.target.value }))}
            />
          </label>
          <label htmlFor="linkPath" className={styles.wrapper}>
            <p className={styles.label}>{t('linkPath')}</p>
            <input
              type="text"
              name="linkPath"
              id="linkPath"
              value={linkFields.value}
              className={styles.input}
              onChange={(e) => setLinkFields((v) => ({ ...v, value: e.target.value }))}
            />
          </label>
          <div className={styles.buttonsActions}>
            <BtnSecondary onClick={handleCancel}>{t('cancel')}</BtnSecondary>
            <BtnSecondary disabled={!linkFields.value} onClick={addLink}>
              {t('add')}
            </BtnSecondary>
          </div>
        </div>
      )}
      {showAddImage && (
        <div>
          <label htmlFor="upload-attach" className={styles.uploadImage}>
            <SvgHandler icon={EIconsSet.Upload} />
            <input
              type="file"
              name="upload-attach"
              id="upload-attach"
              accept="image/*"
              className={styles.inputFile}
              onChange={addImage}
            />
          </label>
        </div>
      )}
    </>
  );
};
