const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const challengeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    completed: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    note: {
      type: String,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Challenge", challengeSchema);
