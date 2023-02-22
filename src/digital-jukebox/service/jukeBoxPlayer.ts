import { ISong } from "../models/song";
import { ISongRepository } from "../repository/songRepository";

export interface IJukeBoxPlayer {
  songs: ISong[];
  playSong: (song: ISong) => void;
  startPlayBack: () => void;
  stopPlayback: () => void;
  nextSong: () => void;
  previousSong: () => void;
  logger: (message: unknown) => void;
  turnOn: () => void;
  turnOff: () => void;
}

export class DefaultAudioPlayer implements IJukeBoxPlayer {
  private playerSongs: ISong[] = [];

  constructor(private songRepository: ISongRepository) {
    this.playerSongs = this.songRepository.getAll(15);
  }

  turnOn(): void {
    this.playerSongs = [...this.playerSongs].slice(0, 5);
    this.logger(this.playerSongs);
  }

  turnOff(): void {
    this.playerSongs = [];
    this.logger("turning off JukeBox AudioPlayer");
  }

  playSong(song: ISong): void {
    this.logger(`Playing ${song.name}`);
  }

  startPlayBack(): void {
    this.playSong(this.currentSong);
  }

  stopPlayback(): void {
    this.logger(`Stoping ${this.currentSong.name}`);
  }

  nextSong(): void {
    this.logger("play next song");
  }

  previousSong(): void {
    this.logger("play prev song");
  }

  logger(message: unknown) {
    console.log(message);
  }

  get currentSong(): ISong {
    return this.playerSongs[0];
  }

  get songs(): ISong[] {
    return this.playerSongs;
  }
}
