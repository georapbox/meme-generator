import { ACCEPTED_MIME_TYPES } from './constants.js';

export const fileFromUrl = async (options = {}) => {
  const res = await fetch(options.url);
  const blob = await res.blob();
  const mimeType = options.mimeType || blob.type || '';

  if (!ACCEPTED_MIME_TYPES.includes(mimeType)) {
    throw new Error(`This is not an accepted image format. Accepted MIME types are: ${ACCEPTED_MIME_TYPES.join(', ')}`);
  }

  let filename = options.filename || '';

  if (!options.filename) {
    const fileExtension = mimeType.split('/')[1];
    filename = `${options.url}.${fileExtension}`;
  }

  const file = new File([blob], filename, blob);

  return file;
};
