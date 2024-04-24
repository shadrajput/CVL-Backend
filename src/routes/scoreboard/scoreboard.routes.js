const express = require("express");
const {
  startMatch,
  addScore,
  changeQuarter,
  undoScore,
  endMatch,
  isAuthScorekeeper
} = require("./scoreboard.controller");
const { verifyScorekeeper } = require("../../middlewares/auth");

const router = express.Router();

router.get("/auth-scorekeeper/:match_id/:token", verifyScorekeeper, isAuthScorekeeper);
router.put("/start-match/:match_id/:token", verifyScorekeeper, startMatch);
router.put("/add-score/:match_id/:token", verifyScorekeeper, addScore);
router.put("/change-quarter/:match_id/:token", verifyScorekeeper, changeQuarter);
router.put("/undo-score/:match_id/:token", verifyScorekeeper, undoScore);
router.put("/end-match/:match_id/:token", verifyScorekeeper, endMatch);

module.exports = router;
