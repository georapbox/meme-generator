/**
 * A class representing a storage utility for managing data in `localStorage` or `sessionStorage`.
 */
class Storage {
  /**
   * The prefix to be added to all keys.
   *
   * @type {string}
   * @private
   */
  #keyPrefix = null;

  /**
   * The storage provider (`localStorage` or `sessionStorage`).
   *
   * @type {Storage}
   * @private
   */
  #provider = null;

  /**
   * Creates an instance of Storage.
   *
   * @param {string} prefix - The prefix to be added to all keys when storing/retrieving data.
   * @param {Storage} [provider=localStorage] - The storage provider (`localStorage` or `sessionStorage`).
   * @throws {Error} If prefix is not provided or if the provider is not supported.
   */
  constructor(prefix, provider = localStorage) {
    if (!prefix) {
      throw new Error('Storage prefix is required');
    }

    if (provider !== localStorage && provider !== sessionStorage) {
      throw new Error('Storage provider is not supported');
    }

    this.#keyPrefix = prefix;
    this.#provider = provider;
  }

  /**
   * Sets a key-value pair in the storage.
   *
   * @param {string} key - The key for the data.
   * @param {*} value - The value to be stored (will be converted to JSON string).
   */
  set(key, value) {
    try {
      this.#provider.setItem(`${this.#keyPrefix}${key}`, JSON.stringify(value));
    } catch (err) {
      console.error('Error saving to storage', err);
    }
  }

  /**
   * Retrieves the value associated with the given key from the storage.
   *
   * @param {string} key - The key to retrieve the value for.
   * @returns {*} The value associated with the key, or `null` if key is not found or an error occurs.
   */
  get(key) {
    try {
      const value = this.#provider.getItem(`${this.#keyPrefix}${key}`);
      return value ? JSON.parse(value) : null;
    } catch (err) {
      console.error('Error getting from storage', err);
      return null;
    }
  }
}

const DEFAULT_STORAGE_PREFIX = 'meme-generator/';
const DEFAULT_STORAGE_PROVIDER = localStorage;
const storage = new Storage(DEFAULT_STORAGE_PREFIX, DEFAULT_STORAGE_PROVIDER);

export { Storage, storage };
