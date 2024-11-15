'use client';
import moment from 'moment';
import commonStyles from '../common.module.scss';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useEventsMutation } from '@/services';
import { useTranslations } from 'next-intl';
import { useModalContext } from '@/components/providers/ModalProvider';
import { AddEventFormData, addEventSchema } from '@/utils';
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
  const t = useTranslations('Forms');

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
            label="eventName"
            name="name"
            register={register}
            placeholder="Event Name"
            errors={errors.name}
          />
          <div className={commonStyles.optionWrapper}>
            <Controller
              control={control}
              name="category"
              render={({ field }) => (
                <SelectDrop
                  label={t('category')}
                  options={categoryEventDataTypes}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className={commonStyles.optionWrapper}>
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
          <Controller
            control={control}
            name="date"
            render={({ field }) => (
              <PickerDate label={t('date')} value={field.value} onChange={field.onChange} />
            )}
          />
          <Controller
            control={control}
            name="time"
            render={({ field }) => (
              <PickerTime label={t('time')} value={field.value} onChange={field.onChange} />
            )}
          />
          <TextareaField
            label={t('description')}
            name="description"
            register={register}
            placeholder={t('eventDescrHolder')}
          />
          <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting || isCreating}>
            {t('saveEvent')}
          </BtnPrimary>
        </form>
      )}
    </>
  );
};
