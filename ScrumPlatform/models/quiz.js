var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var QuizSchema = new mongoose.Schema({
  title: {
    type: String,
    default: '',
  },
  questions: [{
    question: {
      type: String,
      default: '',
    },
    selected: {
        type: Number,
        default: -1,
    },
    answers: [{
        answer: {
          type: String,
          default: '',
        },
        correct: {
          type: Boolean,
          default: false,
        }
      }]
  }]
}, {timestamps: true });

var Quiz = mongoose.model('Quiz', QuizSchema);
module.exports = Quiz;
