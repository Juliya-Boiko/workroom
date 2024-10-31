'use client';
import styles from './signUp.module.scss';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema, SignUpFormData } from '@/utils';
import { EmailStage, CompanyStage, UserStage, MembersStage } from './stages';
import { BtnPrimary, BtnSecondary } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';
import {
  usingGoalsDataTypes,
  userPositionsDataTypes,
  ESignStages,
  signStagesDataTypes,
  businessDirectionDataTypes,
  companySizeDataTypes,
  EIconsSet,
} from '@/typings';

interface Props {
  activeStage: ESignStages;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: (data: SignUpFormData) => void;
}

const defaultValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  usingGoal: usingGoalsDataTypes[0],
  userPosition: userPositionsDataTypes[0],
  companyName: '',
  direction: businessDirectionDataTypes[0],
  companySize: companySizeDataTypes[0],
  members: [''],
};

export const SignUpForm = ({ activeStage, onNext, onPrev, onSubmit }: Props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const tAuth = useTranslations('Auth.SignUp');

  const {
    register,
    control,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(signUpSchema),
    mode: 'onChange',
  });
  const step = signStagesDataTypes.findIndex((el) => el === activeStage);
  const members = watch('members');

  const watchFields = () => {
    if (activeStage === ESignStages.EmailStage) {
      return watch(['email', 'password', 'confirmPassword']);
    }
    if (activeStage === ESignStages.PersonStage) {
      return watch(['name']);
    }
    if (activeStage === ESignStages.CompanyStage) {
      return watch(['companyName']);
    }
  };
  const fields = watchFields();

  useEffect(() => {
    const isAllFilled = fields?.every((el) => el);
    const isErrors = Object.keys(errors).length > 0;
    if (isAllFilled && !isErrors) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [errors, fields]);

  const handleAddMember = () => {
    const values = getValues('members');
    if (!values) return;
    setValue('members', [...values, '']);
  };

  const handleChange = (idx: number, value: string) => {
    const values = getValues('members');
    if (!values) return;
    values[idx] = value;
    setValue('members', [...values]);
  };

  const handleDelete = (idx: number) => {
    const values = getValues('members');
    const updated = [...values.slice(0, idx), ...values.slice(idx + 1)];
    setValue('members', [...updated]);
  };

  return (
    <div className={styles.signUp}>
      <div className={styles.steps}>
        <p className={styles.step}>
          {tAuth('step')} {step + 1}/{signStagesDataTypes.length}
        </p>
        <h2 className={styles.title}>{tAuth(activeStage)}</h2>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {activeStage === ESignStages.EmailStage && (
          <EmailStage register={register} errors={errors} />
        )}
        {activeStage === ESignStages.PersonStage && (
          <UserStage register={register} control={control} errors={errors} />
        )}
        {activeStage === ESignStages.CompanyStage && (
          <CompanyStage register={register} errors={errors} control={control} />
        )}
        {activeStage === ESignStages.InviteStage && (
          <MembersStage
            members={members}
            onAdd={handleAddMember}
            onDelete={handleDelete}
            onChange={handleChange}
          />
        )}
        <div className={styles.actions}>
          {activeStage !== ESignStages.EmailStage && (
            <BtnSecondary onClick={onPrev}>
              <SvgHandler icon={EIconsSet.ArrowLeft} />
              <span>{tAuth('previous')}</span>
            </BtnSecondary>
          )}
          <div className={styles.btnWrapper}>
            {activeStage !== ESignStages.InviteStage && (
              <BtnPrimary disabled={isDisabled} onClick={onNext}>
                <span>{tAuth('next')}</span>
                <SvgHandler icon={EIconsSet.ArrowRight} />
              </BtnPrimary>
            )}
            {activeStage === ESignStages.InviteStage && (
              <BtnPrimary type="submit" disabled={isSubmitting}>
                <span>{tAuth('signUp')}</span>
              </BtnPrimary>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
