import { Base } from "music-engines";
export default class Queue {
  tracks = [];
  endedTracks = [];
  loopMoode = "none";

  constructor(tracks) {
    this.tracks = tracks ? tracks : [];
  }

  clear() {
    this.tracks = [];
    this.endedTracks = [];
    this.currentTrack = null;
  }

  setLoop(type) {
    this.loopMoode = type;
  }

  repeatAll() {
    this.endedTracks.unshift(this.currentTrack);
    this.tracks.concat(this.endedTracks);
    this.endedTracks = [];
    this.currentTrack = this.tracks[0];
  }

  repeatOne() {
    this.tracks.unshift(this.currentTrack);
  }

  nextTracks() {
    if (this.tracks.length) {
      const currentTrack = this.tracks.shift();
      const result = this.tracks;
      this.tracks.unshift(currentTrack);
      return result;
    } else return [];
  }

  checkLoop() {
    if (this.loopMoode == "all") this.repeatAll();else if (this.loopMoode == "one") this.repeatOne();
  }

  previousTracks() {
    return this.endedTracks;
  }

  shuffle() {
    if (!this.tracks.length || this.tracks.length < 3) return false;
    const currentTrack = this.tracks.shift();

    for (let i = this.tracks.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.tracks[i], this.tracks[j]] = [this.tracks[j], this.tracks[i]];
    }

    this.tracks.unshift(currentTrack);
    return true;
  }

  current() {
    if (!this.currentTrack) this.currentTrack = this.tracks[0];
    return this.currentTrack;
  }

  next() {
    this.checkLoop();
    if (this.tracks.length <= 1) return;
    this.endedTracks.unshift(this.tracks.shift());
    this.currentTrack = this.tracks[0];
    return this.currentTrack;
  }

  back() {
    this.checkLoop();
    if (!this.endedTracks.length) return;
    this.tracks.unshift(this.endedTracks.shift());
    this.currentTrack = this.tracks[0];
    return this.currentTrack;
  }

  skip(num = 1) {
    this.checkLoop();
    num = num - 1;
    if (num > this.tracks.length) return;
    if (this.endedTracks.length > 0) this.endedTracks.concat(this.tracks.splice(0, num));else this.endedTracks = this.tracks.splice(0, num);
    this.currentTrack = this.tracks[0];
    return this.currentTrack;
  }

  previous(num = 1) {
    this.checkLoop();
    num = num - 1;
    if (num > this.endedTracks.length) return;
    this.endedTracks.splice(0, num).concat(this.tracks);
    this.currentTrack = this.tracks[0];
    return this.currentTrack;
  }

  addTracks(x) {
    if (this.tracks.length > 0) this.tracks.concat(x);else this.tracks = x;
    this.currentTrack = this.currentTrack ?? this.tracks[0];
    return this;
  }

  remove(x, numbersToRemove) {
    if (x instanceof Base) {
      const trackFound = this.tracks.find(s => s == x);
      if (!trackFound) return false;else {
        numbersToRemove = 1;
        const trackIndex = this.tracks.findIndex(s => s == x);
        this.tracks.splice(trackIndex, numbersToRemove);
        return true;
      }
    } else if (typeof x == "number") {
      if (!numbersToRemove) numbersToRemove = 1;
      this.tracks.splice(x, numbersToRemove);
      return true;
    }
  }

}