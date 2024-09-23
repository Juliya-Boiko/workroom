'use client';
import styles from './editTaskForm.module.scss';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addTaskSchema, AddTaskFormData } from '@/utils';
import { priorityDataTypes, ITask, EIconsSet } from '@/typings';
import {
  InputField,
  BtnPrimary,
  TextareaField,
  SelectDrop,
  PickerDate,
  Avatar,
  BtnIcon,
} from '@/components/ui';

interface Props {
  task: ITask;
}
export const EditTaskForm = ({ task }: Props) => {
  const [showUsers, setShowUsers] = useState(false);
  console.log(task);

  const defaultValues = {
    name: task.name,
    start: task.start,
    deadline: task.deadline,
    priority: task.priority,
    assignee: task.assignee,
    description: task.description,
  };

  const {
    control,
    register,
    // watch,
    // setValue,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(addTaskSchema),
    mode: 'onChange',
  });

  // const employeesOptions = employees
  //   ? employees.map(({ _id, name, avatar }) => ({ _id, name, avatar }))
  //   : [];

  const onSubmit = async (data: AddTaskFormData) => {
    console.log(data);
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
        <div className={styles.assignee}>
          <div className={styles.user}>
            <Avatar size="s" user={{ name: task.assignee.name, avatar: task.assignee.avatar }} />
            <p>{task.assignee.name}</p>
          </div>
          <BtnIcon
            title="Reassign"
            icon={EIconsSet.Pensil}
            onClick={() => setShowUsers((v) => !v)}
          />
        </div>
        {showUsers && <div>users list</div>}
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
        <div>status</div>
        <div>
          <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting}>
            Save Task
          </BtnPrimary>
        </div>
      </div>

      {/* <div>
      </div>
      <div>
        
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
      </div>
       */}
    </form>
  );
};
