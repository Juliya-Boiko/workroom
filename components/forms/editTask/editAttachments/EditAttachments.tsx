'use client';
// import Link from 'next/link';
// import styles from './editAttachments.module.scss';
// import { useAttachMutation } from '@/services/useAttachments';
// import { TaskAttachments } from '../../addTask/attachments/TaskAttachments';

export const EditAttachments = () => {
  // const { remove } = useAttachMutation();
  // const total = attachments.files.length + attachments.links.length;
  return <div>EditAttachments form</div>;
  // return (
  //   <div className={styles.editAttachments}>
  //     <p className={styles.label}>Attachments ({total})</p>
  //     <ul>
  //       {attachments.links.map(({ _id, title, value, type }) => (
  //         <li key={_id}>
  //           <Link href={value}>{title || value}</Link>
  //           <button type="button" onClick={() => remove({ id: _id, type })}>
  //             Delete
  //           </button>
  //         </li>
  //       ))}
  //     </ul>
  //     <ul>
  //       {attachments.files.map(({ _id, title, type }) => (
  //         <li key={_id}>
  //           <div>{title}</div>{' '}
  //           <button type="button" onClick={() => remove({ id: _id, type })}>
  //             Delete
  //           </button>
  //         </li>
  //       ))}
  //     </ul>
  //     <TaskAttachments onUpdate={(v) => console.log(v)} />
  //     {/* <UploadAttach /> */}
  //   </div>
  // );
};
