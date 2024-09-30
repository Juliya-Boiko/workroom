'use client';
import styles from '../common.module.scss';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useModalContext } from '@/components/providers/ModalProvider';
import { useEmployees, useTasksMutation } from '@/services';
import { yupResolver } from '@hookform/resolvers/yup';
import { getTomorrowDate, addTaskSchema, AddTaskFormData } from '@/utils';
import { ETaskStatus, priorityDataTypes, IDynamicComponent, IAttachments } from '@/typings';
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

  const employeesOptions = employees
    ? employees.map(({ _id, name, avatar }) => ({ _id, name, avatar }))
    : [];

  const defaultValues = {
    name: '',
    start: new Date(),
    deadline: getTomorrowDate(new Date()),
    priority: priorityDataTypes[0],
    assignee: {
      _id: '',
      name: '',
      avatar: null,
    },
    description: '',
    attachments: {
      links: [],
      files: [],
    },
  };

  const {
    control,
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(addTaskSchema),
    mode: 'onChange',
  });

  const startDate = watch('start');

  const onSubmit = async (data: AddTaskFormData) => {
    const task = {
      ...data,
      status: ETaskStatus.TODO,
      assignee: data.assignee._id,
      projectId: slug,
      description: data.description || '',
    };
    create(task);
    closeModal();
  };

  useEffect(() => {
    setValue('deadline', startDate);
  }, [setValue, startDate]);

  const handleAttachments = (v: IAttachments) => {
    setValue('attachments', v);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Task Name"
        name="name"
        register={register}
        placeholder="Task Name"
        errors={errors.name}
      />
      <div className={styles.optionWrapper}>
        <Controller
          control={control}
          name="assignee"
          render={({ field }) => (
            <SelectDrop
              label="Assignee"
              options={employeesOptions || []}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <div className={styles.pickers}>
        <Controller
          control={control}
          name="start"
          render={({ field }) => (
            <PickerDate
              label="Start date"
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
              label="Deadline"
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
              label="Priority"
              options={priorityDataTypes}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <TextareaField
        label="Description"
        name="description"
        register={register}
        placeholder="Add some description of the task"
      />
      <TaskAttachments onUpdate={handleAttachments} />
      <div>
        <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting || isCreating}>
          Save Task
        </BtnPrimary>
      </div>
    </form>
  );
};
