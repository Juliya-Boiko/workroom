'use client';
import styles from '../common.module.scss';
import inviteStyles from './invite.module.scss';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useUserMutations } from '@/services';
import { yupResolver } from '@hookform/resolvers/yup';
import { inviteSchema, InviteFormData } from '@/utils';
import { InputField, SelectDrop, BtnPrimary } from '@/components/ui';
import { EIconsSet, EUserPosition, invitePositionDataTypes } from '@/typings';

interface Props {
  companyId: string;
  email: string;
}

export const InviteForm = ({ companyId, email }: Props) => {
  const [typePassword, setTypePassword] = useState('password');
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

  const toggleType = () => {
    if (typePassword === 'password') {
      setTypePassword('text');
    } else {
      setTypePassword('password');
    }
  };

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
      <InputField
        label="Password"
        type={typePassword}
        name="password"
        placeholder="Enter password"
        register={register}
        iconPosition="end"
        icon={EIconsSet.Eye}
        errors={errors.password}
        onIconClick={toggleType}
      />
      <InputField
        label="Confirm Password"
        type={typePassword}
        name="confirmPassword"
        placeholder="Confirm password"
        register={register}
        errors={errors.confirmPassword}
        iconPosition="end"
        icon={EIconsSet.Eye}
        onIconClick={toggleType}
      />
      <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting || isInviting}>
        Sign In
      </BtnPrimary>
    </form>
  );
};
