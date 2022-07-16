const router = require("express").Router();

// import controllers
const home = require('../controllers/home');
const {register} = require('../controllers/register');

router.get("/", home.index);
router.post("/register",register)

module.exports = router;