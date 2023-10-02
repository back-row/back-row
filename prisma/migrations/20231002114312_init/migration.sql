-- CreateTable
CREATE TABLE "map" (
    "mapid" SERIAL NOT NULL,
    "mapmap" INTEGER,
    "mapdifficulty" INTEGER,
    "mapquizid" INTEGER,
    "maptutorialid" INTEGER,

    CONSTRAINT "map_pkey" PRIMARY KEY ("mapid")
);

-- CreateTable
CREATE TABLE "quiz" (
    "quizid" SERIAL NOT NULL,
    "quizquestion" VARCHAR(255),
    "quizanswer1" VARCHAR(255),
    "quizanswer2" VARCHAR(255),
    "quizanswer3" VARCHAR(255),
    "quizcorrectanswer" INTEGER,

    CONSTRAINT "quiz_pkey" PRIMARY KEY ("quizid")
);

-- CreateTable
CREATE TABLE "tutorial" (
    "tutorialid" SERIAL NOT NULL,
    "tutorialdescription" VARCHAR(255),
    "tutorialhint" VARCHAR(255),

    CONSTRAINT "tutorial_pkey" PRIMARY KEY ("tutorialid")
);

-- CreateTable
CREATE TABLE "users" (
    "usersid" SERIAL NOT NULL,
    "usersname" VARCHAR(255),
    "usersemail" VARCHAR(255),
    "userspassword" VARCHAR(255),
    "userstotalscore" INTEGER,
    "userslevel" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("usersid")
);

-- CreateTable
CREATE TABLE "userscore" (
    "userscoreid" SERIAL NOT NULL,
    "userscoreusersid" INTEGER,
    "userscoremapid" INTEGER,
    "userscorescore" INTEGER,

    CONSTRAINT "userscore_pkey" PRIMARY KEY ("userscoreid")
);

-- AddForeignKey
ALTER TABLE "map" ADD CONSTRAINT "map_mapquizid_fkey" FOREIGN KEY ("mapquizid") REFERENCES "quiz"("quizid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "map" ADD CONSTRAINT "map_maptutorialid_fkey" FOREIGN KEY ("maptutorialid") REFERENCES "tutorial"("tutorialid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userscore" ADD CONSTRAINT "userscore_userscoremapid_fkey" FOREIGN KEY ("userscoremapid") REFERENCES "map"("mapid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userscore" ADD CONSTRAINT "userscore_userscoreusersid_fkey" FOREIGN KEY ("userscoreusersid") REFERENCES "users"("usersid") ON DELETE NO ACTION ON UPDATE NO ACTION;
