export const encodeImage = async (file: File) => {
  const fileBuffer = await file.arrayBuffer();
  const mimeType = file.type;
  const encoding = 'base64';
  const base64Data = Buffer.from(fileBuffer).toString(encoding);
  const fileUri = 'data:' + mimeType + ';' + encoding + ',' + base64Data;
  return { fileUri, fileName: file.name };
};
