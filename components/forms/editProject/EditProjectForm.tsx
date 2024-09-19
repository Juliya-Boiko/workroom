'use client';
import styles from './editProjectForm.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addProjectSchema, AddProjectFormData, IMAGE_THUMB_STARTS } from '@/utils';
import { IProjectDetails, priorityDataTypes } from '@/typings';
import { InputField, BtnPrimary, TextareaField, SelectDrop, PickerDate } from '@/components/ui';
import { SelectImage } from '../addProject/selectImage/SelectImage';
interface Props {
  project: IProjectDetails;
}

export const EditProjectForm = ({ project }: Props) => {
  console.log(project);
  const defaultValues = {
    name: project.name,
    start: new Date(project.start),
    deadline: new Date(project.deadline),
    priority: project.priority,
    description: project.description,
    image: project.image,
  };
  const {
    control,
    register,
    // watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(addProjectSchema),
    mode: 'onChange',
  });

  const onSubmit = (values: AddProjectFormData) => {
    console.log(values);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
      </div>
      <div>
        <Controller
          control={control}
          name="image"
          render={({ field }) => <SelectImage value={field.value} onChange={field.onChange} />}
        />
      </div>
      <div>
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
        <TextareaField
          label="Description"
          name="description"
          register={register}
          placeholder="Add some description of the project"
        />
      </div>
      <div>
        <BtnPrimary type="submit">Save Project</BtnPrimary>
      </div>
    </form>
  );
};
