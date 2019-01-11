var Video = require('../models/video');

module.exports = {

  videos: function(req, res){
    Video.find({}, function(err,videos){
      res.json({err: err, videos: videos});
    });
  },
  new: function(req, res){
    var video = new Video({title: req.body.title});
    video.save(function(err, video) {
      res.json({err: err, video: video});
    });
  },
  delete: function(req, res){
    Video.findByIdAndRemove(req.params.id, function(err,video){
      res.json({err: err, video: video});
    });
    
  },
  video_id: function(req, res){
    Video.findById(req.params.id, function(err,video){
      res.json({err: err, video: video});
    });
  },
  video_update_id: function(req, res){
    Video.findOneAndUpdate({_id:req.params.id}, {$set: {title: req.body.title}}, function(err,video){
      res.json({err: err, video: video});
    });
  }
}