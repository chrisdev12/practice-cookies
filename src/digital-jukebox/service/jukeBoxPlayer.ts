import { randomInt } from "crypto";
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
    this.playerSongs = this.songRepository.getAll(30);
  }

  randomizeSongs(limit: number): ISong[] {
    return this.playerSongs
      .map((song) => ({
        song,
        randomOrder: randomInt(1000),
      }))
      .sort((a, b) => a.randomOrder - b.randomOrder)
      .slice(0, limit)
      .map(({ song }) => song);
  }

  turnOn(): void {
    this.playerSongs = this.randomizeSongs(5);
    this.logger(
      `Audio player is turn on. ${this.playerSongs.length} have been randomly loaded`
    );
    this.playerSongs.forEach((song, index) => {
      this.logger(`${index + 1}. ${song.name} By ${song.artist}`);
    });
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
