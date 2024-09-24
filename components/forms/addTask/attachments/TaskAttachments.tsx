'use client';
import styles from './taskAttachments.module.scss';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';
import { useState } from 'react';

interface Props {
  onUpdate: (v: { links: { createdAt: Date; link: string }[] }) => void;
}

export const TaskAttachments = ({ onUpdate }: Props) => {
  const [showLink, setShowLink] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  const [links, setLinks] = useState<{ createdAt: Date; link: string }[]>([]);
  const [images, setImages] = useState([]);

  const [fieldValue, setFieldValue] = useState('');

  const handleAddLink = () => {
    if (!fieldValue) return;
    setLinks((v) => [...v, { createdAt: new Date(), link: fieldValue }]);
    setShowLink(false);
    setFieldValue('');
    onUpdate({
      links: [...links, { createdAt: new Date(), link: fieldValue }],
    });
  };

  const handleCancelLink = () => {
    setShowLink(false);
    setFieldValue('');
  };

  const handleDeleteLink = (v: string) => {
    const filtered = links.filter((el) => el.link !== v);
    setLinks(filtered);
    onUpdate({
      links: filtered,
    });
  };

  return (
    <div className={styles.taskAttachments}>
      <p className={styles.label}>Attachments</p>
      <div className={styles.wrapper}>
        <button
          type="button"
          title="Add link"
          className={`${styles.btn} ${styles.btnLink}`}
          onClick={() => setShowLink((v) => !v)}
        >
          <SvgHandler icon={EIconsSet.AttachLink} />
        </button>
        {links.length ? (
          <ul className={styles.linkList}>
            {links.map(({ createdAt, link }) => (
              <li key={createdAt} className={styles.linkItem}>
                <SvgHandler icon={EIconsSet.AttachLink} />
                <a className={styles.link}>{link}</a>
                <button
                  type="button"
                  className={styles.deleteBtn}
                  onClick={() => handleDeleteLink(link)}
                >
                  <SvgHandler icon={EIconsSet.Cross} />
                </button>
              </li>
            ))}
          </ul>
        ) : null}
        {!links.length && !showLink ? (
          <p className={styles.placeholder}>You dont have attached links</p>
        ) : null}
        {showLink && (
          <div>
            <input
              type="text"
              name="fieldValue"
              id="fieldValue"
              value={fieldValue}
              className={styles.inputLink}
              onChange={(e) => setFieldValue(e.target.value)}
            />
            <div className={styles.btnWrapper}>
              <button type="button" className={styles.btnAction} onClick={handleCancelLink}>
                cancel
              </button>
              <button type="button" className={styles.btnAction} onClick={handleAddLink}>
                add
              </button>
            </div>
          </div>
        )}
      </div>

      <div>
        <button
          type="button"
          title="Add image"
          className={`${styles.btn} ${styles.btnFile}`}
          onClick={() => setShowUpload((v) => !v)}
        >
          <SvgHandler icon={EIconsSet.AttachFile} />
        </button>
        {images.length ? <div>images</div> : null}
        {!images.length && !showUpload ? (
          <p className={styles.placeholder}>You dont have attached images</p>
        ) : null}
        {showUpload ? <div>upload</div> : null}
      </div>
    </div>
  );
};
