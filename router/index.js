const router = require("express").Router();

// import controllers
const home = require('../controllers/home');
const register = require('../controllers/register');
const login = require('../controllers/login');

router.get("/", home.index);
router.post("/register",register);
router.post('/login',login);


module.exports = router;