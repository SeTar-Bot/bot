import { DartVoiceManager } from "dartjs";
import { Collection, GuildResolvable } from "discord.js";
import Queue from "./Queue";

export default class AudioManager {

    public readonly queues: Collection<GuildResolvable, Queue> = new Collection();
    constructor(public readonly client: DartVoiceManager){}

    createQueue(key: GuildResolvable): Queue
    {
        this.queues.set(key, new Queue());
        return this.queues.get(key);
    }

    getQueue(key: GuildResolvable)
    {
        return this.queues.get(key);
    }

    setVolume(key: GuildResolvable, value: number): boolean
    {
        return this.client.connections.get(key as string)?.dispatcher?.setVolumePercentage(value);
    }

    pause(key: GuildResolvable)
    {
        return this.client.connections.get(key as string)?.dispatcher?.pause(false);
    }

    resume(key: GuildResolvable)
    {
        return this.client.connections.get(key as string)?.dispatcher?.resume()
    }

    stop(key: GuildResolvable, force = false, clear = true)
    {
        if(clear)
            this.queues.get(key)?.clear()
        return this.client.connections.get(key as string)?.dispatcher.stop(force);
    }

    disconnect(key: string)
    {
        return this.client.connections.get(key as string)?.disconnect()
    }
}