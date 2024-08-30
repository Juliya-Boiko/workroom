'use client';
import styles from '../common.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { inviteSchema, InviteFormData } from '@/utils/schemas';
import { InputField } from '@/components/ui/input/InputField';
import { EIconsSet } from '@/enums';
import { SelectDrop } from '@/components/ui/select/SelectDrop';
import { registerUser } from '@/actions';
import { invitePositionDataTypes } from '@/enums';
import { BtnPrimary } from '@/components/ui/buttons/primary/BtnPrimary';
import { ROUTES } from '@/constants';

interface Props {
  companyId: string;
  email: string;
}

export const InviteForm = ({ companyId, email }: Props) => {
  const [typePassword, setTypePassword] = useState('password');
  const router = useRouter();
  const defaultValues = {
    email,
    password: '',
    confirmPassword: '',
    name: '',
    userPosition: invitePositionDataTypes[0],
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(inviteSchema),
    mode: 'onChange',
  });

  const toggleType = () => {
    if (typePassword === 'password') {
      setTypePassword('text');
    } else {
      setTypePassword('password');
    }
  };

  const onSubmit = async (data: InviteFormData) => {
    const resp = await registerUser({ ...data, companyId });
    if (resp) router.push(ROUTES.dashboard);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
      <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting}>
        Sign In
      </BtnPrimary>
    </form>
  );
};
