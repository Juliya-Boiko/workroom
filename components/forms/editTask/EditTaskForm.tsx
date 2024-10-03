'use client';
import styles from './editTaskForm.module.scss';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { editTaskSchema, EditTaskFormData } from '@/utils';
import { priorityDataTypes, ITask } from '@/typings';
import { useEmployees, useTasksMutation, useAttachments } from '@/services';
import { EditAttachments } from './editAttachments/EditAttachments';
import { InputField, BtnPrimary, TextareaField, SelectDrop, PickerDate } from '@/components/ui';

interface Props {
  task: ITask;
}

export const EditTaskForm = ({ task }: Props) => {
  const { data: employees } = useEmployees();
  const { data: attachments } = useAttachments(task._id);

  const { update } = useTasksMutation();

  const defaultValues = {
    name: task.name,
    start: task.start,
    deadline: task.deadline,
    priority: task.priority,
    assignee: task.assignee,
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
    ? employees.map(({ _id, name, avatar }) => ({ _id, name, avatar }))
    : [];

  const onSubmit = async (data: EditTaskFormData) => {
    const values = {
      _id: task._id,
      update: {
        ...data,
        assignee: data.assignee._id,
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
          name="assignee"
          render={({ field }) => (
            <SelectDrop
              label="Assignee"
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
              label="Priority"
              options={priorityDataTypes}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <div className={styles.container}>
        <InputField
          label="Task Name"
          name="name"
          register={register}
          placeholder="Task Name"
          errors={errors.name}
        />
        <TextareaField
          label="Description"
          name="description"
          register={register}
          placeholder="Add some description of the task"
        />
        <Controller
          control={control}
          name="attachments"
          render={({ field }) => <EditAttachments value={field.value} onChange={field.onChange} />}
        />
        <div className={styles.btnWrapper}>
          <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting}>
            Save Task
          </BtnPrimary>
        </div>
      </div>
    </form>
  );
};
