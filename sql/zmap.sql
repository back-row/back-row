INSERT INTO map (mapEndLocationColumn, mapEndLocationRow, mapQuizId)
VALUES
  (3, 7, (SELECT quizid from quiz WHERE quizid=1));
