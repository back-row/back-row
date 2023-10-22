
INSERT INTO tutorial (tutorialDescription, tutorialHint)
VALUES
  ('The castle is designed like a labyrinth with narrow corridors and various interconnected rooms. Be prepared to explore and chart a path through this maze.
  Help the player find the "Princess". You must use the commands "hero.up()", "hero.down()", "hero.right()" and "hero.left()" to move the player one step in that direction. For example, to move the player one step to the right, use the command "hero.right()".',
  'Every command moves the player one step. You need to move the player 3 steps to the right, 4 steps down and 2 steps right to get to the princess.');

INSERT INTO tutorial (tutorialDescription, tutorialHint)
VALUES
  ('Help the player find the princess. You must use the commands "hero.up()", "hero.down()", "hero.right()" and "hero.left()" to move the player one step in that direction. For example, to move the player one step to the right, use the command "hero.right()".',
  'Every command moves the player one step. You will need to move the player 2 steps to the down,2 steps down to right and then 2 steps to up and repeat this pattern until you reach the princess.');

INSERT INTO tutorial (tutorialDescription, tutorialHint)
VALUES
  ('Help the player find the princess. You must use the commands "hero.up()", "hero.down()", "hero.right()" and "hero.left()" to move the player one step in that direction. For example, to move the player one step to the right, use the command "hero.right()".',
  'Every command moves the player one step. You will need to move the player 2 steps to the down,4 steps down to right, then 2 steps to up and 2 to right to get reach the princess.');

INSERT INTO tutorial (tutorialDescription, tutorialHint)
VALUES
  ('You find yourself in a grand medieval castle, on a quest to rescue the kidnapped princess. However, the entrance to her chamber is guarded by a fearsome executioner. To bribe the executioner and secure your path to the princess chamber, you must first collect a substantial amount of coins. You will need to gather them by moving to their locations and updating your coin count using the command: 
coin += 1 
Alternatively, you can increment the coin variable with: 
coin = coin + 1
The executioner is known to be easily swayed by the glint of gold. Once you have amassed the required number of coins, approach the intimidating executioner and present them as an offering with the bribe() function',
  'You need to collect 4 coins to bribe the executioner. You can do this by moving to the coins and updating the coin count using the command coin += 1. Alternatively, you can increment the coin variable with coin = coin + 1.');

INSERT INTO tutorial (tutorialDescription, tutorialHint)
VALUES
  ('To pass the spikes you need to lower by changing the variable "spikes" (const spikes = false;) to true. 
   You can do this by using the function:

   function hide(spikes) {
     spikes = true;
   }

   You can then call the function by using the command "hide()" and pass in the variable as a parameter.
   You can still use the move commands from previous levels to move the player.',
  'You need to call the function "hide()" and pass in the variable "spikes" as a parameter.');

