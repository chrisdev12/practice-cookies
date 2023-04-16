export type MonsterLife = number;

export type MonsterId = number;

export interface Monster {
  id: MonsterId;
  speed: number;
  attack: number;
  defense: number;
  hp: MonsterLife; //Life
}
