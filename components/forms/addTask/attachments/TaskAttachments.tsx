'use client';
import styles from './taskAttachments.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useState, ChangeEvent } from 'react';
import { SvgHandler } from '@/components/SvgHandler';
import { EAttachType, EIconsSet, ICreateAttach } from '@/typings';
import { BtnSecondary } from '@/components/ui';

interface Props {
  value: ICreateAttach[];
  onChange: (v: ICreateAttach[]) => void;
}

export const TaskAttachments = ({ value, onChange }: Props) => {
  const [showAddLink, setShowAddLink] = useState(false);
  const [showAddImage, setShowAddImage] = useState(false);
  const [linkFields, setLinkFields] = useState({
    title: '',
    value: '',
  });
  const links = value.filter((el) => el.type === EAttachType.LINK);
  const images = value
    .filter((el) => el.type === EAttachType.FILE)
    .map((el) => ({
      ...el,
      preview: el.value instanceof File ? URL.createObjectURL(el.value) : el.value,
    }));

  const total = links.length + images.length;

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
    onChange([...value, link]);
    handleCancel();
  };

  const deleteLink = (v: string) => {
    const filtered = value.filter((el) => el.value !== v);
    onChange(filtered);
  };

  const addImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    if (file) {
      const attach = { title: file.name, value: file, type: EAttachType.FILE };
      onChange([...value, attach]);
      handleCancel();
    }
  };

  const deleteImage = (v: string) => {
    const filtered = value.filter((el) => el.title !== v);
    onChange(filtered);
  };

  return (
    <div className={styles.taskAttachments}>
      <p className={styles.label}>Attachments ({total})</p>
      <ul className={styles.linksList}>
        {links.map(({ title, value, type }) => (
          <li
            key={type === EAttachType.LINK ? value.toString() : title}
            className={styles.linkItem}
          >
            <Link href={value.toString()} target="_blank">
              {title || value.toString()}
            </Link>
            <button
              type="button"
              className={styles.deleteBtn}
              onClick={() => deleteLink(value.toString())}
            >
              <SvgHandler icon={EIconsSet.Cross} />
            </button>
          </li>
        ))}
      </ul>
      {images.length ? (
        <ul className={styles.filesList}>
          {images.map(({ title, preview }, idx) => (
            <li key={idx + title} className={styles.fileItem}>
              <Image src={preview} alt={title} sizes="100%" fill className={styles.image} />
              <div className={styles.overlay}>
                <button
                  type="button"
                  className={styles.deleteBtn}
                  onClick={() => deleteImage(title)}
                >
                  <SvgHandler icon={EIconsSet.Cross} />
                </button>
                <div className={styles.info}>{title}</div>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
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
            <p className={styles.label}>Link title</p>
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
            <p className={styles.label}>Link path</p>
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
            <BtnSecondary onClick={handleCancel}>Cancel</BtnSecondary>
            <BtnSecondary disabled={!linkFields.value} onClick={addLink}>
              Add
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
    </div>
  );
};
