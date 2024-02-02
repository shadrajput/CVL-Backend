const express = require("express");
const {
  httpTeamRegister,
  httpGetAllTeams,
  httpGetTeamDetailById,
  httpUpdateTeam,
  httpGetTeamByUserId,
  httpPostTournament,
  httpEditMatchPlayers
} = require("./team.controller");
const {
  isAuthenticatedUser,
  isAuthTeamManager,
} = require("../../middlewares/auth");

const teamRouter = express.Router();

teamRouter.post("/registration", isAuthenticatedUser, httpTeamRegister);
teamRouter.get("/list/:page&:TeamName", isAuthenticatedUser, httpGetAllTeams);
teamRouter.get("/user/:userId", isAuthenticatedUser, httpGetTeamByUserId);
teamRouter.put(
  "/update/:team_id",
  isAuthenticatedUser,
  isAuthTeamManager,
  httpUpdateTeam
);
teamRouter.post(
  "/tournament/register",
  isAuthenticatedUser,
  httpPostTournament
);
teamRouter.get("/detail/:id", isAuthenticatedUser, httpGetTeamDetailById);
teamRouter.post('/edit-match-players/:team_id', isAuthenticatedUser, isAuthTeamManager, httpEditMatchPlayers)

module.exports = teamRouter;
