'use client';
import styles from './addLevelForm.module.scss';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { levelEmployeeDataTypes, EIconsSet, ELevelEmployee } from '@/typings';
import { useEmployeeMutation, addLevelSchema, AddLevelFormData } from '@/utils';
import { SvgHandler } from '@/components/SvgHandler';
import { BtnPrimary, SelectDrop } from '@/components/ui';
import { LoaderSkeleton } from '@/components/LoaderSkeleton';

interface Props {
  id?: string;
  loading: boolean;
  level: ELevelEmployee | null | undefined;
}

export const AddLevelForm = ({ id, level, loading }: Props) => {
  const [showForm, setShowForm] = useState(false);
  const { updateLevel, isUpdatingLevel } = useEmployeeMutation();
  const { handleSubmit, control } = useForm({
    defaultValues: { level: level || levelEmployeeDataTypes[0] },
    resolver: yupResolver(addLevelSchema),
    mode: 'onChange',
  });
  const showLoader = loading || isUpdatingLevel;

  const onSubmit = async (data: AddLevelFormData) => {
    if (id) {
      updateLevel({ level: data.level, id });
      setShowForm(false);
    }
  };

  return (
    <>
      {showLoader && (
        <div className={styles.loader}>
          <LoaderSkeleton height={48} />
        </div>
      )}
      {!showLoader && showForm && (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="level"
            render={({ field }) => (
              <SelectDrop
                options={levelEmployeeDataTypes}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <BtnPrimary type="submit" disabled={showLoader}>
            <SvgHandler icon={EIconsSet.Picker} />
          </BtnPrimary>
        </form>
      )}
      {!showLoader && !showForm && (
        <div>
          {level ? (
            <div className={styles.badgeWrapper}>
              <div className={styles.containter}>{level}</div>
              <button
                type="button"
                title="Change level"
                className={styles.btnPick}
                onClick={() => setShowForm(true)}
              >
                <SvgHandler icon={EIconsSet.Picker} />
              </button>
            </div>
          ) : (
            <BtnPrimary disabled={loading} onClick={() => setShowForm(true)}>
              Add Level
            </BtnPrimary>
          )}
        </div>
      )}
    </>
  );
};
