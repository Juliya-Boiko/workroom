'use client';
import styles from './addCommentForm.module.scss';
import { useForm } from 'react-hook-form';
import { addCommentSchema, AddCommentFormData } from '@/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextareaField, BtnPrimary } from '@/components/ui';
import { useCommentMutation } from '@/services';

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

  const onSubmit = async (v: AddCommentFormData) => {
    create({ ...v, taskId });
    reset();
  };

  return (
    <form className={styles.addCommentForm} onSubmit={handleSubmit(onSubmit)}>
      <TextareaField errors={errors.text} label="Comment" name="text" register={register} />
      <div className={styles.wrapper}>
        <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting}>
          Add comment
        </BtnPrimary>
      </div>
    </form>
  );
};
