import { sleep } from "../utils/await.util";
import { JukeBoxIsReady } from "./jukebox-state-pattern/concret-states/jukebox.ready";
import { JukeboxContext } from "./jukebox-state-pattern/jukeboxContext";
import { SongRepository } from "./repository/songRepository";
import { DefaultAudioPlayer } from "./service/jukeBoxPlayer";

//Jukebox client
const init = async () => {
  try {
    const songRepository = new SongRepository();
    const jukeboxPlayer = new DefaultAudioPlayer(songRepository);
    const initState = new JukeBoxIsReady();
    const jukeboxContext = new JukeboxContext(initState, jukeboxPlayer);
    jukeboxContext.on();

    await sleep(5000);
    jukeboxContext.play();
    await sleep(5000);
    jukeboxContext.nextSong();
    await sleep(5000);
    jukeboxContext.prevSong();
    await sleep(5000);
    jukeboxContext.pause();
    await sleep(5000);
    console.log(jukeboxContext.isPlayerPaused);
    await sleep(5000);
    jukeboxContext.pause();
    await sleep(5000);
    jukeboxContext.nextSong();
    await sleep(5000);
    jukeboxContext.pause();
    await sleep(5000);
    jukeboxContext.play();
  } catch (err: unknown) {
    console.error(err);
  }
};

init();
