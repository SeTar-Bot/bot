import { wrappers } from "music-engines";
const { Base } = wrappers;
export default class Queue {

    private tracks: typeof Base[] = [];
    private currentTrack: typeof Base;
    private endedTracks: typeof Base[] = [];
    public loopMoode: "all" | "one" | "none" = "none";
    constructor(tracks?: typeof Base[])
    {
        this.tracks = tracks ? tracks : [];
    }

    clear(): void
    {
        this.tracks = []
        this.endedTracks = [];
        this.currentTrack = null;
    }
 
    setLoop(type: "all" | "none" | "one"): void
    {
        this.loopMoode = type
    }

    repeatAll(): void
    {
        this.endedTracks.unshift(this.currentTrack);
        this.tracks.concat(this.endedTracks);
        this.endedTracks = [];
        this.currentTrack = this.tracks[0];
    }

    repeatOne(): void
    {
        this.tracks.unshift(this.currentTrack);
    }

    nextTracks(): typeof Base[] {
        if(this.tracks.length)
        {
            const currentTrack = this.tracks.shift();
            const result = this.tracks;
            this.tracks.unshift(currentTrack);

            return result;
        }
        else
            return [];
    }
    private checkLoop()
    {
        if(this.loopMoode == "all")
            this.repeatAll();
        else if(this.loopMoode == "one")
            this.repeatOne();
    }
    previousTracks(): typeof Base[] {
        return this.endedTracks;
    }

    shuffle(): boolean {

        if (!this.tracks.length || this.tracks.length < 3) return false;
        const currentTrack = this.tracks.shift();

        for (let i = this.tracks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.tracks[i], this.tracks[j]] = [this.tracks[j], this.tracks[i]];
        }

        this.tracks.unshift(currentTrack);

        return true;
    }

    current(): typeof Base
    {

        if(!this.currentTrack)
            this.currentTrack = this.tracks[0];

        return this.currentTrack;
    }

    next(): typeof Base
    {
        this.checkLoop()
        
        if(this.tracks.length <= 1)
            return;

        this.endedTracks.unshift(this.tracks.shift());
        this.currentTrack = this.tracks[0];
        return this.currentTrack;
    }

    back(): typeof Base
    {
        this.checkLoop()

        if(!this.endedTracks.length)
            return;

        this.tracks.unshift(this.endedTracks.shift());
        this.currentTrack = this.tracks[0];
        return this.currentTrack;
    }

    skip(num = 1): typeof Base
    {
        this.checkLoop()

        num = num - 1;
        if(num > this.tracks.length)
            return;

        if(this.endedTracks.length > 0)
            this.endedTracks.concat(this.tracks.splice(0, num));
        else
            this.endedTracks = this.tracks.splice(0, num);
            
        this.currentTrack = this.tracks[0];
        return this.currentTrack;
    }

    previous(num = 1): typeof Base
    {
        this.checkLoop()
        num = num - 1;
        if(num > this.endedTracks.length)
            return;

        this.endedTracks.splice(0, num).concat(this.tracks);
        this.currentTrack = this.tracks[0];
        return this.currentTrack;
    }

    addTracks(x: typeof Base[]): Queue
    {
        if(this.tracks.length > 0)
            this.tracks.concat(x);
        else
            this.tracks = x;
        this.currentTrack = this.currentTrack ?? this.tracks[0];
        return this;
    }

    remove(x: number | typeof Base, numbersToRemove?: number): boolean
    {
        if(x instanceof Base)
        {
            const trackFound = this.tracks.find(s => s == x);
            if(!trackFound)
                return false;
            else
            {
                numbersToRemove = 1;
                const trackIndex = this.tracks.findIndex(s => s == x);
                this.tracks.splice(trackIndex, numbersToRemove);
                return true;
            }
        }
        else if(typeof x == "number")
        {
            if(!numbersToRemove)
                numbersToRemove = 1;

            this.tracks.splice(x, numbersToRemove);
            return true;
        }
    }
}