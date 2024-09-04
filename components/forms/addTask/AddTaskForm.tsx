'use client';
import styles from '../common.module.scss';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useModalContext } from '@/components/providers/ModalProvider';
import { yupResolver } from '@hookform/resolvers/yup';
import { ETaskStatus, priorityDataTypes, IDynamicComponent } from '@/typings';
import { InputField, BtnPrimary, TextareaField, SelectDrop, PickerDate } from '@/components/ui';
import {
  useEmployees,
  getTomorrowDate,
  addTaskSchema,
  AddTaskFormData,
  createTask,
  QUERY_KEYS,
} from '@/utils';

export const AddTaskForm = ({ slug }: IDynamicComponent) => {
  const queryClient = useQueryClient();
  const { data: employees } = useEmployees({});
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

  const mutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      console.log('Task created');
      closeModal();
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TASKS] });
    },
  });

  const onSubmit = async (data: AddTaskFormData) => {
    const task = {
      ...data,
      status: ETaskStatus.TODO,
      assignee: data.assignee._id,
      projectId: slug,
      description: data.description || '',
    };
    mutation.mutate(task);
  };

  useEffect(() => {
    setValue('deadline', getTomorrowDate(startDate));
  }, [setValue, startDate]);

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
        <p className={styles.label}>Assignee</p>
        <Controller
          control={control}
          name="assignee"
          render={({ field }) => (
            <SelectDrop
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
            <PickerDate label="Start date" value={field.value} onChange={field.onChange} />
          )}
        />
        <Controller
          control={control}
          name="deadline"
          render={({ field }) => (
            <PickerDate label="Deadline" value={field.value} onChange={field.onChange} />
          )}
        />
      </div>
      <div className={styles.optionWrapper}>
        <p className={styles.label}>Priority</p>
        <Controller
          control={control}
          name="priority"
          render={({ field }) => (
            <SelectDrop options={priorityDataTypes} value={field.value} onChange={field.onChange} />
          )}
        />
      </div>
      <TextareaField
        label="Description"
        name="description"
        register={register}
        placeholder="Add some description of the project"
      />
      <div>
        <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting}>
          Save Task
        </BtnPrimary>
      </div>
    </form>
  );
};
