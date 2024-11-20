'use client';
import styles from './editTaskForm.module.scss';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { yupResolver } from '@hookform/resolvers/yup';
import { editTaskSchema, EditTaskFormData } from '@/utils';
import { priorityDataTypes, ITask } from '@/typings';
import { useEmployees, useTasksMutation, useAttachments, useProject } from '@/services';
import { EditAttachments } from './editAttachments/EditAttachments';
import { InputField, BtnPrimary, TextareaField, SelectDrop, PickerDate } from '@/components/ui';

interface Props {
  task: ITask;
}

export const EditTaskForm = ({ task }: Props) => {
  const { data: employees } = useEmployees();
  const { data: attachments } = useAttachments(task._id);
  const { data: project } = useProject(task.projectId);
  const { update } = useTasksMutation();
  const t = useTranslations('Forms');

  const defaultValues = {
    name: task.name,
    start: task.start,
    deadline: task.deadline,
    priority: task.priority,
    assignee: task.assignee || null,
    description: task.description,
    attachments: [],
  };

  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(editTaskSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    if (attachments) {
      reset({ attachments });
    }
  }, [attachments, reset]);

  const employeesOptions = employees
    ? employees.map(({ _id, name, avatar }) => ({
        _id,
        name,
        avatar: avatar ?? null,
      }))
    : [];

  const onSubmit = async (data: EditTaskFormData) => {
    const values = {
      _id: task._id,
      update: {
        ...data,
        assignee: data.assignee?._id || null,
      },
    };
    update(values);
  };

  return (
    <form className={styles.editTask} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <Controller
          control={control}
          name="start"
          render={({ field }) => (
            <PickerDate
              label={t('start')}
              value={field.value}
              minDate={project?.start}
              maxDate={project?.deadline}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="deadline"
          render={({ field }) => (
            <PickerDate
              label={t('deadline')}
              value={field.value}
              minDate={project?.start}
              maxDate={project?.deadline}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="assignee"
          render={({ field }) => (
            <SelectDrop
              clearable
              label={t('assignee')}
              options={employeesOptions || []}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="priority"
          render={({ field }) => (
            <SelectDrop
              label={t('priority')}
              options={priorityDataTypes}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <div className={styles.container}>
        <InputField
          label="taskName"
          name="name"
          register={register}
          placeholder="taskName"
          errors={errors.name}
        />
        <TextareaField
          label={t('description')}
          name="description"
          register={register}
          placeholder={t('taskDescrPlaceholder')}
        />
        <Controller
          control={control}
          name="attachments"
          render={({ field }) => <EditAttachments value={field.value} onChange={field.onChange} />}
        />
        <div className={styles.btnWrapper}>
          <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting}>
            {t('saveTask')}
          </BtnPrimary>
        </div>
      </div>
    </form>
  );
};
