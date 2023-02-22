import { JukeBoxState, JukeBoxStateName } from "../jukeboxState";

export class JukeBoxIsPlaying extends JukeBoxState {
  constructor(private stopState: JukeBoxState) {
    super();
    this.stateName = JukeBoxStateName.READY;
  }

  public play(): void {
    this.playerContext.player.logger("Already playing");
  }

  public pause(): void {
    this.playerContext.player.stopPlayback();
    this.playerContext.changeState(this.stopState);
  }
  public prevSong(): void {
    this.playerContext.player.previousSong();
  }

  public nextSong(): void {
    this.playerContext.player.nextSong();
  }
}
