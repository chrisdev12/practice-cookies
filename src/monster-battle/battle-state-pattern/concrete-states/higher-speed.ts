import { Monster } from "../../interfaces/iMonster";
import { MonsterBattleState, MonstersMatch } from "../battleBaseState";
import { HigherAttackScenario } from "./higher-attack";

export class HigherSpeedScenario extends MonsterBattleState {
  public battleScenarioName = "HigherSpeedScenario";
  executeMatch(): void {
    if (this.isFightOver()) return;
    const match = this.fightMatch;
    if (match.first_monster.speed === match.second_monster.speed) {
      this.context.transitionTo(new HigherAttackScenario(this.fightMatch));
      return;
    }
    const { speeder, slower } = this.getSpeederFighter(match);
    const damage = this.damageCalculator(speeder.attack, slower.defense);
    this.applyDamage(damage, slower);
    this.context.transitionTo(new HigherAttackScenario(this.fightMatch));
  }

  public getSpeederFighter({ first_monster, second_monster }: MonstersMatch): {
    speeder: Monster;
    slower: Monster;
  } {
    const monsterOrderedBySpeed = [first_monster, second_monster].sort(
      (monsterA, monsterB) => monsterA.speed - monsterB.speed
    );
    console.log(monsterOrderedBySpeed);

    return {
      speeder: monsterOrderedBySpeed[1],
      slower: monsterOrderedBySpeed[0],
    };
  }
}
