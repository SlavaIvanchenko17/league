CREATE TABLE "teams"(
"id" serial,
"name" varchar(64) NOT NULL,
"goalScored" integer DEFAULT 0,
"goalСonceded" integer DEFAULT 0,
"points" integer DEFAULT 0);

CREATE TABLE "matches"(
"id" serial,
"homeTeam" integer NOT NULL,
"guestTeam" integer NOT NULL);

ALTER TABLE "teams" ADD CONSTRAINT "pkTeams" PRIMARY KEY("id");
ALTER TABLE "matches" ADD CONSTRAINT "pkMatches" PRIMARY KEY("id");

ALTER TABLE "matches" ADD CONSTRAINT "fkMatchHome" FOREIGN KEY ("homeTeam") 
REFERENCES "teams" ("id") ON DELETE CASCADE;

ALTER TABLE "matches" ADD CONSTRAINT "fkMatchGuest" FOREIGN KEY ("guestTeam") 
REFERENCES "teams" ("id") ON DELETE CASCADE;