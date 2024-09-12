'use client';
import styles from '../common.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { useModalContext } from '@/components/providers/ModalProvider';
import { useRouter } from 'next/navigation';
import { useProjectsMutation } from '@/services';
import { yupResolver } from '@hookform/resolvers/yup';
import { priorityDataTypes } from '@/typings';
import {
  getTomorrowDate,
  addProjectSchema,
  AddProjectFormData,
  ROUTES,
  projectThumbsDataTypes,
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
  image: projectThumbsDataTypes[0],
};

export const AddProjectForm = () => {
  const router = useRouter();
  const { closeModal } = useModalContext();
  const { create, isCreating } = useProjectsMutation();
  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(addProjectSchema),
    mode: 'onChange',
  });

  const startDate = watch('start');

  const onSubmit = async (values: AddProjectFormData) => {
    create(values, {
      onSuccess: (id) => {
        console.log(id);
        closeModal();
        router.push(`${ROUTES.project}/${id}`);
      },
    });
  };

  return (
    <>
      {isCreating ? (
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
                <PickerDate
                  label="Start date"
                  value={field.value}
                  onChange={field.onChange}
                  minDate={field.value}
                />
              )}
            />
            <Controller
              control={control}
              name="deadline"
              render={({ field }) => (
                <PickerDate
                  label="Deadline"
                  minDate={startDate}
                  value={field.value}
                  onChange={field.onChange}
                />
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
