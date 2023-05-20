const express = require('express');
const app = express();


var router = express.Router();
var mian = require('./main/main');
var login = require('./login/login')
var signup = require('./signup/signup')
var hidden = require('./hidden/hidden');
router.use('/',mian);
router.use('/login',login);
router.use('/signup',signup);
router.use('/hidden',hidden);

module.exports = router