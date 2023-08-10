const Challenge = require("../models/chalModel");

const mongoose = require("mongoose");

//get all challenges
const getChallenges = async (req, res) => {
  const user_id = req.user._id;
  const challenges = await Challenge.find({ user_id }).sort({ createdat: -1 });
  res.status(200).json(challenges);
};

//get a single challenge
const getChallenge = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such challenge" });
  }
  const challenge = await Challenge.findById(id);

  if (!challenge) {
    return res.status(404).json({ error: "No such challenge" });
  }
  res.status(200).json(challenge);
};

const createChallenge = async (req, res) => {
  const { title, language, level, completed, rating, note } = req.body;

  try {
    const user_id = req.user._id;
    const challenge = await Challenge.create({
      title,
      language,
      level,
      completed,
      rating,
      note,
      user_id,
    });
    res.status(200).json(challenge);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a challenge
const deleteChallenge = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout" });
  }

  const challenge = await Challenge.findOneAndDelete({ _id: id });

  if (!challenge) {
    return res.status(400).json({ error: "No such challenge" });
  }
  res.status(200).json(challenge);
};

//update a challenge
const updateChallenge = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such challenge" });
  }
  const challenge = await Challenge.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );
  if (!challenge) {
    return res.status(400).json({ error: "No such challenge" });
  }
  res.status(200).json(challenge);
};

module.exports = {
  getChallenges,
  getChallenge,
  createChallenge,
  deleteChallenge,
  updateChallenge,
};
