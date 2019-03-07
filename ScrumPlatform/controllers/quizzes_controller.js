// var Question = require('../models/question');
var Quiz = require('../models/quiz');

module.exports = {

  quizzes: function(req, res){
    Quiz.find({}).exec(function(err,quizzes){
      if(err){
            // respond with JSON
           res.json({err: err, quizzes: ""})
        }
        else {
            // respond with JSON
           res.json({err: "", quizzes: quizzes})
        }
    });
  },
  new: function(req, res){
    var quiz = new Quiz({title: req.body.title});
    quiz.save(function(err, quiz) {
      res.json({err: err, quiz: quiz});
    });
  },
  delete: function(req, res){
    Quiz.findByIdAndRemove(req.params.id, function(err,quiz){
      res.json({err: err, quiz: quiz});
    });

  },
  quiz_id: function(req, res){
    Quiz.findById(req.params.id, function(err,quiz){
      res.json({err: err, quiz: quiz});
    });
  },
  quiz_update_id: function(req, res){
    Quiz.findOneAndUpdate({_id:req.params.id}, {$set: {title: req.body.title}}, function(err,quiz){
      res.json({err: err, quiz: quiz});
    });
  }
  // question: function(req, res){
  //   // console.log(req.body);
  //   var new_question = new Question({name: req.body.name, content: req.body.content});
  //   new_question.save(function(err, question) {
  //     if (err) {
  //       console.log('There is an error: ', err);
  //       for(var key in err.errors){
  //         req.flash('quiz', err.errors[key].quiz);
  //       }
  //       res.redirect('/');
  //     }
  //     else {
  //       Quiz.findById({_id: req.body.quiz_id}, function(err, quiz) {
  //         if (err) {
  //           for(var key in err.errors){
  //             req.flash('quiz', err.errors[key].quiz);
  //           }
  //           res.redirect('/');
  //         }
  //         else {
  //           quiz.questions.push(question);
  //           quiz.save();
  //           res.redirect('/');
  //         }
  //       });


  //     }
  //   });
  // },

}
