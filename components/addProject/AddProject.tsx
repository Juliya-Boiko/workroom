'use client';
import styles from './addProject.module.scss';
import { EIconsSet } from '@/enums';
import { SvgHandler } from '../SvgHandler';
import { BtnPrimary } from '../ui/buttons/primary/BtnPrimary';
import { useState } from 'react';
import { Overlay } from '../ui/overlay/Overlay';
import { BtnIcon } from '../ui/buttons/icon/BtnIcon';
import { AddProjectForm } from '../forms/addProject/AddProjectForm';

export const AddProject = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.addProject}>
      <BtnPrimary onClick={() => setOpen(true)}>
        <SvgHandler icon={EIconsSet.Plus} />
        <span>Add Project</span>
      </BtnPrimary>
      {open && (
        <Overlay onClose={() => setOpen(false)}>
          <div className={styles.container}>
            <div className={styles.head}>
              <h3 className={styles.title}>Add Project</h3>
              <BtnIcon title="Close" tonal onClick={() => setOpen(false)}>
                <SvgHandler icon={EIconsSet.Cross} />
              </BtnIcon>
            </div>
            <AddProjectForm />
          </div>
        </Overlay>
      )}
    </div>
  );
};
