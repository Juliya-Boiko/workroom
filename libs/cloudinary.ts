'use server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

type CloudinaryUploadResult = {
  secure_url: string;
};

type CloudinaryError = {
  message: string;
};

type UploadResponse =
  | { success: true; result: CloudinaryUploadResult }
  | { success: false; error: CloudinaryError };

export const uploadToCloudinary = async (
  fileUri: string,
  fileName: string
): Promise<UploadResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(fileUri, {
        invalidate: true,
        resource_type: 'auto',
        filename_override: fileName,
        folder: 'workroom',
        use_filename: true,
      })
      .then((result) => {
        resolve({ success: true, result });
      })
      .catch((error) => {
        reject({ success: false, error });
      });
  });
};

type CloudinaryDeleteResponse = {
  result: string;
};

type DeleteResponse =
  | { success: true; result: CloudinaryDeleteResponse }
  | { success: false; error: CloudinaryError };

export const deleteFromCloudinary = async (publicId: string): Promise<DeleteResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(publicId, { invalidate: true }, (error, result) => {
      if (error) {
        reject({ success: false, error });
      } else {
        resolve({ success: true, result });
      }
    });
  });
};
