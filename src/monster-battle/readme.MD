### Battle Algorithm

For calculating the battle algorithm, we should take into account the flow below:

- The monster making the first attack has the highest speed; if both speeds are equal, the monster with the higher attack starts.
- For calculating the damage, subtract the defense from the attack `(attack - defense)`; the difference is the damage; if the attack is equal to or lower than the defense, the damage is 1.
- Subtract the damage from the HP `(HP = HP - damage)`.
- The battle has many turns until one monster wins, and all turns should be calculated in the same request, which means that with only one request to the battle endpoint, you should receive the winner data.
- Who wins the battle is the monster who subtracted the enemy’s HP to zero.
