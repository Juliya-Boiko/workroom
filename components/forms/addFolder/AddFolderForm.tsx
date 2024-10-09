'use client';
import styles from '../common.module.scss';
import { useModalContext } from '@/components/providers/ModalProvider';
import { useFolderMutation } from '@/services';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addFolderSchema, AddFolderFormData, folderThumbs } from '@/utils';
import { ProjectsSelect } from './projectsSelect/ProjectsSelect';
import { BtnPrimary } from '@/components/ui';
import { ThumbSelect } from './thumbSelect/ThumbSelect';

export const AddFolderForm = () => {
  const { closeModal } = useModalContext();
  const { create } = useFolderMutation();

  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      image: folderThumbs[0],
      projectId: undefined,
    },
    resolver: yupResolver(addFolderSchema),
    mode: 'onChange',
  });

  const onSubmit = async (v: AddFolderFormData) => {
    create(v);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Controller
        control={control}
        name="image"
        render={({ field }) => <ThumbSelect value={field.value} onChange={field.onChange} />}
      />
      <Controller
        control={control}
        name="projectId"
        render={({ field }) => <ProjectsSelect value={field.value} onChange={field.onChange} />}
      />
      <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting}>
        Save Folder
      </BtnPrimary>
    </form>
  );
};
