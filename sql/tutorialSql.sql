
INSERT INTO tutorial (tutorialDescription, tutorialHint)
VALUES
  ('The castle is designed like a labyrinth with narrow corridors and various interconnected rooms. Be prepared to explore and chart a path through this maze.
  Help the player find the "Princess". You must use the commands "hero.up()", "hero.down()", "hero.right()" and "hero.left()" to move the player one step in that direction. For example, to move the player one step to the right, use the command "hero.right()".',
  'Every command moves the player one step. You need to move the player 3 steps to the right, 4 steps down and 2 steps right to get to the princess.');

INSERT INTO tutorial (tutorialDescription, tutorialHint)
VALUES
  ('Help the player find the treasure. You must use the commands "hero.up()", "hero.down()", "hero.right()" and "hero.left()" to move the player one step in that direction. For example, to move the player one step to the right, use the command "hero.right()".',
  'Every command moves the player one step. You need to move the player 2 steps to the right and 6 steps down to get to the treasure chest.');

INSERT INTO tutorial (tutorialDescription, tutorialHint)
VALUES
  ('Help the player find the treasure. You must use the commands "hero.up()", "hero.down()", "hero.right()" and "hero.left()" to move the player one step in that direction. For example, to move the player one step to the right, use the command "hero.right()".',
  'Every command moves the player one step. You need to move the player 2 steps to the right and 6 steps down to get to the treasure chest.');

INSERT INTO tutorial (tutorialDescription, tutorialHint)
VALUES
  ('Help the player find the treasure. You must use the commands "hero.up()", "hero.down()", "hero.right()" and "hero.left()" to move the player one step in that direction. For example, to move the player one step to the right, use the command "hero.right()".',
  'Every command moves the player one step. You need to move the player 2 steps to the right and 6 steps down to get to the treasure chest.');

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

