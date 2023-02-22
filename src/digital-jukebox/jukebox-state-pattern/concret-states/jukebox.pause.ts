import { JukeBoxState, JukeBoxStateName } from "../jukeboxState";

export class JukeBoxIsPaused extends JukeBoxState {
  constructor(
    private stopState: JukeBoxState,
    private startState: JukeBoxState
  ) {
    super();
    this.stateName = JukeBoxStateName.PAUSE;
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
  }

  public nextSong(): void {
    this.playerContext.player.nextSong();
  }
}
