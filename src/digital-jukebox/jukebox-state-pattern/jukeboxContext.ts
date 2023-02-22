import { IJukeBoxPlayer } from "../service/jukeBoxPlayer";
import { JukeBoxState, JukeBoxStateName } from "./jukeboxState";

export interface IJukeBoxContext {
  player: IJukeBoxPlayer;
  off: () => void;
  on: () => void;
  play: () => unknown;
  pause: () => unknown;
  changeState(state: JukeBoxState): void;
}

export class JukeboxContext implements IJukeBoxContext {
  private state!: JukeBoxState;

  constructor(
    initialJukeBoxState: JukeBoxState,
    private internalPlayer: IJukeBoxPlayer
  ) {
    this.changeState(initialJukeBoxState);
  }

  changeState(state: JukeBoxState): void {
    console.log(`transitig to ${state.name}`);
    this.state = state;
  }

  off() {
    this.player.turnOff();
  }

  on() {
    this.player.turnOn();
  }

  play() {
    if (this.isPlayerPaused) throw Error("disabled option");
    this.state.play();
  }

  pause() {
    this.state.pause();
  }

  nextSong() {
    if (this.isPlayerPaused) throw Error("disabled option");
    this.state.nextSong();
  }

  prevSong() {
    if (this.isPlayerPaused) throw Error("disabled option");
    this.state.prevSong();
  }

  get player() {
    return this.internalPlayer;
  }

  get isPlayerPaused() {
    return this.state.name === JukeBoxStateName.PAUSE;
  }
}
