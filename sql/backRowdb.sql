CREATE TABLE IF NOT EXISTS users(
	usersId SERIAL PRIMARY KEY,
	usersName VARCHAR(255) NOT NULL UNIQUE,
	usersEmail VARCHAR(255) NOT NULL UNIQUE,
	usersPassword VARCHAR(255) NOT NULL,
	usersTotalScore INT,
	usersLevel INT,
	usersImage VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS quiz(
	quizId SERIAL PRIMARY KEY,
	quizQuestion TEXT
);

CREATE TABLE IF NOT EXISTS tutorial(
	tutorialId SERIAL PRIMARY KEY,
	tutorialDescription TEXT,
	tutorialHint TEXT
);

CREATE TABLE IF NOT EXISTS map(
	mapId SERIAL PRIMARY KEY,
	mapDifficulty INT,
	mapIsQuiz BOOLEAN,
	mapEndLocationX INT,
	mapEndLocationY INT,
  mapStartLocationX INT,
  mapStartLocationY INT,
  mapJSON TEXT,
	mapQuizId INT REFERENCES quiz(quizId),
	mapTutorialId INT REFERENCES tutorial(tutorialId)
);

CREATE TABLE IF NOT EXISTS userScore (
	userScoreId SERIAL PRIMARY KEY,
	userScoreUsersId INT REFERENCES users(usersId),
	userScoreMapId INT REFERENCES map(mapId),
	userScoreScore INT
);
	






