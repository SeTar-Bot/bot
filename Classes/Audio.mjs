import { Collection } from "discord.js";
import Queue from "./Queue.mjs";
export default class AudioManager {
  queues = new Collection();

  constructor(client) {
    this.client = client;
  }

  createQueue(key) {
    this.queues.set(key, new Queue());
    return this.queues.get(key);
  }

  getQueue(key) {
    return this.queues.get(key);
  }

  setVolume(key, value) {
    return this.client.connections.get(key)?.dispatcher?.setVolumePercentage(value);
  }

  pause(key) {
    return this.client.connections.get(key)?.dispatcher?.pause(false);
  }

  resume(key) {
    return this.client.connections.get(key)?.dispatcher?.resume();
  }

  stop(key, force = false, clear = true) {
    if (clear) this.queues.get(key)?.clear();
    return this.client.connections.get(key)?.dispatcher.stop(force);
  }

  disconnect(key) {
    return this.client.connections.get(key)?.disconnect();
  }

}