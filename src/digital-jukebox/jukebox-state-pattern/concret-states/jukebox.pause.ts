import { JukeBoxState, JukeBoxStateName } from "../jukeboxState";
import { JukeBoxIsReady } from "./jukebox.ready";

export class JukeBoxIsPaused extends JukeBoxState {
  public disabledOptionIfPausedMessage =
    "Not enabled option when player is paused";

  public play(): void {
    this.playerContext.player.logger(this.disabledOptionIfPausedMessage);
  }

  public pause(): void {
    this.playerContext.changeState(new JukeBoxIsReady());
  }

  public prevSong(): void {
    this.playerContext.player.logger(this.disabledOptionIfPausedMessage);
  }

  public nextSong(): void {
    this.playerContext.player.logger(this.disabledOptionIfPausedMessage);
  }

  get name() {
    return JukeBoxStateName.PAUSE;
  }
}
