'use client';
import moment from 'moment';
import { useForm, Controller } from 'react-hook-form';
import { useEventsMutation, AddEventFormData, addEventSchema } from '@/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { categoryEventDataTypes, ECategoryEvent, priorityDataTypes } from '@/typings';
import {
  InputField,
  SelectDrop,
  PickerDate,
  TextareaField,
  BtnPrimary,
  PickerTime,
} from '@/components/ui';

const defaultValues = {
  name: '',
  category: ECategoryEvent.BIRTHDAY,
  priority: priorityDataTypes[0],
  date: new Date(),
  time: moment().format('HH:mm'),
  description: '',
};

export const AddEventForm = () => {
  const { create, isCreating } = useEventsMutation();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(addEventSchema),
    mode: 'onChange',
  });

  const onSubmit = async (v: AddEventFormData) => create(v);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Event Name"
        name="name"
        register={register}
        placeholder="Event Name"
        errors={errors.name}
      />
      <div>
        <p>Category</p>
        <Controller
          control={control}
          name="category"
          render={({ field }) => (
            <SelectDrop
              options={categoryEventDataTypes}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <div>
        <p>Priority</p>
        <Controller
          control={control}
          name="priority"
          render={({ field }) => (
            <SelectDrop options={priorityDataTypes} value={field.value} onChange={field.onChange} />
          )}
        />
      </div>
      <Controller
        control={control}
        name="date"
        render={({ field }) => (
          <PickerDate label="Date" value={field.value} onChange={field.onChange} />
        )}
      />
      <Controller
        control={control}
        name="time"
        render={({ field }) => <PickerTime value={field.value} onChange={field.onChange} />}
      />
      <TextareaField
        label="Description"
        name="description"
        register={register}
        placeholder="Add some description of the event"
      />
      <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting || isCreating}>
        Save Event
      </BtnPrimary>
    </form>
  );
};
