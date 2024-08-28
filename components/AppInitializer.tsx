'use client';
import { usePersonStore } from '@/utils/store';
import { useEffect } from 'react';

export const AppInitializer = () => {
  const { updateUser, updateCompany } = usePersonStore((s) => s);

  useEffect(() => {
    updateUser();
    updateCompany();
  }, [updateCompany, updateUser]);

  return null;
};
