const express = require("express");

const routeProtector = require("../middlewares/routeProtector");

const videoController = require("../controllers/videoController");

const router = express.Router();

router
  .route("/merge-video")
  .post(routeProtector.protect, videoController.mergeVideos);

module.exports = router;
