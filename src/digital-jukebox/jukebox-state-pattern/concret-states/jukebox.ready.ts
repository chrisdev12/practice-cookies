import { JukeBoxState, JukeBoxStateName } from "../jukeboxState";

export class JukeBoxIsReady extends JukeBoxState {
  constructor(
    private stopState: JukeBoxState,
    private startState: JukeBoxState
  ) {
    super();
    this.stateName = JukeBoxStateName.READY;
  }

  public play(): void {
    this.playerContext.player.startPlayBack();
    this.playerContext.changeState(this.startState);
  }

  public pause(): void {
    this.playerContext.changeState(this.stopState);
  }
  public prevSong(): void {
    this.playerContext.player.previousSong();
    this.playerContext.changeState(this.startState);
  }

  public nextSong(): void {
    this.playerContext.player.nextSong();
    this.playerContext.changeState(this.startState);
  }
}
