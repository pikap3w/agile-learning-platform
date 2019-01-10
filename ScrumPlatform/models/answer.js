var mongoose = require('mongoose');

var AnswerSchema = new mongoose.Schema({
  answer: {
    type: String,
    default: '',
  },
  correct: {
    type: Boolean,
    default: false,
  }
}, {timestamps: true });

var Answer = mongoose.model('Answer', AnswerSchema);
module.exports = Answer;
