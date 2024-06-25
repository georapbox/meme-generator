import { ACCEPTED_MIME_TYPES } from '../constants.js';

/**
 * Creates a file from a given URL.
 *
 * @param {{ url: string, filename: string, mimeType: string }} options
 * @param {string} options.url - The URL of the file to fetch.
 * @param {string} options.filename - The name of the file to create.
 * @param {string} options.mimeType - The MIME type of the file to create.
 * @returns {Promise<File>} - A promise that resolves to the file created from the given URL.
 */
export const fileFromUrl = async (options = {}) => {
  const res = await fetch(options.url);
  const blob = await res.blob();
  const mimeType = options.mimeType || blob.type || '';

  if (!ACCEPTED_MIME_TYPES.includes(mimeType)) {
    throw new Error(
      `This is not an accepted image format. Accepted MIME types are: ${ACCEPTED_MIME_TYPES.join(', ')}`
    );
  }

  return new File([blob], options.filename || '', blob);
};
