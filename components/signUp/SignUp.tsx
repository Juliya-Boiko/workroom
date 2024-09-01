'use client';
import styles from './signUp.module.scss';
import Image from 'next/image';
import imgSrc from '../../public/auth-success.png';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { registerUserAndCompany } from '@/actions';
import { signStagesDataTypes, ESignStages, EIconsSet } from '@/enums';
import { Logo } from '../logo/Logo';
import { SignUpForm } from '../forms/signUp/SignUpForm';
import { SignUpFormData } from '@/utils/schemas';
import { BtnPrimary } from '../ui/buttons/primary/BtnPrimary';
import { SvgHandler } from '../SvgHandler';
import { ROUTES } from '@/constants';
import { Preloader } from '../ui/preloader/Preloader';

export const SignUpSection = () => {
  const [activeStage, setActiveStages] = useState(ESignStages.EnterYourEmail);
  const router = useRouter();

  const handleNext = () => {
    const currentStage = signStagesDataTypes.findIndex((el) => el === activeStage);
    setActiveStages(signStagesDataTypes[currentStage + 1]);
  };

  const handlePrev = () => {
    const currentStage = signStagesDataTypes.findIndex((el) => el === activeStage);
    setActiveStages(signStagesDataTypes[currentStage - 1]);
  };

  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: registerUserAndCompany,
  });

  const onSubmit = async (data: SignUpFormData) => {
    mutate(data);
  };

  return (
    <>
      {isSuccess || isPending ? (
        <div className={styles.start}>
          {isPending ? (
            <Preloader />
          ) : (
            <>
              <Image src={imgSrc} alt="You are successfully registered!" className={styles.image} />
              <h3 className={styles.title}>You are successfully registered!</h3>
              <BtnPrimary onClick={() => router.push(ROUTES.dashboard)}>
                <span>Let&apos;s Start</span>
                <SvgHandler icon={EIconsSet.ArrowRight} />
              </BtnPrimary>
            </>
          )}
        </div>
      ) : (
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
    </>
  );
};
