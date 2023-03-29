const Video = require("../Models/videoModel");
const User = require("../Models/userModel");

exports.getAllVideos = async (req, res) => {
  const result = await Video.find({});

  res
    .status(200)
    .json({ status: "success", results: result.length, data: result });
};

exports.createVideo = async (req, res) => {
  try {
    const result = await Video.create(req.body);

    res.status(200).json({ status: "success", data: result });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.deleteVideo = async (req, res) => {
  await Video.findByIdAndDelete(req.params.id);

  res.status(201).json({ status: "success" });
};

exports.updateLike = async (req, res) => {
  try {
    if (!req.user) {
      res.status(404).json({ status: "fail", message: "User not logged in" });
    }
    const videoData = await Video.findById(req.params.id);
    const video = await Video.findByIdAndUpdate(req.params.id, {
      likes: videoData.likes + 1,
    });

    res.status(200).json({ status: "success", data: video.likes + 1 });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.updateUnlike = async (req, res) => {
  try {
    if (!req.user) {
      res.status(404).json({ status: "fail", message: "User not logged in" });
    }

    const videoData = await Video.findById(req.params.id);
    const video = await Video.findByIdAndUpdate(req.params.id, {
      likes: videoData.likes - 1,
    });

    res.status(200).json({ status: "success", data: video.likes - 1 });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.getVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    res.status(200).json({ status: "success", data: video });
  } catch (err) {
    res
      .status(404)
      .json({ status: "fail", message: "Fail to get Video Try Again" });
  }
};
