/* eslint-disable @typescript-eslint/no-unused-vars */
import { IMAGE_THUMB_STARTS } from '@/utils';
import { StaticImageData } from 'next/image';

export const defineThumbSrc = (projectImage: string | [string, File | StaticImageData]) => {
  // if (typeof projectImage === 'string') {
  //   return projectImage.includes(IMAGE_THUMB_STARTS)
  //     ? projectThumbs[projectImage as ProjectThumbsKeys]
  //     : projectImage;
  // } else {
  //   if (projectImage[1] instanceof File) {
  //     return URL.createObjectURL(projectImage[1]);
  //   }
  //   return projectImage[1];
  // }
};
