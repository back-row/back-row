INSERT INTO map (mapEndLocationx, mapEndLocationy, mapstartlocationx, mapstartlocationy, mapJSON, mapQuizId, mapTutorialId)
VALUES
  (230, 400, 80, 90, 'mapOne', (SELECT quizid from quiz WHERE quizid=1), (SELECT tutorialId from tutorial WHERE tutorialId=1));

INSERT INTO map (mapEndLocationx, mapEndLocationy, mapstartlocationx, mapstartlocationy, mapJSON, mapQuizId, mapTutorialId)
VALUES
  (40, 525, 40, 90, 'mapTwo', (SELECT quizid from quiz WHERE quizid=1), (SELECT tutorialId from tutorial WHERE tutorialId=1));

INSERT INTO map (mapEndLocationx, mapEndLocationy, mapstartlocationx, mapstartlocationy, mapJSON, mapQuizId, mapTutorialId)
VALUES
  (230, 400, 80, 90, 'mapOne', (SELECT quizid from quiz WHERE quizid=1), (SELECT tutorialId from tutorial WHERE tutorialId=1));
