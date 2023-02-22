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
    this.state.setContext(this);
  }

  off() {
    this.player.turnOff();
  }

  on() {
    this.player.turnOn();
  }

  play() {
    this.state.play();
  }

  pause() {
    this.state.pause();
  }

  nextSong() {
    this.state.nextSong();
  }

  prevSong() {
    this.state.prevSong();
  }

  get player() {
    return this.internalPlayer;
  }

  get isPlayerPaused() {
    return this.state.name === JukeBoxStateName.PAUSE;
  }
}
