/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from '../signUp.module.scss';
import { Controller } from 'react-hook-form';
import { RadioTab, InputField, SelectDrop } from '@/components/ui';
import { businessDirectionDataTypes, companySizeDataTypes } from '@/enums';

interface Props {
  register: any;
  errors?: any;
  control: any;
}

export const CompanyStage = ({ register, errors, control }: Props) => (
  <div className={styles.stageWrapper}>
    <InputField
      label="Your Company’s Name"
      name="companyName"
      register={register}
      placeholder="Company’s Name"
      errors={errors.companyName}
    />
    <div className={styles.optionWrapper}>
      <p className={styles.label}>Business Direction</p>
      <Controller
        control={control}
        name="direction"
        render={({ field }) => (
          <SelectDrop
            options={businessDirectionDataTypes}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
    </div>
    <div className={styles.optionWrapper}>
      <p className={styles.label}>How many people in your team?</p>
      <Controller
        control={control}
        name="companySize"
        render={({ field }) => (
          <RadioTab options={companySizeDataTypes} value={field.value} onChange={field.onChange} />
        )}
      />
    </div>
  </div>
);
