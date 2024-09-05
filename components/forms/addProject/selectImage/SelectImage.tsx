/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import styles from './selectImage.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { projectThumbsDataTypes } from '@/utils';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';

export const SelectImage = () => {
  const [selected, setSelected] = useState(projectThumbsDataTypes[0]);
  console.log(projectThumbsDataTypes);

  return (
    <div className={styles.selectImage}>
      <p className={styles.title}>Select image</p>
      <p className={styles.text}>
        Select or upload an avatar for the project (available formats: jpg, png)
      </p>
      <ul className={styles.list}>
        {projectThumbsDataTypes.map((el) => (
          <li
            key={el[0]}
            className={`${styles.item} ${selected[0] === el[0] ? styles.selected : ''}`}
            onClick={() => setSelected(el)}
          >
            <Image alt={el[0]} src={el[1]} />
          </li>
        ))}
        <li className={styles.upload}>
          <label htmlFor="upload-logo">
            <SvgHandler icon={EIconsSet.Upload} />
          </label>
        </li>
      </ul>
    </div>
  );
};
