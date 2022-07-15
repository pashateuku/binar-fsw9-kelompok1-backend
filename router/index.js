const router = require("express").Router();

// import controllers
const home = require('../controllers/home');

router.use("/", home.index);

module.exports = router;