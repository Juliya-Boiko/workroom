'use client';
import styles from './signUp.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import imgSrc from '../../../public/placeholder-1.png';
import { useState } from 'react';
import { useUserMutations } from '@/services';
import { SignUpFormData, ROUTES } from '@/utils';
import { signStagesDataTypes, ESignStages, EIconsSet } from '@/typings';
import { SignUpForm } from '../../forms/signUp/SignUpForm';
import { Preloader, Logo } from '../../ui';
import { SvgHandler } from '../../SvgHandler';

export const SignUpSection = () => {
  const [activeStage, setActiveStages] = useState(ESignStages.EnterYourEmail);
  const { registerOwner, isSuccessRegisterOwner, isRegistering } = useUserMutations();

  const handleNext = () => {
    const currentStage = signStagesDataTypes.findIndex((el) => el === activeStage);
    setActiveStages(signStagesDataTypes[currentStage + 1]);
  };

  const handlePrev = () => {
    const currentStage = signStagesDataTypes.findIndex((el) => el === activeStage);
    setActiveStages(signStagesDataTypes[currentStage - 1]);
  };

  const onSubmit = async (data: SignUpFormData) => {
    registerOwner(data);
  };

  return (
    <>
      {!isRegistering && !isSuccessRegisterOwner && (
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
            <SignUpForm
              activeStage={activeStage}
              onNext={handleNext}
              onPrev={handlePrev}
              onSubmit={onSubmit}
            />
          </div>
        </section>
      )}
      {isRegistering && (
        <div className={styles.start}>
          <Preloader />
        </div>
      )}
      {isSuccessRegisterOwner && (
        <div className={styles.start}>
          <Image
            src={imgSrc}
            priority
            alt="You are successfully registered!"
            className={styles.image}
          />
          <h3 className={styles.title}>You are successfully registered!</h3>
          <Link href={ROUTES.dashboard} className={styles.link}>
            <span>Let&apos;s Start</span>
            <SvgHandler icon={EIconsSet.ArrowRight} />
          </Link>
        </div>
      )}
    </>
  );
};
