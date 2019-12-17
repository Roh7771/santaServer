const mongoose = require('mongoose');

const anwerSchema = new mongoose.Schema(
  {
    answer: String,
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    }
  },
);

const Answer = mongoose.model('Answer', anwerSchema);
module.exports = Answer