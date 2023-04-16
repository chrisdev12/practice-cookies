import { MonstersMatch } from "./battle-state-pattern/battleBaseState";
import { BattleContext } from "./battle-state-pattern/battleContext";
import { HigherSpeedScenario } from "./battle-state-pattern/concrete-states/higher-speed";

const monsterGame = (fightRequest: MonstersMatch) => {
  const monsterBattleInitScenario = new HigherSpeedScenario(fightRequest);
  const battleContext = new BattleContext(monsterBattleInitScenario);
  const winner = battleContext.play();

  return winner;
};

const fightRequest: MonstersMatch = {
  first_monster: {
    id: 1,
    hp: 50,
    attack: 10,
    defense: 6,
    speed: 10,
  },
  second_monster: {
    id: 2,
    hp: 50,
    attack: 15,
    defense: 5,
    speed: 9,
  },
};

const winner = monsterGame(fightRequest);
console.log("The winner monster is", winner);
