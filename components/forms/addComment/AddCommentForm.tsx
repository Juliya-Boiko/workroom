'use client';
import styles from './addCommentForm.module.scss';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { useCommentMutation } from '@/services';
import { addCommentSchema, AddCommentFormData } from '@/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextareaField, BtnPrimary } from '@/components/ui';

export const AddCommentForm = ({ taskId }: { taskId: string }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(addCommentSchema),
    mode: 'onSubmit',
  });
  const { create } = useCommentMutation();
  const t = useTranslations('Forms');

  const onSubmit = async (v: AddCommentFormData) => {
    create({ ...v, taskId });
    reset();
  };

  return (
    <form className={styles.addCommentForm} onSubmit={handleSubmit(onSubmit)}>
      <TextareaField errors={errors.text} name="text" register={register} />
      <div className={styles.wrapper}>
        <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting}>
          {t('addComment')}
        </BtnPrimary>
      </div>
    </form>
  );
};
