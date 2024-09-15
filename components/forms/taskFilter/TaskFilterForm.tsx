'use client';
import styles from './taskFilterForm.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { filterTaskSchema, FilterTaskFormData } from '@/utils';
import {
  EIconsSet,
  priorityDataTypes,
  taskStatusDataTypes,
  IFilters,
  ISelectAssignee,
} from '@/typings';
import { BtnIcon, BtnPrimary, SelectDrop, PickerPeriod } from '@/components/ui';
import { SelectAssignees } from './selectAssignees/SelectAssignees';

interface Props {
  filters: IFilters | null;
  setFilters: (v: IFilters) => void;
}

export const TaskFilterForm = ({ filters, setFilters }: Props) => {
  const defaultValues = {
    priority: filters?.priority ?? null,
    status: filters?.status ?? null,
    assignee: filters?.assignee ?? ([] as ISelectAssignee[]),
    start: filters?.start ?? null,
    end: filters?.end ?? null,
  };

  const { control, watch, setValue, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(filterTaskSchema),
  });

  const priority = watch('priority');
  const status = watch('status');
  const assignee = watch('assignee');
  const start = watch('start');
  const end = watch('end');

  const count = () => {
    let count = 0;
    if (priority) count++;
    if (status) count++;
    if (assignee?.length) count++;
    if (start) count++;
    if (end) count++;
    return `Save filters (${count})`;
  };

  const handleAssignee = (data: ISelectAssignee[]) => {
    setValue('assignee', data);
  };

  const onSubmit = async (data: FilterTaskFormData) => {
    setFilters(data);
  };

  return (
    <form className={styles.taskFilterForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <p className={styles.label}>Period</p>
        <PickerPeriod
          onStart={(v: Date | null) => setValue('start', v)}
          onEnd={(v: Date | null) => setValue('end', v)}
        />
      </div>
      <div className={styles.container}>
        <p className={styles.label}>Status</p>
        <div className={styles.block}>
          <Controller
            control={control}
            name="status"
            render={({ field }) => (
              <SelectDrop
                options={taskStatusDataTypes}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          {status && (
            <BtnIcon
              title="Clear"
              icon={EIconsSet.Cross}
              onClick={() => setValue('status', null)}
            />
          )}
        </div>
      </div>
      <div className={styles.container}>
        <p className={styles.label}>Priority</p>
        <div className={styles.block}>
          <Controller
            control={control}
            name="priority"
            render={({ field }) => (
              <SelectDrop
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
      </div>
      <div className={styles.container}>
        <p className={styles.label}>Assignees</p>
        <SelectAssignees onChange={handleAssignee} />
      </div>
      <div className={styles.wrapper}>
        <BtnPrimary type="submit">{count()}</BtnPrimary>
      </div>
    </form>
  );
};
