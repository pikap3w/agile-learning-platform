var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var QuizSchema = new mongoose.Schema({
  title: {
    type: String,
    default: '',
  },
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }]
}, {timestamps: true });

var Quiz = mongoose.model('Quiz', QuizSchema);
module.exports = Quiz;
