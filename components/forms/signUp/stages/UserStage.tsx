/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import styles from '../signUp.module.scss';
import { useTranslations } from 'next-intl';
import { usingGoalsDataTypes } from '@/typings';
import { InputField, SelectDrop } from '@/components/ui';
import { Controller } from 'react-hook-form';

interface Props {
  register: any;
  control: any;
  errors?: any;
}

export const UserStage = ({ register, errors, control }: Props) => {
  const t = useTranslations('Forms');

  return (
    <div className={styles.stageWrapper}>
      <InputField
        label="name"
        name="name"
        register={register}
        placeholder="name"
        errors={errors.name}
      />
      <div className={styles.optionWrapper}>
        <Controller
          control={control}
          name="usingGoal"
          render={({ field }) => (
            <SelectDrop
              label={t('goal')}
              options={usingGoalsDataTypes}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
    </div>
  );
};
