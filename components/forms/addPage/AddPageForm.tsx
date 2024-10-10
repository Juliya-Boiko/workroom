'use client';
import styles from './addPageForm.module.scss';
import { usePageMutation } from '@/services';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addPageSchema, AddPageFormData } from '@/utils';
import { InputField, BtnPrimary, BtnSecondary } from '@/components/ui';
import { EditorQuill } from '@/components/EditorQuill';

export const AddPageForm = ({ folderId, onCancel }: { folderId: string; onCancel: () => void }) => {
  const { create, isCreating } = usePageMutation();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(addPageSchema),
    mode: 'onChange',
  });

  const onSubmit = async (v: AddPageFormData) => {
    create({ folderId, ...v });
    onCancel();
  };

  return (
    <form className={styles.addPageForm} onSubmit={handleSubmit(onSubmit)}>
      <InputField label="Page title" name="title" register={register} errors={errors.title} />
      <Controller
        control={control}
        name="content"
        render={({ field }) => <EditorQuill value={field.value} onChange={field.onChange} />}
      />
      <div className={styles.actions}>
        <BtnSecondary onClick={() => onCancel()}>Cancel</BtnSecondary>
        <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting || isCreating}>
          Save Page
        </BtnPrimary>
      </div>
    </form>
  );
};
