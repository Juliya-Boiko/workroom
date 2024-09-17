'use client';
import styles from './settingsForm.module.scss';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useCompany, useCompanyMutation } from '@/services';
import { yupResolver } from '@hookform/resolvers/yup';
import { companySchema, CompanyFormData } from '@/utils';
import { businessDirectionDataTypes, companySizeDataTypes } from '@/typings';
import { RadioTab, InputField, SelectDrop, BtnPrimary } from '@/components/ui';

export const CompanyForm = () => {
  const { data: company } = useCompany();
  const { update, isPending } = useCompanyMutation();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(companySchema),
    mode: 'onChange',
  });

  useEffect(() => {
    if (company) {
      reset({
        name: company.name,
        size: company.size,
        direction: company.direction,
      });
    }
  }, [company, reset]);

  const onSubmit = async (data: CompanyFormData) => {
    update(data);
  };

  const isDisabled = !isDirty || !isValid || isSubmitting || isPending;

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Company’s Name"
        name="name"
        register={register}
        placeholder="Company’s Name"
        errors={errors.name}
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
          name="size"
          render={({ field }) => (
            <RadioTab
              options={companySizeDataTypes}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <div className={styles.btnWrapper}>
        <BtnPrimary type="submit" disabled={isDisabled}>
          Confirm
        </BtnPrimary>
      </div>
    </form>
  );
};