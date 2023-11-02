
INSERT INTO tutorial (tutorialDescription, tutorialHint,tutorialDescriptionSe,tutorialHintSe)
VALUES
  ('The castle is designed like a labyrinth with narrow corridors and various interconnected rooms. Be prepared to explore and chart a path through this maze.
  Help the player find the "Princess". You must use the commands "hero.up()", "hero.down()", "hero.right()" and "hero.left()" to move the player one step in that direction. For example, to move the player one step to the right, use the command "hero.right()".',
  'Every command moves the player one step. You need to move the player 3 steps to the right, 4 steps down and 2 steps right to get to the princess.',
  'Slottet är designat som en labyrint med smala korridorer och olika sammanlänkade rum. Var beredd att utforska och kartlägga en väg genom denna labyrint.
Hjälp spelaren att hitta "Prinsessan". Du måste använda kommandona "hero.up()", "hero.down()", "hero.right()" och "hero.left()" för att flytta spelaren ett steg åt det hållet. Till exempel, för att flytta spelaren ett steg åt höger, använd kommandot "hero.right()".',
'Varje kommando flyttar spelaren ett steg. Du behöver flytta spelaren 3 steg åt höger, 4 steg ner och 2 steg åt höger för att nå prinsessan.');

INSERT INTO tutorial (tutorialDescription, tutorialHint,tutorialDescriptionSe,tutorialHintSe)
VALUES
  ('Help the player find the princess. You must use the commands "hero.up()", "hero.down()", "hero.right()" and "hero.left()" to move the player one step in that direction. For example, to move the player one step to the right, use the command "hero.right()".',
  'Every command moves the player one step. You will need to move the player 2 steps to the down,2 steps down to right and then 2 steps to up and repeat this pattern until you reach the princess.',
  'Hjälp spelaren att hitta prinsessan. Du måste använda kommandona "hero.up()", "hero.down()", "hero.right()" och "hero.left()" för att flytta spelaren ett steg åt det hållet. Till exempel, för att flytta spelaren ett steg åt höger, använd kommandot "hero.right()".',
  'Varje kommando flyttar spelaren ett steg. Du kommer att behöva flytta spelaren 2 steg ner, 2 steg ner åt höger och sedan 2 steg upp, och upprepa detta mönster tills du når prinsessan.');

INSERT INTO tutorial (tutorialDescription, tutorialHint,tutorialDescriptionSe,tutorialHintSe)
VALUES
  ('Help the player find the princess. You must use the commands "hero.up()", "hero.down()", "hero.right()" and "hero.left()" to move the player one step in that direction. For example, to move the player one step to the right, use the command "hero.right()".',
  'Every command moves the player one step. You will need to move the player 2 steps to the down,4 steps down to right, then 2 steps to up and 2 to right to get reach the princess.',
  'Hjälp spelaren att hitta prinsessan. Du måste använda kommandona "hero.up()", "hero.down()", "hero.right()" och "hero.left()" för att flytta spelaren ett steg åt det hållet. Till exempel, för att flytta spelaren ett steg åt höger, använd kommandot "hero.right()".',
  'Varje kommando flyttar spelaren ett steg. Du kommer att behöva flytta spelaren 2 steg ner, 2 steg ner åt höger och sedan 2 steg upp, och upprepa detta mönster tills du når prinsessan.'  );

INSERT INTO tutorial (tutorialDescription, tutorialHint,tutorialDescriptionSe,tutorialHintSe)
VALUES
  ('You find yourself in a grand medieval castle, on a quest to rescue the kidnapped princess. However, the entrance to her chamber is guarded by a fearsome executioner. To bribe the executioner and secure your path to the princess chamber, you must first collect a substantial amount of coins. You will need to gather them by moving to their locations and updating your coin count using the command: 
coin += 1 
Alternatively, you can increment the coin variable with: 
coin = coin + 1
The executioner is known to be easily swayed by the glint of gold. Once you have amassed the required number of coins, approach the intimidating executioner and present them as an offering with the bribe() function',
  'You need to collect 4 coins to bribe the executioner. You can do this by moving to the coins and updating the coin count using the command coin += 1. Alternatively, you can increment the coin variable with coin = coin + 1.',
  'Du befinner dig i en storslagen medeltida borg, på ett uppdrag att rädda den kidnappade prinsessan. Dock är ingången till hennes kammare bevakad av en fruktansvärd bödel. För att muta bödeln och säkra din väg till prinsessans kammare måste du först samla in en betydande mängd mynt. Du kommer att behöva samla dem genom att röra dig till deras platser och uppdatera din mynt räkning med hjälp av kommandot:

coin += 1

Alternativt kan du öka myntvariabeln med:

coin = coin + 1

Bödeln är känd för att lätt påverkas av glansen av guld. När du har samlat det nödvändiga antalet mynt, närma dig den skrämmande bödeln och presentera dem som ett offer med hjälp av bribe() funktionen.',
'Du behöver samla 4 mynt för att muta bödeln. Du kan göra detta genom att röra dig till mynten och uppdatera mynträkningen med kommandot coin += 1. Alternativt kan du öka myntvariabeln med coin = coin + 1.');

INSERT INTO tutorial (tutorialDescription, tutorialHint, tutorialDescriptionSe,tutorialHintSe)
VALUES
  ('To pass the spikes you need to lower by changing the variable "spikes" (const spikes = false;) to true. 
   You can do this by using the function:

   function hide(spikes) {
     spikes = true;
   }

   You can then call the function by using the command "hide()" and pass in the variable as a parameter.
   You can still use the move commands from previous levels to move the player.',
  'You need to call the function "hide()" and pass in the variable "spikes" as a parameter.',
  'För att passera spikarna måste du ändra variabeln "spikes" (const spikes = false;) till true.
Du kan göra detta genom att använda funktionen:
function hide(spikes) {
     spikes = true;
   }
   Du kan sedan anropa funktionen genom att använda kommandot "hide()" och skicka in variabeln som en parameter.
Du kan fortfarande använda rörelsekommandona från tidigare nivåer för att flytta spelaren.',
'Du behöver anropa funktionen "hide()" och skicka in variabeln "spikes" som en parameter.');

INSERT INTO tutorial (tutorialDescription, tutorialHint,tutorialDescriptionSe,tutorialHintSe)
VALUES
  ('To help the player find the princess, we will use a programming construct called a for loop. In our program, the loop will look like this: 
  loop(2){
     Move the hero down here.
     Move the hero right here.
  }',
  'In this game, each command you give moves the player one step. To find the princess, you will need to use a for loop. Inside the loop, you should repeat the commands move hero down and move hero right in this order.',
  'För att hjälpa spelaren att hitta prinsessan kommer vi att använda en programmeringskonstruktion som kallas en for-loop. 
  I vårt program kommer loopen att se ut så här:
  loop(2){
      Flytta hjälten ned.
      Flytta hjälten höger.
  }',
  'I det här spelet flyttar varje kommando du ger spelaren ett steg. För att hitta prinsessan
   behöver du använda en for-loop. Inuti loopen bör du upprepa kommandona flytta hjälten nedåt och 
   flytta hjälten åt höger i den här ordningen.');

INSERT INTO tutorial (tutorialDescription, tutorialHint,tutorialDescriptionSe,tutorialHintSe)
VALUES
  ('Help the player find the princess. You must use the commands "hero.up()", "hero.down()", "hero.right()" and "hero.left()" to move the player one step in that direction. For example, to move the player one step to the right, use the command "hero.right()".',
  'Every command moves the player one step. You will need to move the player 2 steps to the down,4 steps down to right, then 2 steps to up and 2 to right to get reach the princess.',
  'Hjälp spelaren att hitta prinsessan. Du måste använda kommandona "hero.up()", "hero.down()", "hero.right()" och "hero.left()" för att flytta spelaren ett steg åt det hållet. Till exempel, för att flytta spelaren ett steg åt höger, använd kommandot "hero.right()".',
  'Varje kommando flyttar spelaren ett steg. Du kommer att behöva flytta spelaren 2 steg ner, 2 steg ner åt höger och sedan 2 steg upp, och upprepa detta mönster tills du når prinsessan.'  );

