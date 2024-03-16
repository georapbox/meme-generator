class Storage {
  #keyPrefix = null;
  #provider = null;

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

  set(key, value) {
    try {
      this.#provider.setItem(`${this.#keyPrefix}${key}`, JSON.stringify(value));
    } catch (err) {
      console.error('Error saving to storage', err);
    }
  }

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
