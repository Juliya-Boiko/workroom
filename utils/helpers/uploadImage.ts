import { uploadToCloudinary, deleteFromCloudinary } from '@/libs/cloudinary';
import { CLOUDINARY_URL_REGEX } from '../constants';
import { projectThumbsDataTypes } from '../constants';
import { StaticImageData } from 'next/image';

const encodeImage = async (file: File) => {
  const fileBuffer = await file.arrayBuffer();
  const mimeType = file.type;
  const encoding = 'base64';
  const base64Data = Buffer.from(fileBuffer).toString(encoding);
  const fileUri = 'data:' + mimeType + ';' + encoding + ',' + base64Data;
  return { fileUri, fileName: file.name };
};

export const uploadImage = async (image: null | string | File) => {
  if (image && image instanceof File) {
    const { fileUri, fileName } = await encodeImage(image);
    const uploadResult = await uploadToCloudinary(fileUri, fileName);
    return uploadResult.success ? uploadResult.result.secure_url : null;
  } else {
    return image;
  }
};

export const uploadThumb = async (image: [string, StaticImageData | File] | string) => {
  const isDefaultThumb = projectThumbsDataTypes.some((el) => el[0] === image[0]);
  if (isDefaultThumb) {
    return image[0];
  } else {
    if (image[1] instanceof File) {
      const { fileUri, fileName } = await encodeImage(image[1]);
      const uploadResult = await uploadToCloudinary(fileUri, fileName);
      return uploadResult.success ? uploadResult.result.secure_url : null;
    }
  }
};

export const deleteImage = async (url: string) => {
  const match = url.match(CLOUDINARY_URL_REGEX);
  if (match) {
    await deleteFromCloudinary(match[1]);
  }
};
