/**
 * Generates a unique id of the form `${prefix}-${randomString}-${suffix}`.
 *
 * @param {string} [prefix=''] - The prefix to use for the id.
 * @param {string} [suffix=''] - The suffix to use for the id.
 * @returns {string} - The unique id.
 */
const uid = (prefix = '', suffix = '') => {
  const prefixString = typeof prefix === 'string' && prefix !== '' ? prefix + '-' : '';
  const suffixString = typeof suffix === 'string' && suffix !== '' ? '-' + suffix : '';
  const randomString = Math.random().toString(36).substring(2, 8); // Pseudo-random string of six alphanumeric characters.

  return `${prefixString}${randomString}${suffixString}`;
};

export { uid };
