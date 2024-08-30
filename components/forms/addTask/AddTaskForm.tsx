/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import styles from '../common.module.scss';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import { axiosInstance } from '@/utils/axios';
import { InputField } from '@/components/ui/input/InputField';
import { addTaskSchema, AddTaskFormData } from '@/utils/schemas';
import { BtnPrimary } from '@/components/ui/buttons/primary/BtnPrimary';
import { TextareaField } from '@/components/ui/textarea/TextareField';
import { SelectDrop } from '@/components/ui/select/SelectDrop';
import { priorityDataTypes } from '@/enums';
import { Picker } from '../../ui/picker/Picker';
import { getEmployees } from '@/actions';

const nextDay = (value: Date) => {
  const tomorrow = value;
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
};

export const AddTaskForm = () => {
  const defaultValues = {
    name: '',
    start: new Date(),
    deadline: nextDay(new Date()),
    priority: priorityDataTypes[0],
    assignee: [],
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

  const onSubmit = async (data: AddTaskFormData) => {
    console.log(data);
    // try {
    //   const response = await axiosInstance.post('/project/', data);
    //   console.log(response);
    //   if (response.status === 200) {
    //     router.push(`${ROUTES.project}/${response.data}`);
    //   }
    // } catch (error: any) {
    //   console.log(error);
    // }
  };

  useEffect(() => {
    setValue('deadline', nextDay(startDate));
  }, [setValue, startDate]);

  const check = async () => {
    const data = await getEmployees();
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <button type="button" onClick={check}>
        Check
      </button>
      <InputField
        label="Task Name"
        name="name"
        register={register}
        placeholder="Task Name"
        errors={errors.name}
      />
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
        <BtnPrimary type="submit">Save Project</BtnPrimary>
      </div>
    </form>
  );
};
