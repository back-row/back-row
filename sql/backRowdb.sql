CREATE TABLE IF NOT EXISTS users(
	usersId SERIAL PRIMARY KEY,
	usersName VARCHAR(255) NOT NULL UNIQUE,
	usersEmail VARCHAR(255) NOT NULL UNIQUE,
	usersPassword VARCHAR(255) NOT NULL,
	usersTotalScore INT,
	usersLevel INT
);

CREATE TABLE IF NOT EXISTS quiz(
	quizId SERIAL PRIMARY KEY,
	quizQuestion VARCHAR(255),
	quizAnswer1 VARCHAR(255),
	quizAnswer2 VARCHAR(255),
	quizAnswer3 VARCHAR(255),
	quizCorrectAnswer INT
);

CREATE TABLE IF NOT EXISTS tutorial(
	tutorialId SERIAL PRIMARY KEY,
	tutorialDescription VARCHAR(255),
	tutorialHint VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS map(
	mapId SERIAL PRIMARY KEY,
	mapMap INT,
	mapDifficulty INT,
	mapIsQuiz BOOLEAN,
	mapEndLocationRow INT,
	mapEndLocationColumn INT,
	mapQuizId INT REFERENCES quiz(quizId),
	mapTutorialId INT REFERENCES tutorial(tutorialId)
);

CREATE TABLE IF NOT EXISTS userScore (
	userScoreId SERIAL PRIMARY KEY,
	userScoreUsersId INT REFERENCES users(usersId),
	userScoreMapId INT REFERENCES map(mapId),
	userScoreScore INT
);
	






