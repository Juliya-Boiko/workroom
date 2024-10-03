'use client';
import styles from './editAttachments.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useAttachMutation } from '@/services/useAttachments';
import { ICreateAttach, EAttachType, EIconsSet } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';
import { UploadAttach } from '@/components/ui';

interface Props {
  value: ICreateAttach[];
  onChange: (v: ICreateAttach[]) => void;
}

export const EditAttachments = ({ value, onChange }: Props) => {
  const { remove } = useAttachMutation();

  const total = value.length;
  const links = value.filter((el) => el.type === EAttachType.LINK);
  const images = value
    .filter((el) => el.type === EAttachType.FILE)
    .map((el) => ({
      ...el,
      preview: el.value instanceof File ? URL.createObjectURL(el.value) : el.value,
    }));

  const handleDeleteImage = (
    type: EAttachType,
    val: string | File,
    title: string,
    id: string | undefined
  ) => {
    if (val instanceof File) {
      const filtered = value.filter((el) => el.title !== title);
      onChange(filtered);
      return;
    }
    if (id) {
      remove({ id, type });
    }
  };

  const handleDeleteLink = (type: EAttachType, val: string | File, id: string | undefined) => {
    if (id) {
      remove({ id, type });
    } else {
      const filtered = value.filter((el) => el.value !== val);
      onChange(filtered);
    }
  };

  const handleAddAttach = (attach: ICreateAttach) => {
    onChange([...value, attach]);
  };

  return (
    <div className={styles.editAttachments}>
      <p className={styles.label}>Attachments {total ? `(${total})` : ''}</p>
      {images.length ? (
        <ul className={styles.filesList}>
          {images.map(({ _id, title, type, value, preview }) => (
            <li key={_id || title} className={styles.fileItem}>
              <Image src={preview} sizes="100%" alt={title} fill />
              <div className={styles.info}>
                <p>{title}</p>
              </div>
              <button
                type="button"
                className={styles.btnDelete}
                onClick={() => handleDeleteImage(type, value, title, _id)}
              >
                <SvgHandler icon={EIconsSet.Cross} />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
      {links.length ? (
        <ul className={styles.linksList}>
          {links.map(({ _id, title, value, type }) => (
            <li key={_id || value.toString()} className={styles.linkItem}>
              <SvgHandler icon={EIconsSet.AttachLink} />
              <Link href={value.toString()} target="_blank">
                {title || value.toString()}
              </Link>
              <button
                type="button"
                className={styles.btnDelete}
                onClick={() => handleDeleteLink(type, value, _id)}
              >
                <SvgHandler icon={EIconsSet.Cross} />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
      <UploadAttach onChange={handleAddAttach} />
    </div>
  );
};
