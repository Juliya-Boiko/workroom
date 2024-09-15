'use client';
import styles from './emailForm.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { usePasswordMutations } from '@/services';
import { emailSchema, EmailFormData } from '@/utils';
import { InputField, BtnPrimary } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';

export const EmailForm = () => {
  const { sendEmail, isSuccess, isPending } = usePasswordMutations();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(emailSchema),
    mode: 'onChange',
  });

  const isDisabled = !isDirty || !isValid || isSubmitting || isPending;

  const onSubmit = async (data: EmailFormData) => {
    sendEmail(data.email);
  };

  return (
    <>
      {isSuccess ? (
        <div>email sended</div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Email Address"
            name="email"
            register={register}
            placeholder="youremail@gmail.com"
            errors={errors.email}
          />
          <BtnPrimary type="submit" disabled={isDisabled}>
            <span>Send email</span>
            <SvgHandler icon={EIconsSet.ArrowRight} />
          </BtnPrimary>
        </form>
      )}
    </>
  );
};
