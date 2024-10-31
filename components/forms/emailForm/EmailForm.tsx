'use client';
import styles from './emailForm.module.scss';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { yupResolver } from '@hookform/resolvers/yup';
import { usePasswordMutations } from '@/services';
import { emailSchema, EmailFormData } from '@/utils';
import { InputField, BtnPrimary } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';

export const EmailForm = () => {
  const { sendEmail, isSuccess, isPending } = usePasswordMutations();
  const tForm = useTranslations('Forms');
  const tAuth = useTranslations('Auth.ForgotPassword');

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
        <div className={styles.success}>
          <div className={styles.wrapper}>
            <SvgHandler icon={EIconsSet.Checkbox} />
          </div>
          <p>{tAuth('sent')}</p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label={tForm('email')}
            name="email"
            register={register}
            placeholder="youremail@gmail.com"
            errors={errors.email}
          />
          <BtnPrimary type="submit" disabled={isDisabled}>
            <span>{tAuth('send')}</span>
            <SvgHandler icon={EIconsSet.ArrowRight} />
          </BtnPrimary>
        </form>
      )}
    </>
  );
};
