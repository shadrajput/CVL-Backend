-- AlterTable
ALTER TABLE "match_score" ALTER COLUMN "player_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "players" ALTER COLUMN "playing_position" DROP NOT NULL,
ALTER COLUMN "jersey_no" DROP NOT NULL,
ALTER COLUMN "about" DROP NOT NULL;
