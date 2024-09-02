'use client';
import styles from '../common.module.scss';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import { getTomorrowDate } from '@/helpers';
import { createProject } from '@/actions';
import { addProjectSchema, AddProjectFormData } from '@/utils/schemas';
import { priorityDataTypes } from '@/enums';
import { InputField } from '@/components/ui/input/InputField';
import { BtnPrimary } from '@/components/ui/buttons/primary/BtnPrimary';
import { TextareaField } from '@/components/ui/textarea/TextareField';
import { SelectDrop } from '@/components/ui/select/SelectDrop';
import { Picker } from '../../ui/picker/Picker';
import { ROUTES } from '@/constants';
import { Preloader } from '@/components/ui/preloader/Preloader';
import { QUERY_KEYS } from '@/constants';
import { useModalContext } from '@/components/providers/ModalProvider';

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
