/**
 * Removes one or more elements from an array at the specified index(es).
 *
 * @param {Array} array The initial array to remove elements from.
 * @param {Number} ...indexes The index(es) of the elements to be removed. Non numbers are ignored.
 * @throws {TypeError} If `array` is not array.
 * @returns {Array} The result array with the elements specified removed.
 * @example
 *
 * const arr = [1, 2, 3, 4, 5];
 *
 * remove(arr, 0);
 * // => [2, 3, 4, 5]
 *
 * remove(arr, 0, 1);
 * // => [3, 4, 5]
 *
 * remove(arr, 0, 4);
 * // => [2, 3, 4]
 *
 * remove(arr);
 * // => [1, 2, 3, 4, 5]
 *
 * remove(arr, arr.length);
 * // => [1, 2, 3, 4, 5]
 *
 * remove(arr, arr.length - 1);
 * // => [1, 2, 3, 4]
 *
 * remove(arr, NaN);
 * // => [1, 2, 3, 4, 5]
 */
export const arrayRemove = (array, ...indexes) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  return array.filter((_, i) => indexes.indexOf(i) === -1);
};
