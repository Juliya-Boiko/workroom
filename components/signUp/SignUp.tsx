'use client';
import { Logo } from '../logo/Logo';
import { useState } from 'react';
import styles from './signUp.module.scss';
import { signStagesDataTypes, ESignStages } from '@/enums';
import { SignUpForm } from '../forms/signUp/SignUpForm';

export const SignUpSection = () => {
  const [activeStage, setActiveStages] = useState(ESignStages.EnterYourEmail);

  const handleNext = () => {
    const currentStage = signStagesDataTypes.findIndex((el) => el === activeStage);
    console.log(signStagesDataTypes[currentStage + 1]);
    setActiveStages(signStagesDataTypes[currentStage + 1]);
  };

  const handlePrev = () => {
    const currentStage = signStagesDataTypes.findIndex((el) => el === activeStage);
    setActiveStages(signStagesDataTypes[currentStage - 1]);
  };

  return (
    <section className={styles.section}>
      <div className={styles.stages}>
        <div className={styles.heading}>
          <Logo cropped />
          <h1>Get started</h1>
        </div>
        <ul className={styles.list}>
          {signStagesDataTypes.map((el, idx) => (
            <li
              key={el}
              className={`${styles.stageItem} ${el === activeStage ? styles.active : ''}`}
            >
              <div className={styles.circle}>
                <span className={styles.count}>{idx + 1}</span>
              </div>
              <span>{el}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.form}>
        <SignUpForm activeStage={activeStage} onNext={handleNext} onPrev={handlePrev} />
      </div>
    </section>
  );
};
