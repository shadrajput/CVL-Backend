/*
  Warnings:

  - You are about to drop the column `fouls` on the `match_players` table. All the data in the column will be lost.
  - You are about to drop the column `team_1_fouls` on the `match_quarters` table. All the data in the column will be lost.
  - You are about to drop the column `team_2_fouls` on the `match_quarters` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "match_players" DROP COLUMN "fouls";

-- AlterTable
ALTER TABLE "match_quarters" DROP COLUMN "team_1_fouls",
DROP COLUMN "team_2_fouls";
