INSERT INTO map (mapEndLocationx, mapEndLocationy, mapstartlocationx, mapstartlocationy, mapJSON, mapQuizId, mapTutorialId)
VALUES
  (230, 475, 80, 90, 'mapOne', (SELECT quizid from quiz WHERE quizid=1), (SELECT tutorialId from tutorial WHERE tutorialId=1));

INSERT INTO map (mapEndLocationx, mapEndLocationy, mapstartlocationx, mapstartlocationy, mapJSON, mapQuizId, mapTutorialId)
VALUES
  (40, 525, 40, 90, 'mapTwo', (SELECT quizid from quiz WHERE quizid=2), (SELECT tutorialId from tutorial WHERE tutorialId=2));

INSERT INTO map (mapEndLocationx, mapEndLocationy, mapstartlocationx, mapstartlocationy, mapJSON, mapQuizId, mapTutorialId)
VALUES
  (785, 205, 80, 250, 'mapThree', (SELECT quizid from quiz WHERE quizid=3), (SELECT tutorialId from tutorial WHERE tutorialId=3));

INSERT INTO map (mapEndLocationx, mapEndLocationy, mapstartlocationx, mapstartlocationy, mapJSON, mapQuizId, mapTutorialId)
VALUES
  (400, 50, 400, 455, 'mapFour', (SELECT quizid from quiz WHERE quizid=4), (SELECT tutorialId from tutorial WHERE tutorialId=4));

INSERT INTO map (mapEndLocationx, mapEndLocationy, mapstartlocationx, mapstartlocationy, mapJSON, mapQuizId, mapTutorialId)
VALUES
  (695, 280, 71, 291, 'mapFive', (SELECT quizid from quiz WHERE quizid=5), (SELECT tutorialId from tutorial WHERE tutorialId=5));

INSERT INTO map (mapEndLocationx, mapEndLocationy, mapstartlocationx, mapstartlocationy, mapJSON, mapQuizId, mapTutorialId)
VALUES
  (560, 490, 80, 40, 'mapSix', (SELECT quizid from quiz WHERE quizid=6), (SELECT tutorialId from tutorial WHERE tutorialId=6));
