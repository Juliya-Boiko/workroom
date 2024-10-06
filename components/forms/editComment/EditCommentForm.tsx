'use client';
import styles from './editCommentForm.module.scss';
import { useForm } from 'react-hook-form';
import { addCommentSchema, AddCommentFormData } from '@/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextareaField, BtnPrimary, BtnSecondary } from '@/components/ui';
import { useCommentMutation } from '@/services';

interface Props {
  id: string;
  value: string;
  onCancel: () => void;
}

export const EditCommentForm = ({ id, value, onCancel }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      text: value,
    },
    resolver: yupResolver(addCommentSchema),
    mode: 'onSubmit',
  });
  const { update } = useCommentMutation();

  const onSubmit = async (v: AddCommentFormData) => {
    update({ id, update: v });
    onCancel();
  };

  return (
    <form className={styles.editCommentForm} onSubmit={handleSubmit(onSubmit)}>
      <TextareaField errors={errors.text} label="Comment" name="text" register={register} />
      <div className={styles.wrapper}>
        <BtnSecondary onClick={onCancel}>Cancel</BtnSecondary>
        <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting}>
          Edit comment
        </BtnPrimary>
      </div>
    </form>
  );
};
