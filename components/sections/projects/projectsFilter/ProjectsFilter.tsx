'use client';
import { useState } from 'react';
import { FiltersWrapper } from '@/components/sections/filters/FiltersWrapper';
import { ProjectFilterForm } from '@/components/forms/projectFilter/ProjectFilterForm';
import { IFilters } from '@/typings';

interface Props {
  filters: IFilters | null;
  setFilters: (v: IFilters) => void;
}

export const ProjectsFilter = ({ setFilters, filters }: Props) => {
  const [open, setOpen] = useState(false);

  const handleFilters = (v: IFilters) => {
    setFilters(v);
    setOpen(false);
  };

  return (
    <FiltersWrapper open={open} setOpen={(v) => setOpen(v)}>
      <ProjectFilterForm filters={filters} setFilters={handleFilters} />
    </FiltersWrapper>
  );
};
