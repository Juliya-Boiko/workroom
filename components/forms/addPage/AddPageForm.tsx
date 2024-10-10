'use client';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addPageSchema, AddPageFormData } from '@/utils';
import { InputField, BtnPrimary, BtnSecondary } from '@/components/ui';
import { EditorQuill } from '@/components/EditorQuill';

export const AddPageForm = ({ onCancel }: { onCancel: () => void }) => {
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
    console.log(v);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField label="Page title" name="title" register={register} errors={errors.title} />
      <Controller
        control={control}
        name="content"
        render={({ field }) => <EditorQuill value={field.value} onChange={field.onChange} />}
      />
      <div>
        <BtnSecondary onClick={() => onCancel()}>Cancel</BtnSecondary>
        <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting}>
          Save Page
        </BtnPrimary>
      </div>
    </form>
  );
};
