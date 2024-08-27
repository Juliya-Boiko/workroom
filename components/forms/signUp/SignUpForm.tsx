import styles from './signUp.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema, SignUpFormData } from '@/utils/schemas';
import { EmailStage, CompanyStage, UserStage, MembersStage } from './stages';
import { BtnPrimary } from '@/components/ui/buttons/primary/BtnPrimary';
import { BtnSecondary } from '@/components/ui/buttons/secondary/BtnSecondary';
import {
  // EIconsSet,
  usingGoalsDataTypes,
  userPositionsDataTypes,
  ESignStages,
  signStagesDataTypes,
  businessDirectionDataTypes,
  companySizeDataTypes,
  EIconsSet,
} from '@/enums';
import { SvgHandler } from '@/components/SvgHandler';

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

  const onSubmit = async (data: SignUpFormData) => {
    console.log(data);
    // try {
    //   const resp = await axiosInstance.post('/users/signup', data);
    //   if (resp.status === 201) {
    //     router.push("/");
    //   }
    // } catch (error: any) {
    //   console.log("Signup failed", error.response.data.error);
    // }
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
              <BtnPrimary onClick={onNext}>
                <span>Next Step</span>
                <SvgHandler icon={EIconsSet.ArrowRight} />
              </BtnPrimary>
            )}
            {activeStage === ESignStages.InviteTeamMembers && (
              <BtnPrimary type="submit" disabled={isSubmitting}>
                <span>Sign In</span>
              </BtnPrimary>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
