const express = require("express");
const videoController = require("../controller/videoController.js");
const authController = require("../controller/authController.js");

const router = express.Router();

router
  .route("/")
  .get(videoController.getAllVideos)
  .post(videoController.createVideo);

router.route("/:id").get(videoController.getVideo);
router
  .route("/:id/unlike")
  .get(authController.fetchUser, videoController.updateUnlike);
router
  .route("/:id/like")
  .get(authController.fetchUser, videoController.updateLike);
router
  .route("/:id")
  .delete(authController.isLoggedIn, videoController.deleteVideo);
module.exports = router;
