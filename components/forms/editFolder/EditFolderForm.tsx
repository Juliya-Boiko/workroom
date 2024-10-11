'use client';
import styles from './editFolderForm.module.scss';
import { useEffect } from 'react';
import { useFolder, usePages } from '@/services';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { editFolderSchema, EditFolderFormData, folderThumbs } from '@/utils';
import { BtnPrimary } from '@/components/ui';
import { ThumbSelect } from '../addFolder/thumbSelect/ThumbSelect';
import { LoaderSkeleton } from '@/components/LoaderSkeleton';
import { ReorderPages } from './reorderPages/ReorderPages';

export const EditFolderForm = ({ folderId }: { folderId: string }) => {
  const { data: folder, isLoading: isLoadingFolder } = useFolder(folderId);
  const { data: pages } = usePages(folderId);
  const {
    reset,
    control,
    handleSubmit,
    formState: { isDirty, isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      image: folderThumbs[0],
    },
    resolver: yupResolver(editFolderSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    if (folder && pages) {
      const items = pages.map(({ _id, title, order }) => ({ _id, title, order }));

      reset({
        image: folder.image,
        pages: items,
      });
    }
  }, [folder, pages, reset]);

  const onSubmit = async (v: EditFolderFormData) => {
    console.log(v);
  };

  const isDisabled = !isDirty || !isValid || isSubmitting || isLoadingFolder;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {isLoadingFolder ? (
        <LoaderSkeleton height={70} />
      ) : (
        <Controller
          control={control}
          name="image"
          render={({ field }) => <ThumbSelect value={field.value} onChange={field.onChange} />}
        />
      )}
      {pages?.length ? (
        <Controller
          control={control}
          name="pages"
          render={({ field }) => <ReorderPages value={field.value} onChange={field.onChange} />}
        />
      ) : null}
      <div className={styles.btnWrapper}>
        <BtnPrimary type="submit" disabled={isDisabled}>
          Save Folder
        </BtnPrimary>
      </div>
    </form>
  );
};
