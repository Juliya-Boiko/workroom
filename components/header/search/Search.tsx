'use client';
import styles from './search.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState, ChangeEvent, useEffect, useRef } from 'react';
import { ROUTES } from '@/utils';
import { useSearch } from '@/services';
import { BadgeTask } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';

export const Search = () => {
  const [value, setValue] = useState('');
  const ref = useRef<HTMLLabelElement>(null);
  const t = useTranslations('Header');
  const { data: result, isLoading } = useSearch({
    value: value.toLowerCase(),
    enabled: value.length >= 3,
  });

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setValue('');
      }
    };
    window.addEventListener('mousedown', handleOutSideClick);
    return () => {
      window.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [ref]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const showResult = result?.projects.length || result?.tasks.length;

  return (
    <label ref={ref} htmlFor="search" className={styles.search}>
      <SvgHandler icon={EIconsSet.Search} />
      <input
        type="text"
        name="search"
        id="search"
        placeholder={t('search')}
        value={value}
        onChange={handleChange}
        className={styles.input}
      />
      {value && !result && !isLoading && <div className={styles.placeholder}>{t('type')}</div>}
      {showResult ? (
        <div className={styles.result}>
          {result.projects.length ? (
            <div className={styles.wrapper}>
              <p className={styles.title}>Projects</p>
              <ul className={styles.list}>
                {result.projects.map((el) => (
                  <li key={el._id}>
                    <Link
                      href={`${ROUTES.project}/${el._id}`}
                      className={styles.link}
                      onClick={() => setValue('')}
                    >
                      <Image src={el.image} alt="Thumb" width={30} height={30} />
                      <span>{el.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {result.tasks.length ? (
            <div className={styles.wrapper}>
              <p className={styles.title}>Tasks</p>
              <ul className={styles.list}>
                {result.tasks.map((el) => (
                  <li key={el._id}>
                    <Link
                      href={`${ROUTES.task}/${el._id}`}
                      className={styles.link}
                      onClick={() => setValue('')}
                    >
                      <BadgeTask label={el.status} />
                      <span>{el.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ) : null}
      {value && result && !result.projects.length && !result.tasks.length && (
        <div className={styles.placeholder}>{t('result')}</div>
      )}
    </label>
  );
};
