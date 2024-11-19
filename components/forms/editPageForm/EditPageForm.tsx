'use client';
import styles from '../addPage/addPageForm.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { usePageMutation } from '@/services';
import { useTranslations } from 'next-intl';
import { yupResolver } from '@hookform/resolvers/yup';
import { addPageSchema, AddPageFormData } from '@/utils';
import { InputField, BtnPrimary, BtnSecondary } from '@/components/ui';
import { EditorQuill } from '@/components/EditorQuill';
import { IPage } from '@/typings';

export const EditPageForm = ({ page, onCancel }: { page: IPage; onCancel: () => void }) => {
  const { update, isUpdating } = usePageMutation();
  const t = useTranslations('Forms');
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      title: page.title,
      content: page.content,
    },
    resolver: yupResolver(addPageSchema),
    mode: 'onChange',
  });

  const onSubmit = async (v: AddPageFormData) => {
    update({
      id: page._id,
      update: v,
    });
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
        <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting || isUpdating}>
          {t('savePage')}
        </BtnPrimary>
      </div>
    </form>
  );
};
