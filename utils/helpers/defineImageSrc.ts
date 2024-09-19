import { IMAGE_THUMB_STARTS, projectThumbs, ProjectThumbsKeys } from '@/utils';
import { StaticImageData } from 'next/image';

export const defineImageSrc = (image?: string) => {
  if (image) {
    const isThumb = image.includes(IMAGE_THUMB_STARTS);
    return isThumb ? projectThumbs[image as keyof typeof projectThumbs] : image;
  }
  return projectThumbs.thumb1;
};

export const defineThumbSrc = (projectImage: string | [string, File | StaticImageData]) => {
  if (typeof projectImage === 'string') {
    return projectImage.includes(IMAGE_THUMB_STARTS)
      ? projectThumbs[projectImage as ProjectThumbsKeys]
      : projectImage;
  } else {
    if (projectImage[1] instanceof File) {
      return URL.createObjectURL(projectImage[1]);
    }
    return projectImage[1];
  }
};
