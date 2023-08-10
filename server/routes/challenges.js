const express = require("express");

const {
  getChallenges,
  getChallenge,
  createChallenge,
  deleteChallenge,
  updateChallenge,
} = require("../controllers/challengeController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.use(requireAuth);

router.get("/", getChallenges);

router.get("/:id", getChallenge);

router.post("/", createChallenge);

router.delete("/:id", deleteChallenge);

router.put("/:id", updateChallenge);

module.exports = router;
