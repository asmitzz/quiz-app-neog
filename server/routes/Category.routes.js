const express = require('express');
const router = express.Router();
const { getQuestions,updateLeaderboard } = require("../controllers/Category.controllers");

router.route("/questions")
.get(getQuestions);

router.route("/leaderboard/:quizID")
.post(updateLeaderboard)

module.exports = router;