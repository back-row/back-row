INSERT INTO map (mapEndLocationColumn, mapEndLocationRow, mapQuizId, mapTutorialId)
VALUES
  (3, 7, (SELECT quizid from quiz WHERE quizid=1), (SELECT tutorialId from tutorial WHERE tutorialId=1));
