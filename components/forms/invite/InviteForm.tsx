'use client';
import styles from '../common.module.scss';
import inviteStyles from './invite.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { useUserMutations } from '@/services';
import { useTranslations } from 'next-intl';
import { yupResolver } from '@hookform/resolvers/yup';
import { inviteSchema, InviteFormData } from '@/utils';
import { InputField, PasswordInputField, SelectDrop, BtnPrimary } from '@/components/ui';
import { EUserPosition, invitePositionDataTypes } from '@/typings';

interface Props {
  companyId: string;
  email: string;
}

export const InviteForm = ({ companyId, email }: Props) => {
  const { registerMember, isInviting } = useUserMutations();
  const t = useTranslations();

  const defaultValues = {
    email,
    password: '',
    confirmPassword: '',
    name: '',
    userPosition: invitePositionDataTypes[0],
    profession: '',
  };

  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(inviteSchema),
    mode: 'onChange',
  });

  const position = watch('userPosition');

  const onSubmit = async (data: InviteFormData) => {
    registerMember({ ...data, companyId });
  };

  return (
    <form className={`${styles.form} ${inviteStyles.form}`} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.title}>{t('Auth.Invite.title')}</h1>
      <InputField
        label="email"
        name="email"
        disabled
        register={register}
        placeholder="emailHolder"
        errors={errors.email}
      />
      <div className={styles.optionWrapper}>
        <Controller
          control={control}
          name="userPosition"
          render={({ field }) => (
            <SelectDrop
              label={t('Forms.bestDescribe')}
              options={invitePositionDataTypes}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      {position === EUserPosition.EMPLOYEE && (
        <InputField
          label="profession"
          name="profession"
          register={register}
          placeholder="profession"
          errors={errors.profession}
        />
      )}
      <InputField
        label="name"
        name="name"
        register={register}
        placeholder="name"
        errors={errors.name}
      />
      <PasswordInputField
        label="password"
        name="password"
        register={register}
        errors={errors.password}
      />
      <PasswordInputField
        label="confirm"
        name="confirmPassword"
        register={register}
        errors={errors.confirmPassword}
      />
      <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting || isInviting}>
        {t('Auth.SignUp.signUp')}
      </BtnPrimary>
    </form>
  );
};
