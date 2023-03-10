import { IJukeBoxContext } from "./jukeboxContext";

export enum JukeBoxStateName {
  READY = "READY",
  PLAYING = "PLAYING",
  PAUSE = "PAUSE",
}

export abstract class JukeBoxState {
  protected playerContext!: IJukeBoxContext;
  public setContext(context: IJukeBoxContext) {
    this.playerContext = context;
  }
  public abstract play(): void;
  public abstract pause(): void;
  public abstract nextSong(): void;
  public abstract prevSong(): void;
  public abstract get name(): JukeBoxStateName;
}
