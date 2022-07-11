const express = require("express");
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const {
  createPlayer,
  getPlayers,
  getPlayersBySearch,
    getPlayer,
  updatePlayer


} = require("../controllers/playersController");
const Player = require("../models/Player");
router.route("/").post(createPlayer).get(getPlayers);
router.route("/search").get(getPlayersBySearch);
router.route("/card/:id").get(getPlayer);
router.route("/card/:id/update",upload.single('img')).patch(updatePlayer);


module.exports = router;
