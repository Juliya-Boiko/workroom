/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './signUp.module.scss';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema, SignUpFormData } from '@/utils/schemas';
import { EmailStage, CompanyStage, UserStage, MembersStage } from './stages';
import { BtnPrimary } from '@/components/ui/buttons/primary/BtnPrimary';
import { BtnSecondary } from '@/components/ui/buttons/secondary/BtnSecondary';
import { SvgHandler } from '@/components/SvgHandler';
import { axiosInstance } from '@/utils/axios';
import {
  usingGoalsDataTypes,
  userPositionsDataTypes,
  ESignStages,
  signStagesDataTypes,
  businessDirectionDataTypes,
  companySizeDataTypes,
  EIconsSet,
} from '@/enums';
import { ROUTES } from '@/constants';

interface Props {
  activeStage: ESignStages;
  onNext: () => void;
  onPrev: () => void;
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

export const SignUpForm = ({ activeStage, onNext, onPrev }: Props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const router = useRouter();

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
    if (activeStage === ESignStages.EnterYourEmail) {
      return watch(['email', 'password', 'confirmPassword']);
    }
    if (activeStage === ESignStages.TellAboutYourself) {
      return watch(['name']);
    }
    if (activeStage === ESignStages.TellAboutYourCompany) {
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

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const response = await axiosInstance.post('/auth/register', data);
      console.log('axios response', response);
      if (response.status === 201) {
        router.push(ROUTES.dashboard);
      }
    } catch (error: any) {
      toast.error(error.response.data.error);
    }
  };

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

  return (
    <div className={styles.signUp}>
      <div className={styles.steps}>
        <p className={styles.step}>
          Step {step + 1}/{signStagesDataTypes.length}
        </p>
        <h2 className={styles.title}>{activeStage}</h2>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {activeStage === ESignStages.EnterYourEmail && (
          <EmailStage register={register} errors={errors} />
        )}
        {activeStage === ESignStages.TellAboutYourself && (
          <UserStage register={register} control={control} errors={errors} />
        )}
        {activeStage === ESignStages.TellAboutYourCompany && (
          <CompanyStage register={register} errors={errors} control={control} />
        )}
        {activeStage === ESignStages.InviteTeamMembers && (
          <MembersStage members={members} onAdd={handleAddMember} onChange={handleChange} />
        )}
        <div className={styles.actions}>
          {activeStage !== ESignStages.EnterYourEmail && (
            <BtnSecondary onClick={onPrev}>
              <SvgHandler icon={EIconsSet.ArrowLeft} />
              <span>Previous</span>
            </BtnSecondary>
          )}
          <div className={styles.btnWrapper}>
            {activeStage !== ESignStages.InviteTeamMembers && (
              <BtnPrimary disabled={isDisabled} onClick={onNext}>
                <span>Next Step</span>
                <SvgHandler icon={EIconsSet.ArrowRight} />
              </BtnPrimary>
            )}
            {activeStage === ESignStages.InviteTeamMembers && (
              <BtnPrimary type="submit" disabled={isSubmitting}>
                <span>Sign Up</span>
              </BtnPrimary>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
