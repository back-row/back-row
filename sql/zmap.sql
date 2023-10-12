INSERT INTO map (mapEndLocationx, mapEndLocationy, mapQuizId, mapTutorialId)
VALUES
  (230, 400, (SELECT quizid from quiz WHERE quizid=1), (SELECT tutorialId from tutorial WHERE tutorialId=1));
  

INSERT INTO map (mapEndLocationx, mapEndLocationy, mapQuizId, mapTutorialId)
VALUES
  (400, 400, (SELECT quizid from quiz WHERE quizid=1), (SELECT tutorialId from tutorial WHERE tutorialId=1));


  INSERT INTO map (mapEndLocationx, mapEndLocationy, mapQuizId, mapTutorialId)
VALUES
  (600, 300, (SELECT quizid from quiz WHERE quizid=1), (SELECT tutorialId from tutorial WHERE tutorialId=1));
