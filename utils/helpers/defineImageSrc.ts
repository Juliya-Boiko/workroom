import { IMAGE_THUMB_STARTS, projectThumbs } from '@/utils';

export const defineImageSrc = (image?: string) => {
  if (image) {
    const isThumb = image.includes(IMAGE_THUMB_STARTS);
    return isThumb ? projectThumbs[image as keyof typeof projectThumbs] : image;
  }
  return projectThumbs.thumb1;
};
