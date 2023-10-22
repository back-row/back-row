INSERT INTO quiz (quizQuestion)
VALUES
    ('{
    "question": "Which combination of commands makes the player move to the princess?",
    "choice1": "down, down, right, right, up",
    "answer1": ["down", "down", "right", "right", "up"],
    "choice2": "right, right, right, down, down, down, down, left, left",
    "answer2": ["right", "right", "right", "down", "down", "down", "down", "left", "left"],
    "choice3": "right, right, down, right, right, down, up, right, right, right",
    "answer3": ["right", "right", "down", "right", "right", "down", "up", "right", "right", "right"]
  }');

  INSERT INTO quiz (quizQuestion)
VALUES
  ('{"question": "Which combination of commands makes the player move to the princess?",
      "choice1": "down , down, down, down, down, right and so one repeating  ",
      "answer1": ["down","down","down","down","down","right","right","right","up","left"],
      "choice2":"down, up, right, right, right, right, down,up  and so one repeating ",
      "answer2":["down","up","right","right","right","right","down","left"],
      "choice3":"down, down, right, right, up, up, right and so one repeating ",
      "answer3":["down", "down", "right", "right", "up", "up", "right", "right", "down", "down", "right", "right", "up", "up", "right", "right", "down", "down", "down", "down", "down", "left", "left", "up", "up", "left", "left", "down", "down", "left", "left", "up", "up", "left", "left", "down", "down"]}'
       );

  INSERT INTO quiz (quizQuestion)
VALUES
   ('{"question": "Which combination of commands makes the player move to the princess?",
      "choice1": "down, down, right, up, right, left, up, right, right, up, up, right  ",
      "answer1": ["down", "down", "right", "up", "left", "right", "up", "right", "right", "up","up","right"],
      "choice2":"down, down, right, right, right, right, up, right, right, up, up, right",
      "answer2": ["down", "down", "right", "right", "right", "right", "up", "right", "right", "up","up","right"] ,
      "choice3":"down, down, right, right, up, right, right, right, right, up, up, right",
       "answer3": ["down", "down", "right", "right", "up", "right", "right", "right", "right", "up","up","right"] 
       }'
       );
  INSERT INTO quiz (quizQuestion)
VALUES
  ('{"question": "Which combination of commands makes the player move to the treasure princess?", "choice1": "down , down, down, down, down, right , right , right , up , left", "answer1": ["down","down","down","down","down","right","right","right","up","left"], "choice2":"down, up, right, right, right, right, down, left","answer2":["down","up","right","right","right","right","down","left"], "choice3":"right, down, right, down, down, down, down, down", "answer3":["right","down","right","down","down", "down","down", "down"]}');

 INSERT INTO quiz (quizQuestion)
VALUES
  ('{
    "question": "Which combination of commands makes the player move to the princess?",
    "choice1": "down, hide(), right, right, up",
    "answer1": ["down", "hide()", "right", "right", "up"],
    "choice2": "hide(), right, right, right, right",
    "answer2": ["hide()", "right", "right", "right", "right"],
    "choice3": "right, right, hide(spikes), right, right, down, up, right, right, right",
    "answer3": ["right", "right", "hide(spikes)", "right", "right", "down", "up", "right", "right", "right"]
  }');
