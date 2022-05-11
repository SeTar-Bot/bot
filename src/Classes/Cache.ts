import { CacheContainer, ICachingOptions } from "node-ts-cache";
import { MemoryStorage } from "node-ts-cache-storage-memory";

export default class CacheManager <DataObject extends object | unknown> {

    private Container: CacheContainer
    private Storage: MemoryStorage;

    constructor()
    {
        this.Storage = new MemoryStorage()
        this.Container = new CacheContainer(this.Storage);
    }

    //TODO: Add Remove Method
    async remove(key: string, returnObject: false): Promise<undefined | void>
    async remove(key: string, returnObject: true): Promise<DataObject | undefined>
    async remove(key: string, returnObject = true): Promise<DataObject | undefined | void>
    {
        if(returnObject)
        return;

        return;
    }

    async get(key: string): Promise<DataObject>
    {
        return await this.Container.getItem<DataObject>(key);
    }

    async set(key: string, data: DataObject, options?: Partial<ICachingOptions & { check?: false }>): Promise<void>
    async set(key: string, data: DataObject, options?: Partial<ICachingOptions & { check?: true }>): Promise<boolean>
    async set(key: string, data: DataObject, options: Partial<ICachingOptions & { check?: boolean }> = {ttl: 300, isLazy: false, isCachedForever: false, check: true }): Promise<void | boolean>
    {
        const doCheck = ('check' in options) ? options.check : false;
        delete options.check;
        await this.Container.setItem(key, data, options);

        if(doCheck)
            return await this.check(key);
        else
            return;
    }
    
    async check(key: string): Promise<boolean>
    {
        const data = await this.Container.getItem<DataObject>(key);
        if(data)
            return true;
        else
            return false;
    }

    async clear(): ReturnType<CacheContainer["clear"]>
    {
        return await this.Container.clear();
    }
}