'use client';
import styles from './taskFilterForm.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { filterTaskSchema, FilterTaskFormData } from '@/utils';
import { priorityDataTypes, taskStatusDataTypes } from '@/typings';
import { BtnPrimary, SelectDrop } from '@/components/ui';
import { SelectAssignees } from './selectAssignees/SelectAssignees';

interface ISelectAssignee {
  _id: string;
  name: string;
  avatar: string | null;
}

export const TaskFilterForm = () => {
  const defaultValues = {
    priority: null,
    status: null,
    assignee: [] as ISelectAssignee[],
  };

  const {
    control,
    // register,
    watch,
    // getValues,
    setValue,
    handleSubmit,
    // formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(filterTaskSchema),
  });

  const onSubmit = async (data: FilterTaskFormData) => {
    console.log(data);
  };

  const priority = watch('priority');
  const status = watch('status');
  const assignee = watch('assignee');

  const count = () => {
    let count = 0;
    if (priority) count++;
    if (status) count++;
    if (assignee?.length) count++;
    return `Save filters (${count})`;
  };

  const handleAssignee = (data: ISelectAssignee[]) => {
    setValue('assignee', data);
  };

  return (
    <form className={styles.taskFilterForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <p className={styles.label}>Status</p>
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
      </div>
      <div className={styles.container}>
        <p className={styles.label}>Priority</p>
        <Controller
          control={control}
          name="priority"
          render={({ field }) => (
            <SelectDrop options={priorityDataTypes} value={field.value} onChange={field.onChange} />
          )}
        />
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
