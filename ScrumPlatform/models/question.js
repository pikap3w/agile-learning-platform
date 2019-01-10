var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    default: '',
  },
  answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }]
}, {timestamps: true });

var Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;
