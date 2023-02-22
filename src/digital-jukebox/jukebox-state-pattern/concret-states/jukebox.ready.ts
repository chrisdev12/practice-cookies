import { JukeBoxState, JukeBoxStateName } from "../jukeboxState";
import { JukeBoxIsPaused } from "./jukebox.pause";
import { JukeBoxIsPlaying } from "./jukebox.play";

export class JukeBoxIsReady extends JukeBoxState {
  public play(): void {
    this.playerContext.player.startPlayBack();
    this.playerContext.changeState(new JukeBoxIsPlaying());
  }

  public pause(): void {
    this.playerContext.changeState(new JukeBoxIsPaused());
  }
  public prevSong(): void {
    this.playerContext.player.previousSong();
    this.playerContext.changeState(new JukeBoxIsPlaying());
  }

  public nextSong(): void {
    this.playerContext.player.nextSong();
    this.playerContext.changeState(new JukeBoxIsPlaying());
  }

  get name() {
    return JukeBoxStateName.READY;
  }
}
