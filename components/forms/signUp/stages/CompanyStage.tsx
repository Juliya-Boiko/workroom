/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import styles from '../signUp.module.scss';
import { useTranslations } from 'next-intl';
import { businessDirectionDataTypes, companySizeDataTypes } from '@/typings';
import { Controller } from 'react-hook-form';
import { RadioTab, InputField, SelectDrop } from '@/components/ui';

interface Props {
  register: any;
  errors?: any;
  control: any;
}

export const CompanyStage = ({ register, errors, control }: Props) => {
  const t = useTranslations('Forms');

  return (
    <div className={styles.stageWrapper}>
      <InputField
        label={t('company')}
        name="companyName"
        register={register}
        placeholder="Company’s Name"
        errors={errors.companyName}
      />
      <div className={styles.optionWrapper}>
        <Controller
          control={control}
          name="direction"
          render={({ field }) => (
            <SelectDrop
              label={t('direction')}
              options={businessDirectionDataTypes}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <div className={styles.optionWrapper}>
        <p className={styles.label}>{t('people')}</p>
        <Controller
          control={control}
          name="companySize"
          render={({ field }) => (
            <RadioTab
              options={companySizeDataTypes}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
    </div>
  );
};
