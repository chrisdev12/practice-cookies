import { Monster } from "../interfaces/iMonster";
import { BattleContext } from "./battleContext";

export interface MonstersMatch {
  first_monster: Monster;
  second_monster: Monster;
}

export abstract class MonsterBattleState {
  protected context!: BattleContext;
  abstract battleScenarioName: string;

  constructor(public fightMatch: MonstersMatch) {}

  public setContext(context: BattleContext) {
    this.context = context;
  }

  abstract executeMatch(): void;

  protected damageCalculator(attack: number, defense: number): number {
    if (defense >= attack) return 1;
    return attack - defense;
  }

  protected applyDamage(damage: number, monster: Monster): void {
    const newHp = monster.hp - damage;
    if (newHp < -1) {
      monster.hp = 0;
      return;
    }

    monster.hp = newHp;
  }

  public isFightOver(): boolean {
    const { first_monster, second_monster } = this.fightMatch;
    if (first_monster.hp === 0 || second_monster.hp === 0) return true;

    return false;
  }

  get winner(): Monster {
    if (!this.isFightOver()) throw Error("Match not finished yet");
    const { first_monster, second_monster } = this.fightMatch;
    if (first_monster.hp === 0) return second_monster;

    return first_monster;
  }
}
