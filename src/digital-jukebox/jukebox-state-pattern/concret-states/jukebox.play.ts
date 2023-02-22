import { JukeBoxState, JukeBoxStateName } from "../jukeboxState";
import { JukeBoxIsPaused } from "./jukebox.pause";

export class JukeBoxIsPlaying extends JukeBoxState {
  public play(): void {
    this.playerContext.player.logger("Already playing");
  }

  public pause(): void {
    this.playerContext.player.stopPlayback();
    this.playerContext.changeState(new JukeBoxIsPaused());
  }
  public prevSong(): void {
    this.playerContext.player.previousSong();
  }

  public nextSong(): void {
    this.playerContext.player.nextSong();
  }

  get name() {
    return JukeBoxStateName.PLAYING;
  }
}
