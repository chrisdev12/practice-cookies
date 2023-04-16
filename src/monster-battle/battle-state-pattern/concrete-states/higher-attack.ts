import { Monster } from "../../interfaces/iMonster";
import { MonsterBattleState, MonstersMatch } from "../battleBaseState";
import { HigherSpeedScenario } from "./higher-speed";

export class HigherAttackScenario extends MonsterBattleState {
  public battleScenarioName = "HigherAttackScenario";
  executeMatch(): void {
    if (this.isFightOver()) return;
    const match = this.fightMatch;
    if (match.first_monster.attack === match.second_monster.attack) {
      throw new Error("Characters have the same features. Match over");
    }
    const { stronger, weakness } = this.getStrongerFighter(match);
    const damage = this.damageCalculator(stronger.attack, weakness.defense);
    this.applyDamage(damage, weakness);
    this.context.transitionTo(new HigherSpeedScenario(this.fightMatch));
  }

  public getStrongerFighter({ first_monster, second_monster }: MonstersMatch): {
    stronger: Monster;
    weakness: Monster;
  } {
    const monsterOrderedByAttack = [first_monster, second_monster].sort(
      (monsterA, monsterB) => monsterA.attack - monsterB.attack
    );
    console.log(monsterOrderedByAttack);

    return {
      stronger: monsterOrderedByAttack[1],
      weakness: monsterOrderedByAttack[0],
    };
  }
}
