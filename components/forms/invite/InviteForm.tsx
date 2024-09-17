'use client';
import styles from '../common.module.scss';
import inviteStyles from './invite.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { useUserMutations } from '@/services';
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
      <InputField
        label="Email Address"
        name="email"
        disabled
        register={register}
        placeholder="youremail@gmail.com"
        errors={errors.email}
      />
      <div className={styles.optionWrapper}>
        <p className={styles.label}>What describes you best?</p>
        <Controller
          control={control}
          name="userPosition"
          render={({ field }) => (
            <SelectDrop
              options={invitePositionDataTypes}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      {position === EUserPosition.EMPLOYEE && (
        <InputField
          label="Profession"
          name="profession"
          register={register}
          placeholder="Designer"
          errors={errors.profession}
        />
      )}
      <InputField
        label="Name"
        name="name"
        register={register}
        placeholder="John Doe"
        errors={errors.name}
      />
      <PasswordInputField
        label="Password"
        name="password"
        register={register}
        errors={errors.password}
      />
      <PasswordInputField
        label="Confirm Password"
        name="confirmPassword"
        register={register}
        errors={errors.confirmPassword}
      />
      <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting || isInviting}>
        Sign In
      </BtnPrimary>
    </form>
  );
};
