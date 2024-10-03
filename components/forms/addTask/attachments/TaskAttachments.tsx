import styles from './taskAttachments.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { SvgHandler } from '@/components/SvgHandler';
import { EAttachType, EIconsSet, ICreateAttach } from '@/typings';
import { UploadAttach } from '@/components/ui';

interface Props {
  value: ICreateAttach[];
  onChange: (v: ICreateAttach[]) => void;
}

export const TaskAttachments = ({ value, onChange }: Props) => {
  const links = value.filter((el) => el.type === EAttachType.LINK);
  const images = value
    .filter((el) => el.type === EAttachType.FILE)
    .map((el) => ({
      ...el,
      preview: el.value instanceof File ? URL.createObjectURL(el.value) : el.value,
    }));

  const total = links.length + images.length;

  const deleteLink = (v: string) => {
    const filtered = value.filter((el) => el.value !== v);
    onChange(filtered);
  };

  const deleteImage = (v: string) => {
    const filtered = value.filter((el) => el.title !== v);
    onChange(filtered);
  };

  const handleAddAttach = (attach: ICreateAttach) => {
    onChange([...value, attach]);
  };

  return (
    <div className={styles.taskAttachments}>
      <p className={styles.label}>Attachments ({total})</p>
      {links.length ? (
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
      ) : null}
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
      <UploadAttach onChange={handleAddAttach} />
    </div>
  );
};
