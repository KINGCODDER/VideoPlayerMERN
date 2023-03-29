const mongoose = require("mongoose");
// const {Schema} = require(mon

const VideoSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  upload_date: {
    type: String,
    default: Date.now(),
  },
  likes: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    required: [true, "A video should have a Title"],
  },
  description: {
    type: String,
    required: [true, "A video should have some description"],
  },
  thumbnail: {
    type: String,
    required: [true, "A video should have a thumbnail"],
  },
});

const Video = mongoose.model("Videos", VideoSchema);

module.exports = Video;
