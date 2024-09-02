'use client';
import styles from '../common.module.scss';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useEmployees } from '@/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getTomorrowDate } from '@/helpers';
import { yupResolver } from '@hookform/resolvers/yup';
import { addTaskSchema, AddTaskFormData } from '@/schemas';
import { InputField } from '@/components/ui/input/InputField';
import { BtnPrimary } from '@/components/ui/buttons/primary/BtnPrimary';
import { TextareaField } from '@/components/ui/textarea/TextareField';
import { SelectDrop } from '@/components/ui/select/SelectDrop';
import { ETaskStatus, priorityDataTypes } from '@/enums';
import { Picker } from '../../ui/picker/Picker';
import { IDynamicComponent } from '@/interfaces';
import { createTask } from '@/actions';

import { useModalContext } from '@/components/providers/ModalProvider';
import { QUERY_KEYS } from '@/constants';

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
            <Picker label="Start date" value={field.value} onChange={field.onChange} />
          )}
        />
        <Controller
          control={control}
          name="deadline"
          render={({ field }) => (
            <Picker label="Deadline" value={field.value} onChange={field.onChange} />
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
