import { Monster } from "../interfaces/iMonster";
import { MonsterBattleState } from "./battleBaseState";

export class BattleContext {
  constructor(protected state: MonsterBattleState) {
    this.state.setContext(this);
    this.transitionTo(state);
  }

  public transitionTo(state: MonsterBattleState): void {
    console.log(`transitig to ${state.battleScenarioName}`);
    this.state = state;
    this.state.setContext(this);
  }

  public play(): Monster {
    let isMatchOver = this.state.isFightOver();
    do {
      this.state.executeMatch();
      isMatchOver = this.state.isFightOver();
    } while (!isMatchOver);

    return this.state.winner;
  }
}
