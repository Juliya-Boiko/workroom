/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from '../signUp.module.scss';
import { usingGoalsDataTypes } from '@/typings';
import { InputField, SelectDrop } from '@/components/ui';
import { Controller } from 'react-hook-form';

interface Props {
  register: any;
  control: any;
  errors?: any;
}

export const UserStage = ({ register, errors, control }: Props) => (
  <div className={styles.stageWrapper}>
    <InputField
      label="Name"
      name="name"
      register={register}
      placeholder="John Doe"
      errors={errors.name}
    />
    <div className={styles.optionWrapper}>
      <p className={styles.label}>Why will you use the service?</p>
      <Controller
        control={control}
        name="usingGoal"
        render={({ field }) => (
          <SelectDrop options={usingGoalsDataTypes} value={field.value} onChange={field.onChange} />
        )}
      />
    </div>
  </div>
);
