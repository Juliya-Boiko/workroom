'use client';
import styles from './addPageForm.module.scss';
import { usePageMutation } from '@/services';
import { useForm, Controller } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { yupResolver } from '@hookform/resolvers/yup';
import { addPageSchema, AddPageFormData } from '@/utils';
import { InputField, BtnPrimary, BtnSecondary } from '@/components/ui';
import { EditorQuill } from '@/components/EditorQuill';

export const AddPageForm = ({ folderId, onCancel }: { folderId: string; onCancel: () => void }) => {
  const { create, isCreating } = usePageMutation();
  const t = useTranslations('Forms');
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
      <InputField label="pageTitle" name="title" register={register} errors={errors.title} />
      <Controller
        control={control}
        name="content"
        render={({ field }) => <EditorQuill value={field.value} onChange={field.onChange} />}
      />
      <div className={styles.actions}>
        <BtnSecondary onClick={() => onCancel()}>{t('cancel')}</BtnSecondary>
        <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting || isCreating}>
          {t('savePage')}
        </BtnPrimary>
      </div>
    </form>
  );
};
