'use client';
import moment from 'moment';
import toast from 'react-hot-toast';
import styles from './logTimeForm.module.scss';
import imgSrc from '../../../public/placeholder-3.png';
import Image from 'next/image';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTimelogMutation, useTimelogs } from '@/services';
import { useModalContext } from '@/components/providers/ModalProvider';
import { ProgressTimelog } from '@/components/progress/ProgressTimelog';
import { BtnPrimary, PickerTime, PickerDate } from '@/components/ui';
import {
  logTimeSchema,
  LogTimeFormData,
  isValidDuration,
  calculateDuration,
  calculateEstimateInSeconds,
  getEstimate,
} from '@/utils';

interface Props {
  taskId: string | undefined;
  minDate: Date | undefined;
  maxDate: Date | undefined;
}

export const LogTimeForm = ({ taskId, minDate, maxDate }: Props) => {
  const { create, isCreating } = useTimelogMutation();
  const { data: logged } = useTimelogs(taskId || '');
  const { closeModal } = useModalContext();

  const defaultValues = {
    date: minDate || new Date(),
    start: moment().format('HH:mm'),
    end: moment().format('HH:mm'),
  };

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = useForm({
    defaultValues,
    resolver: yupResolver(logTimeSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: LogTimeFormData) => {
    const isValid = isValidDuration(data.start, data.end);
    if (!isValid) {
      toast.error('End time must be later than start');
      return;
    }
    if (taskId) {
      create({ ...data, taskId, duration: calculateDuration(data.start, data.end) });
      closeModal();
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.tracker}>
        <Image src={imgSrc} alt="Time tracking" className={styles.image} />
        <div className={styles.wrapper}>
          {minDate && maxDate ? (
            <ProgressTimelog
              value={logged}
              total={calculateEstimateInSeconds(minDate, maxDate)}
              estimate={getEstimate(minDate, maxDate)}
            />
          ) : null}
        </div>
      </div>
      <Controller
        control={control}
        name="date"
        render={({ field }) => (
          <PickerDate
            label="Start date"
            value={field.value}
            minDate={minDate}
            maxDate={maxDate}
            onChange={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="start"
        render={({ field }) => (
          <PickerTime label="Start" value={field.value} onChange={field.onChange} />
        )}
      />
      <Controller
        control={control}
        name="end"
        render={({ field }) => (
          <PickerTime label="End" value={field.value} onChange={field.onChange} />
        )}
      />
      <div className={styles.btnWrapper}>
        <BtnPrimary type="submit" disabled={isSubmitting || !isDirty || isCreating}>
          Add time
        </BtnPrimary>
      </div>
    </form>
  );
};
