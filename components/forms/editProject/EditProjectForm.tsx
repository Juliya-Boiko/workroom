'use client';
import styles from './editProjectForm.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IProjectDetails, priorityDataTypes, EIconsSet } from '@/typings';
import { InputField, BtnPrimary, TextareaField, SelectDrop, PickerDate } from '@/components/ui';
import { SelectImage } from '../addProject/selectImage/SelectImage';
import { SvgHandler } from '@/components/SvgHandler';
import { useProjectsMutation } from '@/services';
import { addProjectSchema, AddProjectFormData, defineThumbSrc } from '@/utils';

interface Props {
  project: IProjectDetails;
}

export const EditProjectForm = ({ project }: Props) => {
  const [showThumbs, setShowThumbs] = useState(false);
  const { update } = useProjectsMutation();
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
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(addProjectSchema),
    mode: 'onChange',
  });

  const projectImage = watch('image');
  const imgSrc = defineThumbSrc(projectImage);

  const onSubmit = (values: AddProjectFormData) => {
    update({
      id: project._id,
      values,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <div className={styles.imgWrapper}>
          <Image src={imgSrc} alt={project.name} fill sizes="96px" />
          <button type="button" className={styles.btnPlus} onClick={() => setShowThumbs((v) => !v)}>
            <SvgHandler icon={EIconsSet.Plus} />
          </button>
        </div>
        <div className={showThumbs ? styles.visible : styles.hidden}>
          <Controller
            control={control}
            name="image"
            render={({ field }) => <SelectImage value={field.value} onChange={field.onChange} />}
          />
        </div>
      </div>

      <div className={`${styles.container} ${styles.content}`}>
        <InputField
          label="Project Name"
          name="name"
          register={register}
          placeholder="Project Name"
          errors={errors.name}
        />
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
        <div className={styles.btnWrapper}>
          <BtnPrimary type="submit">Save changes</BtnPrimary>
        </div>
      </div>
    </form>
  );
};
