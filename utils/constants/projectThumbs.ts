import thumb1 from '../../public/projects-thumbs/Image-1.png';
import thumb2 from '../../public/projects-thumbs/Image-2.png';
import thumb3 from '../../public/projects-thumbs/Image-3.png';
import thumb4 from '../../public/projects-thumbs/Image-4.png';
import thumb5 from '../../public/projects-thumbs/Image-5.png';
import thumb6 from '../../public/projects-thumbs/Image-6.png';
import thumb7 from '../../public/projects-thumbs/Image-7.png';

export const projectThumbs = {
  thumb1,
  thumb2,
  thumb3,
  thumb4,
  thumb5,
  thumb6,
  thumb7,
};

export type ProjectThumbsKeys = keyof typeof projectThumbs;

export const projectThumbsDataTypes = Object.entries(projectThumbs);

export const IMAGE_THUMB_STARTS = 'thumb';

export const CLOUDINARY_URL_REGEX = /\/upload\/(?:v\d+\/)?([^\.]+)/;
