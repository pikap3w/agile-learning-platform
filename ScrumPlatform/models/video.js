var mongoose = require('mongoose');

var VideoSchema = new mongoose.Schema({
    title: {
        type: String,
        default: '',
      },
    url: {
        type: String,
        default: '',
    },
}, {timestamps: true });

var Video = mongoose.model('Video', VideoSchema);
module.exports = Video;
