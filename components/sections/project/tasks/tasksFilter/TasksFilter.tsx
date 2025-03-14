'use client';
import { useState } from 'react';
import { IFilters } from '@/typings';
import { TaskFilterForm } from '@/components/forms/taskFilter/TaskFilterForm';
import { FiltersWrapper } from '@/components/sections/filters/FiltersWrapper';

interface Props {
  filters: IFilters | null;
  setFilters: (v: IFilters) => void;
}

export const TasksFilter = ({ setFilters, filters }: Props) => {
  const [open, setOpen] = useState(false);

  const handleFilters = (v: IFilters) => {
    setFilters(v);
    setOpen(false);
  };

  return (
    <FiltersWrapper open={open} setOpen={(v) => setOpen(v)}>
      <TaskFilterForm filters={filters} setFilters={handleFilters} />
    </FiltersWrapper>
  );
};
