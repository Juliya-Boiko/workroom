'use client';
import moment from 'moment';
import commonStyles from '../common.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { useModalContext } from '@/components/providers/ModalProvider';
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
  Preloader,
} from '@/components/ui';
import { useEffect } from 'react';

const defaultValues = {
  name: '',
  category: ECategoryEvent.BIRTHDAY,
  priority: priorityDataTypes[0],
  date: new Date(),
  time: moment().format('HH:mm'),
  description: '',
};

export const AddEventForm = () => {
  const { closeModal } = useModalContext();
  const { create, isCreating } = useEventsMutation();
  const {
    control,
    register,
    watch,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(addEventSchema),
    mode: 'onChange',
  });

  const time = watch('time');

  useEffect(() => {
    const handleChange = () => {
      const values = getValues('date');
      const date = new Date(values);
      const [hours, minutes] = time.split(':');
      date.setHours(+hours);
      date.setMinutes(+minutes);
      setValue('date', date);
    };
    handleChange();
  }, [getValues, setValue, time]);

  const onSubmit = async (v: AddEventFormData) => {
    create(v);
    closeModal();
  };

  return (
    <>
      {isCreating ? (
        <div className={commonStyles.preloader}>
          <Preloader />
        </div>
      ) : (
        <form className={commonStyles.form} onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Event Name"
            name="name"
            register={register}
            placeholder="Event Name"
            errors={errors.name}
          />
          <div className={commonStyles.optionWrapper}>
            <p className={commonStyles.label}>Category</p>
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
          <div className={commonStyles.optionWrapper}>
            <p className={commonStyles.label}>Priority</p>
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
      )}
    </>
  );
};
