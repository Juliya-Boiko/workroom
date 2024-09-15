'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { emailSchema, EmailFormData } from '@/utils';
import { InputField, PasswordInputField, BtnPrimary, CheckField } from '@/components/ui';


export const EmailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(signInSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: EmailFormData) => {
    console.log(data);
  };

  return <form onSubmit={handleSubmit(onSubmit)}>
    <InputField
        label="Email Address"
        name="email"
        register={register}
        placeholder="youremail@gmail.com"
        errors={errors.email}
      />
      <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting}>
        <span>Send email</span>
        <SvgHandler icon={EIconsSet.ArrowRight} />
      </BtnPrimary>
  </form>;
};
