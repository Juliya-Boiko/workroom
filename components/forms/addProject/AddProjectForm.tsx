'use client';
import styles from '../common.module.scss';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useModalContext } from '@/components/providers/ModalProvider';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import { priorityDataTypes } from '@/typings';
import {
  getTomorrowDate,
  createProject,
  addProjectSchema,
  AddProjectFormData,
  ROUTES,
  QUERY_KEYS,
} from '@/utils';
import {
  InputField,
  BtnPrimary,
  TextareaField,
  SelectDrop,
  PickerDate,
  Preloader,
} from '@/components/ui';
import { SelectImage } from './selectImage/SelectImage';

const defaultValues = {
  name: '',
  start: new Date(),
  deadline: getTomorrowDate(new Date()),
  priority: priorityDataTypes[0],
  description: '',
};

export const AddProjectForm = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { closeModal } = useModalContext();

  const {
    control,
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(addProjectSchema),
    mode: 'onChange',
  });

  const startDate = watch('start');

  const { mutate, isPending } = useMutation({
    mutationFn: createProject,
    onSuccess: (id: string) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PROJECTS] });
      closeModal();
      router.push(`${ROUTES.project}/${id}`);
    },
  });

  const onSubmit = async (values: AddProjectFormData) => {
    mutate(values);
  };

  useEffect(() => {
    setValue('deadline', getTomorrowDate(startDate));
  }, [setValue, startDate]);

  return (
    <>
      {isPending ? (
        <div className={styles.preloader}>
          <Preloader />
        </div>
      ) : (
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
                <SelectDrop
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
            placeholder="Add some description of the project"
          />
          <Controller
            control={control}
            name="image"
            render={({ field }) => <SelectImage value={field.value} onChange={field.onChange} />}
          />
          <div>
            <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting}>
              Save Project
            </BtnPrimary>
          </div>
        </form>
      )}
    </>
  );
};
