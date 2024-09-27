/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import styles from './taskAttachments.module.scss';
import { SvgHandler } from '@/components/SvgHandler';
import { EAttachType, EIconsSet, ICreateLink } from '@/typings';
import Image from 'next/image';
import { useState, ChangeEvent } from 'react';
import { BtnSecondary } from '@/components/ui';
import Link from 'next/link';

interface Props {
  onUpdate: (v: {
    links: ICreateLink[];
    // images: { createdAt: Date; img: File }[];
  }) => void;
}

export const TaskAttachments = ({ onUpdate }: Props) => {
  const [showAddLink, setShowAddLink] = useState(false);
  const [showAddImage, setShowAddImage] = useState(false);
  const [linkFields, setLinkFields] = useState({
    title: '',
    value: '',
  });
  const [links, setLinks] = useState<ICreateLink[]>([]);

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
  };

  const addLink = () => {
    const updated = [...links, { ...linkFields, type: EAttachType.LINK }];
    setLinks(updated);
    handleCancel();
    onUpdate({
      links: updated,
    });
  };

  const deleteLink = (v: string) => {
    const filtered = links.filter((el) => el.value !== v);
    setLinks(filtered);
    onUpdate({
      links: filtered,
    });
  };

  return (
    <div className={styles.taskAttachments}>
      <p className={styles.label}>Attachments</p>
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
      {links.length ? (
        <ul className={styles.linksList}>
          {links.map(({ title, value }) => (
            <li key={value} className={styles.linkItem}>
              <Link href={value} target="_blank">
                {title || value}
              </Link>
              <button type="button" className={styles.deleteBtn} onClick={() => deleteLink(value)}>
                <SvgHandler icon={EIconsSet.Cross} />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
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
      {showAddImage && <div>image upload</div>}
    </div>
  );
  // const [showLink, setShowLink] = useState(false);
  // const [showUpload, setShowUpload] = useState(false);
  // const [links, setLinks] = useState<{ createdAt: Date; link: string }[]>([]);
  // const [images, setImages] = useState<{ createdAt: Date; img: File }[]>([]);
  // const [previewImages, setPreviewImages] = useState<string[]>([]);
  // const handleAddLink = () => {
  //   if (!fieldValue) return;
  //   setLinks((v) => [...v, { createdAt: new Date(), link: fieldValue }]);
  //   setShowLink(false);
  //   setFieldValue('');
  //   onUpdate({
  //     links: [...links, { createdAt: new Date(), link: fieldValue }],
  //     images,
  //   });
  // };
  // const handleCancelLink = () => {
  //   setShowLink(false);
  //   setFieldValue('');
  // };
  // const handleDeleteLink = (v: string) => {
  //   const filtered = links.filter((el) => el.link !== v);
  //   setLinks(filtered);
  //   onUpdate({
  //     links: filtered,
  //     images,
  //   });
  // };
  // const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e?.target?.files?.[0];
  //   if (file) {
  //     const previewUrl = URL.createObjectURL(file);
  //     setPreviewImages((prev) => [...prev, previewUrl]);
  //     setTimeout(() => URL.revokeObjectURL(previewUrl), 1000);
  //     setImages((v) => [...v, { createdAt: new Date(), img: file }]);
  //     onUpdate({
  //       links,
  //       images: [...images, { createdAt: new Date(), img: file }],
  //     });
  //   }
  // };
  // return (
  //   <div className={styles.taskAttachments}>
  //     <p className={styles.label}>Attachments</p>
  //     <div className={styles.wrapper}>
  //       {links.length ? (
  //         <ul className={styles.linkList}>
  //           {links.map(({ createdAt, link }) => (
  //             <li key={createdAt.toString()} className={styles.linkItem}>
  //               <SvgHandler icon={EIconsSet.AttachLink} />
  //               <a className={styles.link}>{link}</a>
  //               <button
  //                 type="button"
  //                 className={styles.deleteBtn}
  //                 onClick={() => handleDeleteLink(link)}
  //               >
  //                 <SvgHandler icon={EIconsSet.Cross} />
  //               </button>
  //             </li>
  //           ))}
  //         </ul>
  //       ) : null}
  //       {!links.length && !showLink ? (
  //         <p className={styles.placeholder}>You dont have attached links</p>
  //       ) : null}
  //       {showLink && (
  //         <div>
  //           <div className={styles.btnWrapper}>
  //             <button type="button" className={styles.btnAction} onClick={handleCancelLink}>
  //               cancel
  //             </button>
  //             <button type="button" className={styles.btnAction} onClick={handleAddLink}>
  //               add
  //             </button>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //     <div className={styles.wrapper}>
  //       {!images.length && !showUpload ? (
  //         <p className={styles.placeholder}>You dont have attached images</p>
  //       ) : null}
  //       {showUpload || images.length ? (
  //         <ul className={styles.previewList}>
  //           {previewImages.map((el) => (
  //             <li key={el} className={styles.imageItem}>
  //               <Image src={el} alt="Attach" fill sizes="100%" />
  //             </li>
  //           ))}
  //           <li className={styles.imageItem}>
  //             <label htmlFor="upload-attach" className={styles.uploadImage}>
  //               <SvgHandler icon={EIconsSet.Upload} />
  //               <input
  //                 type="file"
  //                 name="upload-attach"
  //                 id="upload-attach"
  //                 accept="image/*"
  //                 className={styles.inputFile}
  //                 onChange={onImageChange}
  //               />
  //             </label>
  //           </li>
  //         </ul>
  //       ) : null}
  //     </div>
  //   </div>
  // );
};
