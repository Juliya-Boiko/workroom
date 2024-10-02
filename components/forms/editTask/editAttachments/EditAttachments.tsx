/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import styles from './editAttachments.module.scss';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useState, ChangeEvent, useEffect } from 'react';
// import { useAttachments, useAttachMutation } from '@/services/useAttachments';
import { ICreateAttach, IAttachment, EAttachType, EIconsSet } from '@/typings';
// import { SvgHandler } from '@/components/SvgHandler';

interface Props {
  value: ICreateAttach[];
  onChange: (v: ICreateAttach[]) => void;
}

export const EditAttachments = ({ value }: Props) => {
  console.log({ value });
  // const { data } = useAttachments(id);
  // const { remove } = useAttachMutation();
  // const [attachments, setAttachments] = useState<IAttachment[]>([]);

  // const total = attachments.length;
  // const links = attachments.filter((el) => el.type === EAttachType.LINK);
  // const images = attachments.filter((el) => el.type === EAttachType.FILE);

  // useEffect(() => {
  //   if (data) {
  //     setAttachments(data);
  //   }
  // }, [data]);
  // const [showAddLink, setShowAddLink] = useState(false);
  // const [showAddImage, setShowAddImage] = useState(false);
  // const [linkFields, setLinkFields] = useState({
  //   title: '',
  //   value: '',
  // });

  // console.log(data);

  // const toggleLinkForm = () => {
  //   setShowAddLink((v) => !v);
  //   setShowAddImage(false);
  // };

  // const toggleImageForm = () => {
  //   setShowAddImage((v) => !v);
  //   setShowAddLink(false);
  // };

  return (
    <div className={styles.editAttachments}>
      <p className={styles.label}>Attachments ()</p>
      {/* {images.length ? (
        <ul className={styles.filesList}>
          {images.map(({ _id, title, type, value }) => (
            <li key={_id} className={styles.fileItem}>
              <Image src={value} sizes="100%" alt={title} fill />
              <div className={styles.info}>
                <p>{title}</p>
              </div>
              <button
                type="button"
                className={styles.btnDelete}
                onClick={() => remove({ id: _id, type })}
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
            <li key={_id} className={styles.linkItem}>
              <SvgHandler icon={EIconsSet.AttachLink} />
              <Link href={value} target="_blank">
                {title || value}
              </Link>
              <button
                type="button"
                className={styles.btnDelete}
                onClick={() => remove({ id: _id, type })}
              >
                <SvgHandler icon={EIconsSet.Cross} />
              </button>
            </li>
          ))}
        </ul>
      ) : null} */}
      {/* 
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
      </div> */}
    </div>
  );
};
