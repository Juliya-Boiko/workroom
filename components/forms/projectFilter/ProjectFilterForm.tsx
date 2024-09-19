'use client';
import styles from './projectFilterForm.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { filterProjectSchema, FilterProjectFormData } from '@/utils';
import { BtnIcon, BtnPrimary, SelectDrop, PickerDate } from '@/components/ui';
import { EIconsSet, priorityDataTypes, IFilters } from '@/typings';

interface Props {
  filters: IFilters | null;
  setFilters: (v: IFilters) => void;
}

export const ProjectFilterForm = ({ filters, setFilters }: Props) => {
  const defaultValues = {
    priority: filters?.priority ?? null,
    start: filters?.start ?? null,
    deadline: filters?.deadline ?? null,
  };

  const { control, watch, setValue, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(filterProjectSchema),
  });

  const priority = watch('priority');
  const start = watch('start');
  const deadline = watch('deadline');

  const onSubmit = async (data: FilterProjectFormData) => {
    setFilters(data);
  };

  const count = () => {
    let count = 0;
    if (priority) count++;
    if (start) count++;
    if (deadline) count++;
    return `Save filters (${count})`;
  };

  return (
    <form className={styles.projectFilterForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <Controller
          control={control}
          name="priority"
          render={({ field }) => (
            <SelectDrop
              label="Priority"
              options={priorityDataTypes}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        {priority && (
          <BtnIcon
            title="Clear"
            icon={EIconsSet.Cross}
            onClick={() => setValue('priority', null)}
          />
        )}
      </div>
      <div className={styles.container}>
        <Controller
          control={control}
          name="start"
          render={({ field }) => (
            <PickerDate label="Start after" value={field.value} onChange={field.onChange} />
          )}
        />
        {start && (
          <BtnIcon title="Clear" icon={EIconsSet.Cross} onClick={() => setValue('start', null)} />
        )}
      </div>
      <div className={styles.container}>
        <Controller
          control={control}
          name="deadline"
          render={({ field }) => (
            <PickerDate label="Deadline before" value={field.value} onChange={field.onChange} />
          )}
        />
        {deadline && (
          <BtnIcon
            title="Clear"
            icon={EIconsSet.Cross}
            onClick={() => setValue('deadline', null)}
          />
        )}
      </div>
      <div className={styles.wrapper}>
        <BtnPrimary type="submit">{count()}</BtnPrimary>
      </div>
    </form>
  );
};
