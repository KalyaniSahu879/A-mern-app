const express=require('express');
const router = express.Router();
const {registerUSer , loginUSer , getMe } = require('../controllers/user.controller')

router.post('/' , registerUSer)
router.post('/login' , loginUSer)
router.get('/me' , getMe)


module.exports = router;