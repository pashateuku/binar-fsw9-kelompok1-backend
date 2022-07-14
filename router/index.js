const router = require("express").Router();

const home = require('../controllers/home');

router.use("/", home.index);

module.exports = router;