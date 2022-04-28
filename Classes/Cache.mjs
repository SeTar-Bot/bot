import { CacheContainer } from "node-ts-cache";
import { MemoryStorage } from "node-ts-cache-storage-memory";
export default class CacheManager {
  constructor() {
    this.Storage = new MemoryStorage();
    this.Container = new CacheContainer(this.Storage);
  } //TODO: Add Remove Method


  async remove(key, returnObject = true) {
    if (returnObject) return;
    return;
  }

  async get(key) {
    return await this.Container.getItem(key);
  }

  async set(key, data, options = {
    ttl: 300,
    isLazy: false,
    isCachedForever: false,
    check: true
  }) {
    const doCheck = 'check' in options ? options.check : false;
    delete options.check;
    await this.Container.setItem(key, data, options);
    if (doCheck) return await this.check(key);else return;
  }

  async check(key) {
    const data = await this.Container.getItem(key);
    if (data) return true;else return false;
  }

  async clear() {
    return await this.Container.clear();
  }

}