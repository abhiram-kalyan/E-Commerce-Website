const express = require('express');
const { signup, signin,requireSignin } = require('../../controllers/admin/auth');
const router = express.Router();

router.post('/admin/signin',signin);
router.post('/admin/signup',signup);


module.exports=router;