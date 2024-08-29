'use client';
import styles from './addProject.module.scss';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputField } from '@/components/ui/input/InputField';
import { addProjectSchema, AddProjectFormData } from '@/utils/schemas';
import { BtnPrimary } from '@/components/ui/buttons/primary/BtnPrimary';
import { TextareaField } from '@/components/ui/textarea/TextareField';
import { SelectDrop } from '@/components/ui/select/SelectDrop';
import { priorityDataTypes } from '@/enums';
import { Picker } from '../../ui/picker/Picker';

const nextDay = (value: Date) => {
  const tomorrow = value;
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
};

const defaultValues = {
  name: '',
  start: new Date(),
  deadline: nextDay(new Date()),
  priority: priorityDataTypes[0],
  description: '',
};

export const AddProjectForm = () => {
  const {
    control,
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(addProjectSchema),
    mode: 'onChange',
  });

  const startDate = watch('start');

  const onSubmit = (data: AddProjectFormData) => {
    console.log({ data, errors });
  };

  useEffect(() => {
    setValue('deadline', nextDay(startDate));
  }, [setValue, startDate]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Project Name"
        name="name"
        register={register}
        placeholder="Project Name"
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
