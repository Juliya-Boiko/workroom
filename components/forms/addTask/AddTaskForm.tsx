'use client';
import styles from '../common.module.scss';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useForm, Controller } from 'react-hook-form';
import { useModalContext } from '@/components/providers/ModalProvider';
import { useEmployees, useTasksMutation } from '@/services';
import { yupResolver } from '@hookform/resolvers/yup';
import { addTaskSchema, AddTaskFormData } from '@/utils';
import { ETaskStatus, priorityDataTypes, IDynamicComponent } from '@/typings';
import { TaskAttachments } from './attachments/TaskAttachments';
import { InputField, BtnPrimary, TextareaField, SelectDrop, PickerDate } from '@/components/ui';

export interface Props extends IDynamicComponent {
  start?: string;
  deadline?: string;
}

export const AddTaskForm = ({ slug, start, deadline }: Props) => {
  const { create, isCreating } = useTasksMutation();
  const { data: employees } = useEmployees();
  const { closeModal } = useModalContext();
  const t = useTranslations('Forms');

  const employeesOptions = employees
    ? employees.map(({ _id, name, avatar }) => ({ _id, name, avatar }))
    : [];

  const defaultValues = {
    name: '',
    start: undefined,
    deadline: undefined,
    priority: priorityDataTypes[0],
    assignee: null,
    description: '',
    attachments: [],
  };

  const {
    control,
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm<AddTaskFormData>({
    defaultValues,
    resolver: yupResolver(addTaskSchema),
    mode: 'onChange',
  });

  const startDate = watch('start');

  const onSubmit = async (data: AddTaskFormData) => {
    const task = {
      ...data,
      status: ETaskStatus.TODO,
      assignee: data.assignee?._id,
      projectId: slug,
      description: data.description || '',
    };
    create(task);
    closeModal();
  };

  useEffect(() => {
    setValue('deadline', startDate);
  }, [setValue, startDate]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="taskName"
        name="name"
        register={register}
        placeholder="taskName"
        errors={errors.name}
      />
      <div className={styles.pickers}>
        <Controller
          control={control}
          name="start"
          render={({ field }) => (
            <PickerDate
              label={t('start')}
              minDate={start}
              maxDate={deadline}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="deadline"
          render={({ field }) => (
            <PickerDate
              label={t('deadline')}
              minDate={start}
              maxDate={deadline}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <div className={styles.optionWrapper}>
        <Controller
          control={control}
          name="priority"
          render={({ field }) => (
            <SelectDrop
              label={t('priority')}
              options={priorityDataTypes}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <div className={styles.optionWrapper}>
        <Controller
          control={control}
          name="assignee"
          render={({ field }) => (
            <SelectDrop
              clearable
              label={t('assignee')}
              options={employeesOptions || []}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <TextareaField
        label={t('description')}
        name="description"
        register={register}
        placeholder="Add some description of the task"
      />
      <Controller
        control={control}
        name="attachments"
        render={({ field }) => (
          <TaskAttachments label={t('attachments')} value={field.value} onChange={field.onChange} />
        )}
      />
      <div>
        <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting || isCreating}>
          {t('saveTask')}
        </BtnPrimary>
      </div>
    </form>
  );
};
