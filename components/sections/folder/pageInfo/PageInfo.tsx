'use client';
import styles from './pageInfo.module.scss';
import { useState } from 'react';
import { PageInfoOptions } from './options/PageInfoOptions';
import { EditPageForm } from '@/components/forms/editPageForm/EditPageForm';
import { IPage } from '@/typings';

export const PageInfo = ({ page }: { page?: IPage }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section className={styles.pageInfo}>
      {page && !isEditing ? (
        <>
          <div className={styles.head}>
            <h2 className={styles.title}>{page?.title}</h2>
            {page ? <PageInfoOptions pageId={page._id} onEdit={() => setIsEditing(true)} /> : null}
          </div>
          <div dangerouslySetInnerHTML={{ __html: page.content }} className={styles.container} />
        </>
      ) : null}
      {page && isEditing ? <EditPageForm page={page} onCancel={() => setIsEditing(false)} /> : null}
    </section>
  );
};
